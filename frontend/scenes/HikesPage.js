import React from 'react';
import { View, StyleSheet } from 'react-native';
import Hikes from '../components/hikes';

const HikesPage = () => {
  return (
    <View style={styles.container}>
      <Hikes /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default HikesPage;
