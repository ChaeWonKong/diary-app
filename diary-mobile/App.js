import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { createStackNavigator } from "react-navigation";
import Loading from "./component/Loading";
import HomeScreen from "./component/HomeScreen";
import CreateScreen from "./component/CreateScreen";
import Nav from "./component/Nav";

const { width, height } = Dimensions.get("window");
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Create: CreateScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends React.Component {
  state = {
    isLoaded: false
  };
  componentDidMount() {
    this._getContents();
  }
  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (
          <View style={styles.loaded}>
            <View style={styles.header}>
              <Text style={styles.text}>Diary</Text>
            </View>
            <View style={styles.view}>
              <RootStack />
            </View>
            <Nav style={styles.nav} />
          </View>
        ) : (
          <Loading />
        )}
      </View>
    );
  }
  _getContents = () => {
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 2000);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loaded: {
    flex: 1
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  text: {
    flex: 1,
    fontSize: 32,
    color: "rgb(50, 50, 50)"
  },
  view: {
    flex: 10
  },
  nav: {
    flex: 2
  }
});
