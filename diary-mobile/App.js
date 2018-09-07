import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Loading from "./component/Loading";
import Home from "./component/Home";

const { width, height } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    isLoaded: false
  };
  componentDidMount() {
    this._getContents();
  }
  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (
          <View style={styles.loaded}>
            <View style={styles.header} />
            <View style={styles.view}>
              <Home />
            </View>
            <View style={styles.nav} />
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
    flex: 3
  },
  view: {
    flex: 26
  },
  nav: {
    flex: 3
  }
});
