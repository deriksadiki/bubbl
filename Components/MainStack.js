import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Card from '../Screens/Card';
import Documents from '../Screens/Documents';
import Pictures from '../Screens/Pictures';
import Home from '../Screens/Home';
import Vehicle from '../Screens/Vehicle';

const Stack = createStackNavigator();

const MainStack = () =>{
    return (
      <Stack.Navigator mode="card" headerMode="modal" initialRouteName="Documents"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS }}>
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="Documents" component={Documents} />
        <Stack.Screen name="Pictures" component={Pictures} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Vehicle" component={Vehicle} />
      </Stack.Navigator>
    );
  }
 export default MainStack