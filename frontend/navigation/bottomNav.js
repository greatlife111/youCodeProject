import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HikesPage from '../scenes/HikesPage';
import Message from '../scenes/Message'
import Account from '../scenes/AccountPage'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function BottomNav() {
    
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
            tabBarLabel: 'Chat',
            tabBarLabelStyle: {
              fontSize: 16
            },
            tabBarIcon: ({ color }) => ( 
              <Ionicons name="chatbox-ellipses-outline" size={24} color={color} />
            ),
          }} />
          <Tab.Screen 
        name="Account" 
        component={Account}
        options={{
            tabBarLabel: 'Account',
            tabBarLabelStyle: {
              fontSize: 16
            },
            tabBarIcon: ({ color }) => ( 
              <MaterialCommunityIcons name="account-outline" size={24} color={color} />
            ),
          }} />
    </Tab.Navigator>
    
  );
}