import React, { Component } from "react";
import { connect } from "react-redux";
import { changeCountry } from "../actions";
import { countries } from "../countryList";
import { Picker, Alert, View, Text } from "react-native";
import styles from "../styles/pickerStyles";

class CountryPicker extends Component {
  handleChange = event => {
    this.props.changeCountry(event);
  };
  render() {
    const pickerItems = countries.map(country => {
      return (
        <Picker.Item
          key={country.name}
          label={country.name}
          value={country.name}
        />
      );
    });
    return (
      <Picker
        selectedValue={this.props.country.name}
        style={styles.picker}
        onValueChange={value => this.handleChange(value)}
      >
        {pickerItems}
      </Picker>
    );
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
    changeCountry: country => {
      dispatch(changeCountry(country));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryPicker);
