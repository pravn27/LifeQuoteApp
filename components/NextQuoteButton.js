import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
const back = require('../assets/back.png');
const next = require('../assets/next.png');

export default class NextQuoteButton extends Component {
  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.props.backPress}>
          <Image style={styles.backImage} source={back}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.props.nextPress}>
          <Image style={styles.backImage} source={next}/>
        </TouchableOpacity>
      </View>
    )
  }
}

NextQuoteButton.PropTypes = {
  nextPress: PropTypes.func.isRequired,
  backPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  backImage: {
    width: 40,
    height: 40
  },
  button: {
    borderWidth: 2,
    borderColor: 'dimgrey',
    padding: 10,
    marginBottom: 10
  },
  buttonText: {
    textAlign: 'center',
    color: 'dimgrey',
    fontSize: 18
  }
});
