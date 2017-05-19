import React, {PureComponent} from "react";
import {Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {api} from "../Utils/api";
import Profile from "./Profile";
import Repositories from "./Repositories";


let styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  label: {
    backgroundColor: '#00ffcb',
    fontSize: 30,
    color: 'white',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'white'
  }
});

export default class User extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'User',
      repos: []
    }
  }

  getBackground(btn) {
    let obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    };

    switch (btn) {
      case 1: {
        obj.backgroundColor = '#478cfe';
        break;
      }
      case 2: {
        obj.backgroundColor = '#fe266c';
        break;
      }
    }
    return obj;
  }

  goToUser() {
    this.props.navigator.push({
      component: Profile,
      title: 'Profile Page',
      passProps: {userInfo: this.props.userInfo}
    })
  }

  goToRepos() {
    api.getRepos(this.props.userInfo.login)
      .then((res) => {
        this.props.navigator.push({
          component: Repositories,
          title: 'User repositories',
          passProps: {
            userInfo: this.props.userInfo,
            repos: res
          }
        })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
        <Text style={styles.label}> User: {this.state.userName} </Text>
        <TouchableHighlight style={this.getBackground(1) } onPress={this.goToUser.bind(this)} underlayColor='blue'>
          <Text style={styles.text}> See profile</Text>
        </TouchableHighlight>
        <TouchableHighlight style={this.getBackground(2) } onPress={this.goToRepos.bind(this)} underlayColor='blue'>
          <Text style={styles.text}> Repositories</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
