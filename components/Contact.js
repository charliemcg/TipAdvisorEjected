import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Linking,
  Alert,
  Dimensions,
  Platform
} from "react-native";
import styles from "../styles/contactStyles";
import stylesLarge from "../styles/contactStylesLarge";
import stylesMedium from "../styles/contactStylesMedium";
import email from "react-native-email";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Title from "./Title";

const EMAIL = "violenthoboenterprises@gmail.com";
const REVIEW = Platform.OS === "ios" ? "" : "https://play.google.com/store/apps/details?id=com.tipadvisor"; //Need to get the link for both ios and android
const MORE_APPS = Platform.OS === "ios" ? "" : 
  "https://play.google.com/store/apps/developer?id=ViolentHoboEnterprises";

class Contact extends Component {
  static navigationOptions = ({ navigation }) => {
    // const {routeName} = navigation.state.routes[navigation.state.index]
    // let navigationOptions = {};
    // if(routeName === 'PrivacyPolicy'){
    //   navigationOptions.tabBarVisible = false
    // }
    // return navigationOptions
  };
  handleReview = () => {
    // inform user of error
    Linking.openURL(REVIEW).catch(err =>
      console.error("An error occurred", err)
    );
  };
  handleMoreApps = () => {
    // inform user of error
    Linking.openURL(MORE_APPS).catch(err =>
      console.error("An error occurred", err)
    );
  };
  handleEmail = () => {
    // inform user of error
    email(EMAIL, {}).catch(err => console.error("An error occured", err));
  };
  getSize = () => {
    return Dimensions.get("window").width < 550
      ? styles
      : Dimensions.get("window").width < 650
      ? stylesMedium
      : stylesLarge;
  };
  getIconSize = () => {
    return Dimensions.get("window").width > 650 ? 80 : 50;
  };
  render() {
    const sizeAdjustedStyles = this.getSize();
    const iconSize = this.getIconSize();
    return (
      <View style={sizeAdjustedStyles.container}>
        <Title />
        <TouchableHighlight 
          onPress={() => this.props.navigation.navigate("PrivacyPolicy")}
          style={{
            position: 'absolute',
            top: "7%",
            right: "4%",
            padding: 3
          }}
          underlayColor="#022d1a">
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold'
              }}
            >
              Privacy
            </Text>
        </TouchableHighlight>
        <View style={sizeAdjustedStyles.contactWrapper}>
          <View style={sizeAdjustedStyles.touchableWrapper}>
            <TouchableHighlight
              onPress={() => this.handleReview()}
              underlayColor="#eee"
              style={{ borderRadius: 20 }}
            >
              <View style={sizeAdjustedStyles.touchWrapper}>
                <View style={sizeAdjustedStyles.textWrapper}>
                  <Text style={sizeAdjustedStyles.text}>Leave a review</Text>
                </View>
                <View style={sizeAdjustedStyles.imgWrapper}>
                  <Icon name="star-face" color={"#888"} size={iconSize} />
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View style={sizeAdjustedStyles.touchableWrapper}>
            <TouchableHighlight
              onPress={() => this.handleEmail()}
              underlayColor="#eee"
              style={{ borderRadius: 20 }}
            >
              <View style={sizeAdjustedStyles.touchWrapper}>
                <View style={sizeAdjustedStyles.textWrapper}>
                  <Text style={sizeAdjustedStyles.text}>Email</Text>
                </View>
                <View style={sizeAdjustedStyles.imgWrapper}>
                  <Icon name="email-outline" color={"#888"} size={iconSize} />
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View style={sizeAdjustedStyles.touchableWrapper}>
            <TouchableHighlight
              onPress={() => this.handleMoreApps()}
              underlayColor="#eee"
              style={{ borderRadius: 20 }}
            >
              <View style={sizeAdjustedStyles.touchWrapper}>
                <View style={sizeAdjustedStyles.textWrapper}>
                  <Text style={sizeAdjustedStyles.text}>More apps</Text>
                </View>
                <View style={sizeAdjustedStyles.imgWrapper}>
                  <Icon
                    name="cellphone-arrow-down"
                    color={"#888"}
                    size={iconSize}
                  />
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={sizeAdjustedStyles.credit}>
          <Text style={sizeAdjustedStyles.creditText}>
            Violent Hobo Enterprises - {new Date().getFullYear()}
          </Text>
        </View>
      </View>
    );
  }
}

export default Contact;
