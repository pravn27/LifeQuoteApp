import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

const ZenImg = require('../assets/zen.png');

export default class StartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.props.onStartHandler}>
          <Image style={styles.buttonImage} source={ZenImg}/>
          <Text style={styles.readyText}>I'm ready to relax..</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#859a9b',
  },
  readyText: {
    fontSize: 22,
    fontStyle: 'italic',
    color: '#ffffff',
    paddingTop: 20,
    paddingLeft: 10
  },
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20
  },
  buttonImage: {
    width: 200,
    height: 200
  }
});