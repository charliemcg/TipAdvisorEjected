import React, { Component } from "react";
import { Provider } from "react-redux";
import { Platform, StatusBar, View, Text } from "react-native";
import Home from "./components/Home";
import About from "./components/About";
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
      screen: Home
    },
    About: {
      screen: About
    }
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 20
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
        {/* <Home /> */}
        <Container />
      </Provider>
    );
  }
}

export default App;
