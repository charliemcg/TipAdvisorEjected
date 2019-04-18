import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Linking,
  Alert
} from "react-native";
import styles from "../styles/contactStyles";
import email from "react-native-email";
import emailImg from "../images/email.png";

const EMAIL = "violenthoboenterprises@gmail.com";
const REVIEW = ""; //Need to get the link for ios and android
const MORE_APPS =
  "https://play.google.com/store/apps/developer?id=ViolentHoboEnterprises";

class Contact extends Component {
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
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contactWrapper}>
          <View style={styles.email}>
            <TouchableHighlight onPress={() => this.handleReview()}>
              <View style={styles.emailTouchWrapper}>
                <View style={styles.emailTextWrapper}>
                  <Text style={styles.emailText}>Leave a review</Text>
                </View>
                <View style={styles.emailImgWrapper}>
                  <Image style={styles.emailImg} source={emailImg} />
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.email}>
            <TouchableHighlight onPress={() => this.handleEmail()}>
              <View style={styles.emailTouchWrapper}>
                <View style={styles.emailTextWrapper}>
                  <Text style={styles.emailText}>Email</Text>
                </View>
                <View style={styles.emailImgWrapper}>
                  <Image style={styles.emailImg} source={emailImg} />
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.email}>
            <TouchableHighlight onPress={() => this.handleMoreApps()}>
              <View style={styles.emailTouchWrapper}>
                <View style={styles.emailTextWrapper}>
                  <Text style={styles.emailText}>More apps</Text>
                </View>
                <View style={styles.emailImgWrapper}>
                  <Image style={styles.emailImg} source={emailImg} />
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.credit}>
            <Text style={styles.text}>
              Violent Hobo Enterprises - {new Date().getFullYear()}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Contact;
