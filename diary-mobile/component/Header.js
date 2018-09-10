import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Daily Diary</Text>
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
    fontSize: 32,
    color: "rgb(50, 50, 50)"
  }
});
