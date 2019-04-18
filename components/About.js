import React, { Component } from "react";
import { Text, View, Image, TextInput, Alert, ListView } from "react-native";
import styles from "../styles/aboutStyles";

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Here are a few quick points about this app
        </Text>
        <Text />
        <Text style={styles.text}>* Don't tip in rural areas.</Text>
        <Text style={styles.text}>
          * Percentages shown are the minimum expected amounts. Round up.
        </Text>
        <Text style={styles.text}>
          * Fast food joints don't count as restaurants.
        </Text>
        <Text />
        <Text style={styles.text}>It is advised to do further research.</Text>
      </View>
    );
  }
}

export default About;
