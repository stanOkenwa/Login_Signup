import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {StackNavigator, NavigationActions} from 'react-navigation';
// import NavigationService from '../components/NavigationService';

import Logo from '../components/Logo';
import Form from '../components/Form';
import Signup from './Signup';


class Login extends React.Component {

  signup(){
    const navigateAction = NavigationActions.navigate({
      routeName: 'signup',
      action: NavigationActions.navigate({routeName: 'signup'})
    });
    this.props.navigation.dispatch(navigationAction);
  }
  render() {
      return(
          <View style = {styles.container}>
              <Logo/>
              <Form type = "Login"/>
              <View style = {styles.signupTextCont}>
                <Text style= {styles.signupText}>Don't have an account yet?</Text>
              
                <TouchableOpacity 
                  onPress ={this.signup}
                >
                  <Text style = {styles.signupButton}>Signup</Text>
                </TouchableOpacity>   
              </View>
          </View>
      );
  }
}

// const navigateActions = NavigationActions.navigate({
//   routeName: 'signup',
//   params:{},
//   action: NavigationActions.navigate({routeName: 'signup'})
// });
// this.props.navigation.dispatch(NavigationActions);

export default () => <Login/>
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
