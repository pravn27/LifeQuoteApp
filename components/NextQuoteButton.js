import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

export default class NextQuoteButton extends Component {
  render() {
    return(
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
            <Text style={styles.buttonText}>Next thought</Text>
        </TouchableOpacity>
    )
  }
}

NextQuoteButton.PropTypes = {
  onPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: 'dimgrey',
    padding: 10,
    marginBottom: 20
  },
  buttonText: {
    textAlign: 'center',
    color: 'dimgrey',
    fontSize: 18
  }
});
