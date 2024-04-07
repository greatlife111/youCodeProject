// Import necessary dependencies
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './bottomNav'; 
import HikesPage from '../scenes/HikesPage';
import MoreDetails from '../scenes/MoreDetailsPage';
import Content from './Content';

const Stack = createStackNavigator();

const DetailsNav = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Contents" component={Content} options={{ headerShown: false }} />
        <Stack.Screen name="Hikes Page" component={BottomNav} />
        <Stack.Screen name="More Details" component={BottomNav} />
      </Stack.Navigator>
  );
}

export default DetailsNav;
