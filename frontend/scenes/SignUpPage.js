import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpPage = () => {
  const navigation = useNavigation();

  const handleNavigateToHikesPage = () => {
    navigation.navigate('Hikes');
  };

  return (
    <View style={styles.container}>
      <Text>SignUpPage</Text>
      <TouchableOpacity onPress={handleNavigateToHikesPage}>
        <Text>Go to Hikes Page</Text>
      </TouchableOpacity>
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


export default SignUpPage;
