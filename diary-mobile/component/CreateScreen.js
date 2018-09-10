import React, { Component } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "react-navigation";

export default class CreateScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi! You can create your diary here~</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
