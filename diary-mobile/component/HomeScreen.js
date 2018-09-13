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
import { Font } from "expo";
import Loading from "./Loading";

const { width, height } = Dimensions.get("window");
const Opacity = 0.6;

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: <Header />
  };
  state = {};
  async componentDidMount() {
    await Font.loadAsync({
      "noto-sans-med": require("../assets/fonts/Noto_Sans_KR/NotoSansKR-Medium.otf"),
      "noto-sans": require("../assets/fonts/Noto_Sans_KR/NotoSansKR-Light.otf")
    });
    this._getDiaries();
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.diaries ? (
          <View style={styles.container}>
            <View style={styles.scrollView}>
              <ScrollView style={styles.scrollView}>
                {this._renderDiaries()}
              </ScrollView>
            </View>

            <TouchableOpacity
              style={styles.createButton}
              activeOpacity={Opacity}
            >
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
        ) : (
          <Loading />
        )}
      </View>
    );
  }

  _getDiaries = () => {
    // map 함수 사용법 제대로 익히기...
    const diaries = this.props.diaries.map(diary => {});
    console.log(diaries);
    return this.setState({ diaries });
  };

  _renderDiaries = () => {
    const diaries = this.state.map(diary => {
      return (
        <View key={id} style={styles.contents}>
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
    marginTop: 10,
    fontFamily: "noto-sans-med"
  },
  date: {
    fontSize: 16,
    fontFamily: "noto-sans",
    color: "#bbb",
    marginTop: 10
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: "noto-sans",
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
