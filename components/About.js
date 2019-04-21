import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Alert,
  ListView,
  ScrollView
} from "react-native";
import styles from "../styles/aboutStyles";
import mapImg from "../images/mapEdited.jpg";

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Image source={mapImg} style={styles.map} />
        </View>
        <View style={styles.descriptionWrapper}>
          <ScrollView>
            <Text style={styles.text}>
              Here are a few quick points about this app:{`\n\n`}
              {`\u2022`} Just because tipping is accepted does not mean that it
              is expected. Some tips in this app are labelled "Tipping Optional"
              {`\n\n`}
              {`\u2022`} This app calculates the minimum expected amounts.
              Rounding up is advised for great service.{`\n\n`}
              {`\u2022`}Services which cater exclusively to tourists may be
              accepting of tips even in countries which do not usually practice
              tipping. eg: tour guides.{`\n\n`}
              {`\u2022`} In most countries tipping is uncommon in rural areas.
              {`\n\n`}
              {`\u2022`} The restaurant tips in this app should not be applied
              to fast food shops.{`\n\n`}
              The information in this app is accurate to the best of my
              knowledge and is intended to be used as a quick reference. It is
              advised that you do further research. I'm always looking to
              improve this information so contact me via the Contact screen with
              any changes I should make.
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default About;
