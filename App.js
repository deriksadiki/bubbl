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
import LoadingModal from './Screens/LoadingModal'
import Auth from '@react-native-firebase/auth'

export default class App extends React.Component{

  constructor(){
    super()
    this.state = {
      loginState : false      
    }
  }

  
  UNSAFE_componentWillMount(){
        this.suscribeAuth();
  }

 

  suscribeAuth(){
    try{
      Auth().onAuthStateChanged(user => {
    if(user){
      this.setState({
        loginState: true
      }, ()=>{
        this.myModal.dismissModal();
        // setTimeout(()=>{SplashScreen.hide();}, 5000)
      })
    }else{
      //setTimeout(()=>{SplashScreen.hide();}, 100)
    }
  });
  }catch(error){
     console.log(error)
    }
  }

  render(){
    return(
      <NavigationContainer>
         <LoadingModal ref={(ref)=>{this.myModal =  ref}} />
        {(this.state.loginState ? <MainStack /> : <AuthStack />)}
      </NavigationContainer>
    )
  }

}
