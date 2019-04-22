import React, { Component } from "react";
import { View, Image } from "react-native";
import mapImg from "../images/mapBlurred.jpg";
import styles from "../styles/titleStyles";

export default class Title extends Component {
  render() {
    return (
      <View style={styles.titleWrapper}>
        <Image source={mapImg} style={styles.map} resizeMode="cover" />
      </View>
    );
  }
}
