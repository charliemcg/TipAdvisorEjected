import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, Alert, Button, View, TouchableHighlight } from "react-native";
import styles from "../appStyles";
import { setSelectedIndex } from "../actions";

class ValidatedTip extends Component {
  render() {
    let tipButtons =
      this.props.country.tips.length <= 1
        ? null
        : this.props.country.tips.map((item, i) => {
            let useThisButtonStyle = styles.tipType;
            let useThisTextStyle = styles.tipButtonText;
            if (i === this.props.country.selectedTipIndex) {
              useThisButtonStyle = styles.selectedTipType;
              useThisTextStyle = styles.selectedTipButtonText;
            }
            return (
              <View key={i}>
                <TouchableHighlight
                  style={useThisButtonStyle}
                  onPress={() => this.props.setSelectedIndex(i)}
                >
                  <Text style={useThisTextStyle}>{item.type}</Text>
                </TouchableHighlight>
              </View>
            );
          });
    switch (this.props.err) {
      case "NOT_A_NUMBER":
        return <Text style={styles.errorText}>Only use numbers.</Text>;
      case "NEGATIVE":
        return (
          <Text style={styles.errorText}>Don't use negative numbers.</Text>
        );
      case null:
        // if (this.props.country.tips.length === 1) {
        if (
          this.props.country.tips.length === 1 &&
          this.props.country.tips[0] !== null
        ) {
          return (
            <Text style={styles.text}>
              {this.props.country.currency}
              {this.props.amount}
            </Text>
          );
        } else if (this.props.country.tips.length > 1) {
          return (
            <View>
              {tipButtons}
              <Text>//////////////////</Text>
              <Text>
                Tip:{" "}
                {this.props.country.tips[this.props.country.selectedTipIndex]
                  .percentage * 100}
                %
              </Text>
              <Text style={styles.text}>
                {this.props.country.currency}
                {this.props.amount}
              </Text>
            </View>
          );
        } else {
          return (
            <Text style={styles.text}>
              You don't need to tip in {this.props.country.name}.
            </Text>
          );
        }
      default:
        return <Text style={styles.errorText}>Something went wrong...</Text>;
    }
  }
}

const mapStateToProps = state => {
  return {
    country: state.country,
    amount: state.amount,
    err: state.err
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedIndex: index => {
      dispatch(setSelectedIndex(index));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ValidatedTip);
