import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignInPage from '../scenes/SignInPage';
import BottomNav from './bottomNav';

const Stack = createStackNavigator();

const UserNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="UserSignIn" component={SignInPage}/>
        <Stack.Screen name="LogIn" component={BottomNav} />
    </Stack.Navigator>
);

export default UserNavigator;