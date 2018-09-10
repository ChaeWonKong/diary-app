import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class CreateView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
