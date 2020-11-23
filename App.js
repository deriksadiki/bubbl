/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import AuthStack from './Components/AuthStack';
import MainStack from './Components/MainStack'

export default class App extends React.Component{

  constructor(){
    super()
    this.state = {
      loginState : true      
    }
  }

  render(){
    return(
      <NavigationContainer>
        {(this.state.loginState ? <MainStack /> : <AuthStack />)}
      </NavigationContainer>
    )
  }

}
