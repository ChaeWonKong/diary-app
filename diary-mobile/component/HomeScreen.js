import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Header from "./Header";
import Nav from "./Nav";
import { Entypo } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const Opacity = 0.6;

const diaryData = [
  {
    title: "img1",
    text: "img1 is...",
    img: require("../public/images/ex1.png"),
    id: "0001"
  },
  {
    title: "img2",
    text: "img2 is...",
    img: require("../public/images/ex2.png"),
    id: "0002"
  }
];

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: <Header />
  };
  state = {};
  componentDidMount() {
    this._getDiaries();
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.diaries ? (
          <View style={styles.scrollView}>
            <ScrollView style={styles.scrollView}>
              {this._renderDiaries()}
            </ScrollView>
          </View>
        ) : (
          <Text>Loading</Text>
        )}
        <TouchableOpacity style={styles.createButton} activeOpacity={Opacity}>
          <Entypo
            name="circle-with-plus"
            size={70}
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

  _getDiaries = () => {
    const diaries = diaryData;
    this.setState({
      diaries
    });
  };

  _renderDiaries = () => {
    const diaries = this.state.diaries.map(diary => {
      return (
        <View key={diary.id} style={styles.contents}>
          <View style={styles.imagePos}>
            <Image source={diary.img} style={styles.image} />
          </View>
          <View style={styles.text}>
            <Text>{diary.text}</Text>
          </View>
        </View>
      );
    });
    return diaries;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  scrollView: {
    flex: 10
  },
  contents: {
    flex: 10
  },
  imagePos: {
    flex: 1,
    height: width
  },
  image: {
    width: width,
    flex: 1
  },
  text: {
    height: width,
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  createButton: {
    position: "absolute",
    top: (7 * height) / 10,
    left: (3 * width) / 4,
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
