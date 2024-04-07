import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HikesPage from '../scenes/HikesPage';
import Message from '../scenes/Message'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function TabNavigation() {
    
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Locations" 
        component={HikesPage}
        options={{
            tabBarLabel: 'Locations',
            tabBarLabelStyle: {
              fontSize: 16
            },
            tabBarIcon: ({ color }) => ( 
              <Ionicons name="location-outline" size={24} color={color} />
            ),
          }} />
        <Tab.Screen 
        name="Chat" 
        component={Message}
        options={{
            tabBarLabel: 'Favourites',
            tabBarLabelStyle: {
              fontSize: 16
            },
            tabBarIcon: ({ color }) => ( 
              <FontAwesome name="heartbeat" size={24} color={color} />
            ),
          }} />
    </Tab.Navigator>
    
  );
}