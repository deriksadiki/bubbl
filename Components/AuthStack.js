import React from 'react'
import Login from '../Screens/Login'
import Register from '../Screens/Register';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';


const Stack = createStackNavigator();

const AuthStack = () =>{
    return (
      <Stack.Navigator mode="card" headerMode="modal" initialRouteName="Login"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  }
 export default AuthStack
