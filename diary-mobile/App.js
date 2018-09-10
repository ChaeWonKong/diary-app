import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity
} from "react-native";
import Loading from "./component/Loading";
import Home from "./component/Home";
import CreateView from "./component/CreateView";
import { Entypo } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    isLoaded: false,
    isCreating: false
  };
  componentDidMount() {
    this._getContents();
  }
  render() {
    const { isLoaded, isCreating } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (
          <View style={styles.loaded}>
            <View style={styles.header}>
              <Text style={styles.text}>Daily Diary</Text>
            </View>
            <View style={styles.view}>
              {isCreating ? <CreateView /> : <Home />}
            </View>
            <TouchableOpacity style={styles.createButton}>
              <Entypo
                name={"circle-with-plus"}
                size={70}
                color={"green"}
                onPressOut={_getCreatePage}
              />
            </TouchableOpacity>
            <View style={styles.nav}>
              <Entypo name={"home"} size={30} />
              <Entypo name={"grid"} size={30} />
              <Entypo name={"menu"} size={30} />
            </View>
          </View>
        ) : (
          <Loading />
        )}
      </View>
    );
  }
  _getContents = () => {
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 2000);
    _getCreatePage = () => {
      this.setState({ isCreating: true });
    };
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loaded: {
    flex: 1
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 30
  },
  text: {
    fontSize: 32,
    color: "rgb(50, 50, 50)"
  },
  view: {
    flex: 7
  },
  createButton: {
    position: "absolute",
    top: (7 * height) / 9,
    left: (6 * width) / 8,
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
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
