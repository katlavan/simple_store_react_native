import React, {Component} from "react";
import {api} from "../Utils/api";
import User from "./User";
import {ActivityIndicator, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#481cfe'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }

  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text
    });
  }

  handleSubmit() {
    this.setState({
      isLoading: true
    });

    api.getUser(this.state.username)
      .then((res) => {
        if (res.message === 'Not Found') {
          this.setState({
            error: 'User not Found',
            isLoading: false
          })
        } else {
          this.props.navigator.push({
            title: res.name || 'Select an Option',
            component: User,
            passProps: {userInfo: res}
          })

          this.setState({
            isLoading: false,
            error: false,
            username: ''
          })
        }
      });
    console.log('SUBMIT', this.state.username);
  }

  render() {
    let showErr = (
      this.state.error ? <Text> {this.state.error} </Text> : <View/>
    );
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Simple Github Client</Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange.bind(this)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white">
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
        <ActivityIndicator
          animating={this.state.isLoading}
          color="#111"
          size="large"/>
        {showErr}
      </View>
    )
  }
}