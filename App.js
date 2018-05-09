/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

import Routes from './src/Routes'

export default class App extends React.Component{
  render(){
    return <Routes/>;
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
