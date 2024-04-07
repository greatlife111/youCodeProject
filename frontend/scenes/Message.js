import React from 'react';
import { View, StyleSheet } from 'react-native';
import Chat from '../components/chat';

const Message = () => {
  return (
    <View style={styles.container}>
      <Chat /> 
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

export default Message;