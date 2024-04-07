import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from '../scenes/SignUpPage';
import BottomNav from './bottomNav';

const Stack = createStackNavigator();

const UserNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignUp" component={SignUpPage}/>
        <Stack.Screen name="LogIn" component={BottomNav} />
    </Stack.Navigator>
);

export default UserNavigator;