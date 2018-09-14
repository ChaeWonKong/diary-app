import React, { Component } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button
} from "react-native";
import Header from "./Header";
import Nav from "./Nav";
import Entypo from "../node_modules/@expo/vector-icons/Entypo";
import { connect } from "react-redux";
import { addDiary } from "../reducer";

const { width } = Dimensions.get("window");
const Opacity = 0.6;

class CreateScreen extends Component {
  static navigationOptions = {
    headerTitle: <Header />
  };

  state = {
    title: "",
    text: "",
    img: "./public/images/ex1.png"
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
              onChangeText={title => this.setState({ title: title })}
              placeholder="Title"
              fontSize="20px"
              returnKeyType={"next"}
            />
          </View>
          <View style={styles.text}>
            <TextInput
              onChangeText={text => this.setState({ text: text })}
              placeholder="Text"
              fontSize="20px"
              multiline={true}
              returnKeyType={"next"}
            />
            <Button
              title="SUBMIT"
              onPress={this._dispatchDiaryFromState(this.state)}
            />
          </View>
        </View>
        <Nav pressBtn={this.props.navigation} />
      </View>
    );
  }
  _dispatchDiaryFromState = state => {
    dispatch(addDiary(state.title, state.text, state.img));
    this.setState({
      title: "",
      text: "",
      img: ""
    });
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

CreateScreen = connect()(CreateScreen);

export default CreateScreen;
