import React from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';

const Hikes = () => {
  // Sample data of hikes
  const hikesData = [
    { id: '1', name: 'Hike 1', image: require('../assets/hike1.jpg') },
    { id: '2', name: 'Hike 2', image: require('../assets/hike2.jpg') },
    { id: '3', name: 'Hike 3', image: require('../assets/hike3.jpg') },
    // Add more hike objects as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={hikesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 150,
    marginBottom: 10,
    resizeMode: 'cover',
  },
});

export default Hikes;
