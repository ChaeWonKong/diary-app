import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Loading from "./component/Loading";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  loadingIcon: {
    width: 100,
    height: 100
  },
  loadingTitle: {
    marginTop: 20,
    color: "#bbb",
    fontSize: 32
  }
});
