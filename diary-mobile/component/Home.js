import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imagePos}>
          <Image
            source={require("../public/images/ex1.png")}
            style={styles.images}
          />
        </View>
        <View style={styles.text}>
          <Text>This is a Scroll View</Text>
        </View>
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
  imagePos: {
    flex: 1
  },
  images: {
    flex: 1,
    width: width
  },
  text: {
    flex: 1,
    justifyContent: "center"
  }
});
