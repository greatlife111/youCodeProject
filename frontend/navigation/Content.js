import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../scenes/AccountPage';
import BottomNav from './bottomNav';

const Stack = createStackNavigator();

const Content = () => (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Hikes Page" component={BottomNav} />
        <Stack.Screen name="Account" component={Account}/>
    </Stack.Navigator>
);

export default Content;