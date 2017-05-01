import React, { Component, PropTypes } from 'react';
import {
  NativeModules,
  StyleSheet,
  Text,
  View,
  Image,
  LayoutAnimation
} from 'react-native';

import Quote from '../components/Quote';
import NextQuoteButton from '../components/NextQuoteButton';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const bgImg = require('../assets/bg.png');

export default class QuoteScreen extends Component {
  componentWillUpdate(){
    LayoutAnimation.configureNext(tranquil);
  }
  render() {
    return (
      <Image source={bgImg} style={styles.image}>
       <View style={styles.container}>
        <Quote key={this.props.qId} quoteText={this.props.text} quoteSource={this.props.source}/>
        <NextQuoteButton onPress={this.props.onNextQuotePress}/>
       </View>
      </Image>
    );
  }
}

QuoteScreen.PropTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  onNextQuotePress: PropTypes.func.isRequired,
  qId: PropTypes.number.isRequired
}

const tranquil = {
  duration: 500,
  create: {
    duration: 1000,
    delay: 300,
    type: LayoutAnimation.Types.easeIn,
    property: LayoutAnimation.Properties.opacity
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity
  },
  delete: {
    duration: 200,
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined
  }
});