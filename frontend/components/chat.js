import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const Chat = () => {
  // Sample data of chats
  const chatData = [
    { id: '1', name: 'John Doe', message: 'Hey, how are you?' },
    { id: '2', name: 'Jane Smith', message: 'Can you send me the report?' },
    { id: '3', name: 'Alice Johnson', message: 'What time is the meeting?' },
    // Add more chat objects as needed
  ];

  // Function to render each chat item in the list
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  chatItem: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  message: {
    fontSize: 14,
  },
});

export default Chat;