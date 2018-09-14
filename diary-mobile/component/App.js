import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import Loading from "./Loading";
import Home from "../container/Home";
import Create from "../container/Create";
import GreedScreen from "./GridScreen";

const RootStack = createStackNavigator(
  {
    Home: Home,
    Create: Create,
    Grid: GreedScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends Component {
  state = {
    isLoaded: false,
    isFontLoaded: false
  };
  componentDidMount() {
    this._getContents();
  }
  render() {
    const { isLoaded, isFontLoaded } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (
          <View style={styles.view}>
            <RootStack />
          </View>
        ) : (
          <Loading font={isFontLoaded} />
        )}
      </View>
    );
  }
  _getContents = () => {
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 1000);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  view: {
    flex: 8
  }
});
