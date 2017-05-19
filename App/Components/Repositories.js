import React, {Component} from "react";
import {StyleSheet, Text, View, TouchableHighlight, ScrollView} from "react-native";
import Badge from "./Badge";
import WEBView from "./Helpers/WebView";


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#478cfe',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#478cfe',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

export default class Repositories extends Component {
  openPage(url){
    this.props.navigator.push({
      component: WEBView,
      title: 'Web View',
      passProps: {url}
    })
  }

  render() {
    let repos = this.props.repos;
    let list = repos.map((item, index) => {
      let desc = repos[index].description ? <Text style={styles.description}> {repos[index].description}</Text> :
        <View/>;
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={this.openPage.bind(this, repos[index].html_url)}
              underlayColor='transparent'>
              <Text style={styles.name}> {repos[index].name} </Text>
            </TouchableHighlight>
            <Text style={styles.stars}> Starts: {repos[index].stargazers_count}</Text>
            {desc}
          </View>
        </View>
      )
    });

    return(
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo}/>
        {list}
      </ScrollView>
    )
  }
}

Repositories.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
  repos: React.PropTypes.array.isRequired
};