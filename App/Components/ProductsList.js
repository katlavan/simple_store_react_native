import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight, ActivityIndicator } from "react-native";

let styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  }
});

export default class ProductsList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> This is a Products List </Text>
        <Text> {this.props.userInfo.name} </Text>
      </View>
    )
  }
}