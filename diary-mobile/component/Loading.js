import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Font } from "expo";

export default class Loading extends Component {
  state = {
    isFontLoadied: this.props.isFontLoadied
  };
  async componentDidMount() {
    await Font.loadAsync({
      "mukta-medium": require("../assets/Mukta/Mukta-Medium.ttf")
    });
    this.setState({
      isFontLoadied: true
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../public/images/main.png")}
          style={styles.loadingImg}
        />
        {this.state.isFontLoadied ? (
          <Text style={styles.loadingText}>DAILY DIARY</Text>
        ) : (
          <Text>Loading...</Text>
        )}
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
  loadingImg: {
    width: 100,
    height: 100
  },
  loadingText: {
    marginTop: 30,
    fontSize: 32,
    fontFamily: "mukta-medium",
    color: "#bbb"
  }
});
