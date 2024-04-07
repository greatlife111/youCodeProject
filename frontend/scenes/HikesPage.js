import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';

const Hikes = ({ navigation }) => {
  const[selectedFilter, setSelectedFilter] = useState(null);
  const [hikes, setHikes] = useState([]); // Initialize state to hold fetched hikes
  const [showDetails, setShowDetails] = useState(false); 

  const fetchData = async () => {
    try {
      // const response = await fetch('http://128.189.157.26:5500/api/trails', { timeout: 10000 });
      const data = await response.json();
      const names = data.data.map(item => item.name); // Fixed accessing data
      console.log(names);
      setHikes(data.data); 
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };
  
  useEffect(() => {
    if (selectedFilter == 'Hiking') {
      // fetchData();
    }
  }, [selectedFilter]); // TODO I want the array 

  // Sample data of hikes
  const hikesData = [
    { id: '1', name: 'Lynn Canyon', activity: 'Hiking', image: require('../assets/hike1.jpg') },
    { id: '2', name: 'Joffre Lakes', activity: 'Hiking', image: require('../assets/hike2.jpg') },
    { id: '3', name: 'Stanley Park', activity: 'Cycling', image: require('../assets/hike3.jpg') },
    // Add more hike objects as needed
  ];

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

  // Function to render each item in the list
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setShowDetails(true)} style={styles.itemContainer}>
      <View style={styles.rectangle}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );


  const renderDetailsView = () => {
    if (!showDetails) return null;
    navigation.navigate("Account");
    setShowDetails(false);
    return
  };

  // Function to render filter buttons
  const renderFilterButton = (activity) => (
    <TouchableOpacity
      style={[styles.filterButton, { backgroundColor: selectedFilter === activity ? 'orange' : '#fff' }]}
      onPress={() => setSelectedFilter(activity)}
    >
      <Text style={styles.filterButtonText}>{activity}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterContainer}>
        {activities.map(activity => (
          <View key={activity}>
            {renderFilterButton(activity)}
          </View>
        ))}
      </ScrollView>
      {renderDetailsView()} 
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
    backgroundColor: '#013220' // Dark green
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
    height: 40
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
  listLocations: {
    flex: 1
  }
});

export default Hikes;