import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity
} from "react-native";
import { createStackNavigator } from "react-navigation";
import CreateScreen from "./CreateScreen";
import { Entypo } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <View style={styles.imagePos} />
        <Text style={styles.text}>This is Home View</Text>
        <TouchableOpacity style={styles.createButton}>
          <Entypo
            name="circle-with-plus"
            size={50}
            color="green"
            onPress={() => this.props.navigation.navigate("Create")}
          />
        </TouchableOpacity>
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
  text: {
    flex: 1,
    justifyContent: "center"
  },
  createButton: {
    position: "absolute",
    top: (7 * height) / 11,
    left: (7 * width) / 9,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: {
          height: 5,
          width: 0
        }
      },
      android: {
        elevation: 1
      }
    })
  }
});
