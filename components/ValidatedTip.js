import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TouchableHighlight, ScrollView } from "react-native";
import styles from "../styles/validatedTipStyles";
import { setSelectedIndex } from "../actions";

function IsOptional(value) {
  return value.country.tips[value.country.selectedTipIndex].optional ? (
    <Text style={styles.optional}>Tipping optional</Text>
  ) : null;
}

class ValidatedTip extends Component {
  render() {
    const { name, tips, selectedTipIndex, currency } = this.props.country;

    let tipButtons =
      tips.length <= 1
        ? null
        : tips.map((item, i) => {
            let useThisButtonStyle = styles.tipType;
            let useThisTextStyle = styles.tipButtonText;
            if (i === selectedTipIndex) {
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
        if (tips.length === 1 && tips[selectedTipIndex] !== null) {
          return (
            <View>
              <View style={styles.tipExtras}>
                <Text style={styles.percentage}>
                  Tip: {tips[selectedTipIndex].percentage * 100}%
                </Text>
                <IsOptional country={this.props.country} />
              </View>
              <View style={styles.tipWrapper}>
                <Text style={styles.text}>
                  {currency}
                  {this.props.amount}
                </Text>
              </View>
            </View>
          );
        } else if (tips.length > 1) {
          return (
            <View>
              <View style={styles.tipButtonWrapper}>
                <ScrollView horizontal={true}>{tipButtons}</ScrollView>
              </View>
              <View style={styles.tipExtras}>
                <Text style={styles.percentage}>
                  Tip: {tips[selectedTipIndex].percentage * 100}%
                </Text>
                <IsOptional country={this.props.country} />
              </View>
              <View style={styles.tipWrapper}>
                <Text style={styles.text}>
                  {currency}
                  {this.props.amount}
                </Text>
              </View>
            </View>
          );
        } else if (
          name === "Japan" ||
          name === "South Korea" ||
          name === "Georgia" ||
          name === "Iceland"
        ) {
          return (
            <View style={styles.textWrapper}>
              <Text style={styles.text}>Do not tip in {name}.</Text>
            </View>
          );
        } else {
          return (
            <View style={styles.textWrapper}>
              <Text style={styles.text}>You don't need to tip in {name}.</Text>
            </View>
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
