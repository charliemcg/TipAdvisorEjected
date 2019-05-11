import React, { Component } from "react";
import { Provider } from "react-redux";
import { Platform, StatusBar, View, Text, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy"
import store from "./store";
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View
    style={{
      height: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
    }}
  >
    <StatusBar barStyle="light-content" translucent backgroundColor="#022d1a" {...props} />
  </View>
);

const ContactNavigator = createStackNavigator(
  {
    Contact: {
      screen: Contact,
      navigationOptions: {
        header: null
      }
    },
    PrivacyPolicy: {
      screen: PrivacyPolicy,
      navigationOptions: {
        title: "Privacy Policy",
        headerTintColor: "#ddd",
        headerStyle: {
          backgroundColor: "#022d1a"
        },
      }
    }
  }
)

ContactNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const Navigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home-outline" color={tintColor} size={20} />
        )
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="information-outline" color={tintColor} size={20} />
        )
      }
    },
    Contact: {
      // screen: Contact,
      screen: ContactNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="email-outline" color={tintColor} size={20} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#338a3e",
      labelStyle: {
        fontSize: 15
      },
      style: {
        backgroundColor: "#fff"
      }
    }
  }
);

const Container = createAppContainer(Navigator);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyStatusBar />
        <Container />
      </Provider>
    );
  }
}

export default App;
