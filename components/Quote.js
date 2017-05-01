import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Quote extends Component {
    render(){
        return(
            <View style={styles.quoteContainer}>
                <Text style={styles.quoteText}>"{this.props.quoteText}"</Text>
                <Text style={styles.quoteSource}>- {this.props.quoteSource}</Text>
            </View>
        )
    }
}

Quote.propTypes = {
  quoteText: PropTypes.string.isRequired,
  quoteSource: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  quoteContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  quoteText: {
    fontFamily: 'Roboto',
    fontSize: 36,
    color: 'black',
    marginVertical: 30
  },
  quoteSource: {
    fontFamily: 'Roboto',
    fontSize: 20,
    textAlign: 'right',
    color: 'dimgrey',
    fontStyle: 'italic'
  }
});
