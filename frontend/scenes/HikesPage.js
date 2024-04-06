import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HikesPage = () => {
  return (
    <View style={styles.container}>
      <Text>Hikes Page</Text>
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
