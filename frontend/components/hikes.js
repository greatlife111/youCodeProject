import { React, useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';

// const Hikes = () => {
//   // Sample data of hikes
//   const hikesData = [
//     { id: '1', name: 'Hike 1', image: require('../assets/hike1.jpg') },
//     { id: '2', name: 'Hike 2', image: require('../assets/hike2.jpg') },
//     { id: '3', name: 'Hike 3', image: require('../assets/hike3.jpg') },
//     // Add more hike objects as needed
//   ];

const Hikes = () => {
  const [hikes, setHikes] = useState([]); // Initialize state to hold fetched hikes

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5500/api/trails');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHikes(data.data); // Assuming the JSON structure has a 'data' key
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    };
    
    fetchData(); // Call fetchData within useEffect
  }, []); // Empty dependency array means this runs once on mount


  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={hikes}
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
