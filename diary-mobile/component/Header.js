import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Font } from "expo";

export default class Header extends Component {
  state = {
    isFontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "mukta-regular": require("../assets/Mukta/Mukta-Regular.ttf"),
      "mukta-medium": require("../assets/Mukta/Mukta-Medium.ttf")
    });
    this.setState({ isFontLoaded: true });
  }
  render() {
    const { isFontLoaded } = this.state;
    return (
      <View style={styles.container}>
        {isFontLoaded ? (
          <Text style={styles.text}>DAILY DIARY</Text>
        ) : (
          <Text>Loading</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    flex: 1,
    fontFamily: "mukta-medium",
    fontSize: 28,
    color: "rgb(50, 50, 50)"
  }
});
