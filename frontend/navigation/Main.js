import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../scenes/HomeScreen';
import UserNavigator from './UserNavigator'
import SignUpNavigator from './SignUpNavigator'

const Stack = createStackNavigator();

const Main = () => (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SignIn" component={UserNavigator} />
        <Stack.Screen name="SignUp" component={SignUpNavigator} />
    </Stack.Navigator>
);

export default Main;