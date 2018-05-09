import { StackNavigator } from 'react-navigation'
import React, { Component } from 'react';

import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';

class LoginScreen extends React.Component{
    render(){
        return(
            <Login/>
        );
    }
}

class SignupScreen extends React.Component{
    render(){
        return(
            <Signup/>
        );
    }
}

const RootStack = StackNavigator({
        login: { screen: LoginScreen, },
        signup:{ screen: SignupScreen, },
    },
    {  
        initialRouteName : 'login',
     }
);

export default class Routes extends React.Component{
    render(){
        return <RootStack/>;
    }
}
