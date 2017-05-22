import React, {Component} from "react";
import {StyleSheet, Text, View, Animated, TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 65
  },
  animatableCard: {
    alignSelf: 'center',
    backgroundColor: 'grey',
    backfaceVisibility: 'hidden',
    justifyContent: 'center',
    margin: 10,
    height: 100,
    width: 100,

  },
  backCard: {
    backgroundColor: 'blue',
    position: 'absolute',
    top: 0
  },
  animText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  }
});


export default class AnimationDemo extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({value}) => {
      this.value = value;
    });

    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })

    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    })
  }
  flipCard(){
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();

    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }
  render() {
    const frontAnimatedStyle = {
      transform: [
        { rotateX: this.frontInterpolate }
      ]
    };
    const backAnimatedStyle = {
      transform: [
        {rotateX: this.backInterpolate }
      ]
    };
    return (
      <View style={styles.container}>
        <View>
          <Animated.View style={[styles.animatableCard, frontAnimatedStyle]}>
            <Text  style={styles.animText}>Fuck yeah on the front side</Text>
          </Animated.View>
          <Animated.View style={[backAnimatedStyle, styles.animatableCard, styles.backCard]}>
            <Text style={styles.animText}>Shit comes down</Text>
          </Animated.View>
        </View>
        <TouchableOpacity onPress={() => this.flipCard()}>
          <Text>Smash this shit!!!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}