import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Signup extends React.Component {
  render() {
    // const {navigate } = this.props.navigation;
      return (
          <View style = {styles.container}>
              <Logo/>
              <Form type = "Signup"/>
              <View style = {styles.signupTextCont}>
                <Text style= {styles.signupText}>Already have an account? </Text>
                <Text style = {styles.signupButton}>Sign  in</Text>
              </View>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#455a64',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    signupTextCont:{
      flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical: 10,
      flexDirection: 'row',
    },
    signupText:{
      color: 'rgba(255,255,255,0.7)',
      fontSize: 16,
    },
    signupButton:{
      color: '#ffffff',
      fontSize: 16,
      fontWeight: '500'
    }
});
