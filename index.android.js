import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import StartScreen from './components/StartScreen';
import QuoteScreen from './components/QuoteScreen';

const quotes = require('./assets/Quotedata.json');
export default class LifeQuoteApp extends Component {
  constructor(props){
    super(props)

    this.state = {
      quoteIndex: 0
    }
    this.indexIncrement = this.indexIncrement.bind(this);
    this.indexDecrement = this.indexDecrement.bind(this);
  }

  indexIncrement(){
    let newIndex;
    if(this.state.quoteIndex + 1 == quotes.length){
      newIndex = 0;
    } else {
      newIndex = this.state.quoteIndex + 1;
    }
    this.setState({ quoteIndex: newIndex })
  }

  indexDecrement(){
    let newIndex;
    if(this.state.quoteIndex == 0){
      newIndex = quotes.length - 1;
    } else {
      newIndex = this.state.quoteIndex - 1;
    }
    this.setState({ quoteIndex: newIndex })
  }

  render() {
    const quote = quotes[this.state.quoteIndex];
    return (
      <Navigator
       initialRoute={{ name: 'StartScreen' }}
       renderScene={ (route,navigator) => {
        switch(route.name){
          case 'StartScreen':
           return <StartScreen onStartHandler={ () => navigator.push({ name:'QuoteScreen' }) }/>
          case 'QuoteScreen':
           return <QuoteScreen qId={this.state.quoteIndex} text={quote.quoteText} 
           source={quote.quoteSource} onNextQuotePress={this.indexIncrement} onBackQuotePress={this.indexDecrement}/>
        }
       }}
      />
    );
  }
}

AppRegistry.registerComponent('LifeQuoteApp', () => LifeQuoteApp);