import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HikesPage from './scenes/HikesPage';
import SignInPage from './scenes/SignInPage';
import TabNavigation from './components/bottomNav';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <TabNavigation />
    {/* <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignInPage} /> 
      <Stack.Screen name="Hikes" component={HikesPage} />
    </Stack.Navigator> */}
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
