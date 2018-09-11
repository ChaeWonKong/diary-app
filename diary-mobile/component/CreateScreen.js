import React, { Component } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Header from "./Header";
import Entypo from "../node_modules/@expo/vector-icons/Entypo";

const { width } = Dimensions.get("window");
const Opacity = 0.6;

export default class CreateScreen extends Component {
  static navigationOptions = {
    headerTitle: <Header />
  };

  state = {
    title: "",
    text: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.create}>
          <View style={styles.image}>
            <TouchableOpacity activeOpacity={Opacity}>
              <Entypo name="squared-plus" size={100} color="#bbb" />
            </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <TextInput
              onChange={title => this.setState({ title: title })}
              placeholder="Title"
              value={this.state.title}
              fontSize="20px"
              returnKeyType={"next"}
            />
          </View>
          <View style={styles.text}>
            <TextInput
              onChange={text => this.setState({ text: text })}
              placeholder="Text"
              value={this.state.text}
              fontSize="20px"
              multiline={true}
              returnKeyType={"next"}
            />
          </View>
        </View>
        {/* Nav here */}}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  create: {
    flex: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  image: {
    padding: 30,
    alignItems: "center"
  },
  title: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  text: {
    flex: 9,
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  nav: {
    flex: 1,
    width: width,
    backgroundColor: "#fff"
  }
});
