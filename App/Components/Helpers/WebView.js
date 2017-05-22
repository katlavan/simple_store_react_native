import React, {Component} from "react";
import {StyleSheet, View, WebView, ActivityIndicator} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    flex: 1,
    flexDirection: 'column'
  }
});


export default class WEBView extends Component {
  render(){
    return(
      <View style={styles.container}>
        <WebView source={{uri: this.props.url}}/>
      </View>
    )
  }
}

WEBView.propTypes = {
  url: React.PropTypes.string.isRequired
};