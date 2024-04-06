import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';

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

// const Hikes = () => {
//   const [selectedFilter, setSelectedFilter] = useState(null);

  // // Sample data of hikes
  // const hikesData = [
  //   { id: '1', name: 'Lynn Canyon', activity: 'Hiking', image: require('../assets/hike1.jpg') },
  //   { id: '2', name: 'Joffre Lakes', activity: 'Hiking', image: require('../assets/hike2.jpg') },
  //   { id: '3', name: 'Stanley Park', activity: 'Cycling', image: require('../assets/hike3.jpg') },
  //   // Add more hike objects as needed
  // ];

  // Function to render each item in the list
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.rectangle}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </View>
  );

  // Function to render filter buttons
  const renderFilterButton = (activity) => (
    <TouchableOpacity
      style={[styles.filterButton, { backgroundColor: selectedFilter === activity ? '#00f' : '#ddd' }]}
      onPress={() => setSelectedFilter(activity)}
    >
      <Text style={styles.filterButtonText}>{activity}</Text>
    </TouchableOpacity>
  );

  // List of all activities
  const activities = [
    "Hiking",
    "Camping",
    "Cycling",
    "Running",
    "Rock climbing",
    "Kayaking",
    "Fishing",
    "Nature photography",
    "Horseback riding",
    "Swimming",
    "Skiing",
    "Snowboarding",
    "Rafting",
    "Surfing"
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterContainer}>
        {activities.map(activity => (
          <View key={activity}>
            {renderFilterButton(activity)}
          </View>
        ))}
      </ScrollView>
      <FlatList
        data={selectedFilter ? hikesData.filter(hike => hike.activity === selectedFilter) : hikesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#013220', // Dark green
    marginTop: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#ddd',
  },
  filterButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    alignItems: 'center', // Center items horizontally
    marginBottom: 10,
  },
  rectangle: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 50, // Updated to 50 from left and right
    flexDirection: 'column', // Changed to column
    alignItems: 'center',
    justifyContent: 'center', // Center items horizontally
    width: '80%',
  },
  image: {
    width: '100%', // Adjusted to fit width of rectangle
    height: 150, // Fixed height for all images
    borderRadius: 5,
    marginBottom: 5, // Added margin bottom to create space between image and text
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Hikes;
