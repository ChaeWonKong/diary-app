import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity
} from "react-native";
import Header from "./Header";
import Nav from "./Nav";
import { Entypo } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const Opacity = 0.6;

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: <Header />
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imagePos}>
          <Image
            source={require("../public/images/ex2.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.text}>
          <Text>This is Home View</Text>
        </View>
        <TouchableOpacity style={styles.createButton} activeOpacity={Opacity}>
          <Entypo
            name="circle-with-plus"
            size={50}
            color="green"
            onPress={() => this.props.navigation.navigate("Create")}
          />
        </TouchableOpacity>
        <View style={styles.nav}>
          <Nav pressHome={this.props.navigation} />
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
    flex: 5
  },
  image: {
    flex: 1,
    width: width
  },
  text: {
    flex: 5,
    justifyContent: "center"
  },
  createButton: {
    position: "absolute",
    top: (7 * height) / 10,
    left: (8 * width) / 10,
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
  },
  nav: {
    flex: 1,
    width: width,
    backgroundColor: "#fff"
  }
});
