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
import uuidv1 from "uuid/v1";

const { width, height } = Dimensions.get("window");
const Opacity = 0.6;

const diaryData = [
  {
    title: "선인장",
    text:
      "선인장은 죽을 때가 되어서야 꽃을 피운다. 그것은 명멸하는 생명력 앞에서 최후 변론을 하는 셈이기도 하다.",
    img: require("../public/images/ex1.png"),
    date: "2018-01-02",
    id: ""
  },
  {
    title: "커피를 마시며",
    text:
      "커피는 쓰다. 커피는 향기롭다. 커피향을 맡은 사람은 커피를 찾지만, 정작 커피는 마시면 쓰다. 그것은 어쩌면 멀리서 볼 때는 희극이지만 가까이서 보면 비극인 인생과 닮았는지도 모른다.",
    img: require("../public/images/ex2.png"),
    date: "2018-09-12",
    id: ""
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
          <Nav pressBtn={this.props.navigation} />
        </View>
      </View>
    );
  }

  _getDiaries = () => {
    const diaries = diaryData.map(diary => {
      const newDiaries = {
        ...diary,
        id: uuidv1()
      };
      return newDiaries;
    });
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
          <View style={styles.textField}>
            <Text style={styles.date}>{diary.id}</Text>
            <Text style={styles.date}>{diary.date}</Text>
            <Text style={styles.title}>{diary.title}</Text>
            <Text style={styles.text} multiline={true}>
              {diary.text}
            </Text>
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
    height: (5 * height) / 12
  },
  image: {
    width: width,
    flex: 1
  },
  textField: {
    height: (5 * height) / 12,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    padding: 20
  },
  title: {
    fontSize: 20,
    marginTop: 10
  },
  date: {
    fontSize: 16,
    color: "#bbb",
    marginTop: 10
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24
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
