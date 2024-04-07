import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Account = () => {
  return (
    <View style={styles.container}>
      <Text>Logout</Text>
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

export default Account;
