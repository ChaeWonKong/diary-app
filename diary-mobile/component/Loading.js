import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../public/images/main.png")}
          style={styles.loadingImg}
        />
        <Text style={styles.loadingText}>Daily Diary</Text>
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
  loadingImg: {
    width: 100,
    height: 100
  },
  loadingText: {
    marginTop: 30,
    fontSize: 32,
    color: "#bbb"
  }
});
