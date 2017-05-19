import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from 'react-native';

const styles =  StyleSheet.create({
  container: {
    backgroundColor: '#478cfe',
    paddingBottom: 10
  },
  name: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
    marginBottom: 5,
    marginTop: 10
  },
  handle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'white'
  },
  image: {
    alignSelf: 'center',
    borderRadius: 65,
    height: 125,
    width: 125,
    marginTop: 10
  }
});

export default class Badge extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
        <Text style={styles.name}>{this.props.userInfo.name}</Text>
        <Text style={styles.handle}>{this.props.userInfo.login}</Text>
      </View>
    )
  }
}


Badge.propTypes = {
  userInfo: React.PropTypes.object.isRequired
}