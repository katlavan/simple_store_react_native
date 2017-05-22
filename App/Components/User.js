import React, {PureComponent} from "react";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import * as Animatable from "react-native-animatable";
import {api} from "../Utils/api";
import Profile from "./Profile";
import Repositories from "./Repositories";
import AnimationDemo from "./Animation";


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
  getBackground(btn) {
    let obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    };

    switch (btn) {
      case 0: {
        obj.backgroundColor = '#fec514';
        break;
      }
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

  goToAnimations() {
    this.props.navigator.push({
      component: AnimationDemo
    })
  }

  componentWillUnmount(){
    console.log('Pizdec');
  }

  render() {
    const AnimatableTouchableHighlight = Animatable.createAnimatableComponent(TouchableHighlight);

    return (
      <View style={styles.container}>
        <Animatable.Image animation="slideInDown" source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
        <AnimatableTouchableHighlight animation="slideInRight" style={this.getBackground(0)}  onPress={this.goToUser.bind(this)}>
          <Text style={styles.text}> User: {this.props.userInfo.name} </Text>
        </AnimatableTouchableHighlight>
        <AnimatableTouchableHighlight animation="slideInLeft" style={this.getBackground(1) } onPress={this.goToAnimations.bind(this)}
                            underlayColor='blue'>
          <Text style={styles.text}>Animation Demo</Text>
        </AnimatableTouchableHighlight>
        <AnimatableTouchableHighlight animation="slideInUp" style={this.getBackground(2) } onPress={this.goToRepos.bind(this)}
                            underlayColor='blue'>
          <Text style={styles.text}> Repositories</Text>
        </AnimatableTouchableHighlight>
      </View>
    )
  }
}
