import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Nav from "./Nav";

const { width, height } = Dimensions.get("window");

export default class GridScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.grid}>
          <Text>This is a Grid View</Text>
        </View>
        <View style={styles.nav}>
          <Nav pressBtn={this.props.navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  grid: {
    flex: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  nav: {
    flex: 1,
    width: width,
    backgroundColor: "#fff"
  }
});
