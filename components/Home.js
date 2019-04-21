import React, { Component } from "react";
import { Text, View, Image, TextInput, Alert } from "react-native";
import styles from "../styles/homeStyles";
import { connect } from "react-redux";
import Picker from "./Picker";
import { calculateTip, setError } from "../actions";
import ValidatedTip from "./ValidatedTip";
import mapImg from "../images/mapEdited.jpg";

class Home extends Component {
  state = {
    inputValue: null
  };

  handleChange = event => {
    this.setState({ inputValue: event });
    if (this.props.country.tips[this.props.country.selectedTipIndex] !== null) {
      if (isNaN(event)) {
        this.props.setError("NOT_A_NUMBER");
      } else if (event < 0) {
        this.props.setError("NEGATIVE");
      } else if (event === "") {
        this.props.calculateTip(0);
        this.props.setError(null);
      } else if (event >= 0) {
        this.props.calculateTip(event);
        this.props.setError(null);
      }
    }
  };

  render() {
    const getTextInput =
      this.props.country.tips[this.props.country.selectedTipIndex] ===
      null ? null : (
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={this.handleChange}
          placeholder="amount..."
          placeholderTextColor="#666"
          maxLength={8}
          onBlur={() => {
            if (!isNaN(this.state.inputValue) && this.state.inputValue > 0) {
              this.setState({
                inputValue: `${this.props.country.currency}${
                  this.state.inputValue
                }`
              });
            }
          }}
          onFocus={() => {
            let prefixRemovedValue = this.state.inputValue;
            if (prefixRemovedValue !== null && isNaN(prefixRemovedValue)) {
              prefixRemovedValue = prefixRemovedValue.slice(1);
            }
            if (
              prefixRemovedValue !== null &&
              !isNaN(prefixRemovedValue) &&
              prefixRemovedValue > 0
            ) {
              this.setState({ inputValue: this.state.inputValue.slice(1) });
            } else {
              this.setState({ inputValue: null });
            }
          }}
          value={this.state.inputValue}
        />
      );

    const getBuffer =
      this.props.country.tips[this.props.country.selectedTipIndex] ===
      null ? null : (
        <View style={styles.buffer} />
      );

    //use flat instead of shiny for ios
    const flagImgUrl =
      "https://www.countryflags.io/" +
      this.props.country.flag +
      "/shiny/64.png";

    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Image source={mapImg} style={styles.map} />
          <Text style={styles.title}>Tip Advisor</Text>
        </View>
        {getBuffer}
        <View style={styles.countryRow}>
          <View style={styles.flag}>
            <Image
              source={{ uri: flagImgUrl }}
              style={{ width: 50, height: 50 }}
            />
          </View>
          <View style={styles.picker}>
            <Picker />
          </View>
        </View>
        <View style={styles.tipRow}>
          {getTextInput}
          <View style={styles.description}>
            <ValidatedTip />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  // Alert.alert("Mapping state to props");
  return {
    country: state.country,
    amount: state.amount,
    err: state.err
  };
};

const mapDispatchToProps = dispatch => {
  return {
    calculateTip: amount => {
      dispatch(calculateTip(amount));
    },
    setError: error => {
      dispatch(setError(error));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
