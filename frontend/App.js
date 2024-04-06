import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from './scenes/SignUpPage';
import HikesPage from './scenes/HikesPage';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SignIn">
      {/* should be the sign in page just doing this because I want to set up navigation */}
      <Stack.Screen name="SignIn" component={SignUpPage} /> 
      <Stack.Screen name="Hikes" component={HikesPage} />
    </Stack.Navigator>
  </NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
