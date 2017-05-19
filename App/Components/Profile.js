import React, {Component} from "react";
import {ScrollView, StyleSheet, View, Text} from "react-native";

import Badge from "./Badge";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    paddingBottom: 20,
    backgroundColor: 'grey'
  },
  rowContent: {
    fontSize: 19
  }
});

export default class Profile extends Component {
  getRowTitle(item) {
    item = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }

  render() {
    let userInfo = this.props.userInfo;
    let topicArr = ['company', 'email', 'public_repos'];
    let list = topicArr.map((item, index) => {
      if (!userInfo[item]) {
        return <View key={index}/>
      } else {
        return (
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}> {this.getRowTitle(item)} </Text>
              <Text style={styles.rowContent}> {userInfo[item]} </Text>

            </View>
          </View>
        )
      }
    });
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo}/>
        {list}
      </ScrollView>
    )
  }
}
