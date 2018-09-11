import React, { Component } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Header from "./Header";

const Opacity = 0.6;

export default class Nav extends Component {
  static navigationOptions = {
    headerTitle: <Header />
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={Opacity}>
          <Entypo
            name="home"
            size={30}
            onPress={() => this.props.pressHome.navigate("Home")}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={Opacity}>
          <Entypo name="grid" size={30} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={Opacity}>
          <Entypo name="menu" size={30} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
