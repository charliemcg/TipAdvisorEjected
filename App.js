import React, { Component } from "react";
import { Provider } from "react-redux";
import { Platform, StatusBar, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import store from "./store";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View
    style={{
      backgroundColor: "#338a3e",
      height: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
    }}
  >
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const Navigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: () => <Icon name="home-outline" color={"#000"} size={20} />
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarIcon: () => (
          <Icon name="information-outline" color={"#000"} size={20} />
        )
      }
    },
    Contact: {
      screen: Contact,
      navigationOptions: {
        tabBarIcon: () => <Icon name="email-outline" color={"#000"} size={20} />
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
        // tabStyle: {}
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
