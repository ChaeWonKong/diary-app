import React, { Component } from "react";
import { TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default class Nav extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Entypo name="home" size={40} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="grid" size={40} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="menu" size={40} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
