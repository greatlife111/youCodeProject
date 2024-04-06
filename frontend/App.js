import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hikes from './components/hikes'; // Adjust the path accordingly

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Hikes /> {/* Render the Hikes component */}
    </View>
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
