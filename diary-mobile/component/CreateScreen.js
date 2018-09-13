import React, { Component } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Header from "./Header";
import Nav from "./Nav";
import Entypo from "../node_modules/@expo/vector-icons/Entypo";

const { width } = Dimensions.get("window");
const Opacity = 0.6;

export default class CreateScreen extends Component {
  static navigationOptions = {
    headerTitle: <Header />
  };

  state = {};

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
              fontSize="20px"
              returnKeyType={"next"}
            />
          </View>
          <View style={styles.text}>
            <TextInput
              onChange={text => this.setState({ text: text })}
              placeholder="Text"
              fontSize="20px"
              multiline={true}
              returnKeyType={"next"}
            />
          </View>
        </View>
        <Nav pressBtn={this.props.navigation} />
      </View>
    );
  }
  _createDiaries = () => {
    if (state) {
      this.setState({
        ...state,
        id: uuidv1(),
        img: "null",
        date: new Date()
      });
    }
  };
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
