import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import BigButton from '../components/BigButton';

function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Image style={{ height: "100%", width: "100%", position: "absolute", "left": 0, "top": 0 }} source={require('../assets/logo.jpg')} />
      <View style={styles.buttonArray}>
        <BigButton text="Sign In" color="green" onPress={() => navigation.navigate("SignIn")} />
        <BigButton text="Sign Up" color="#f57c00" onPress={() => navigation.navigate("SignUp")} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    height: "100%",
    width: "100%",
    position: "relative"
  },
  topBar: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    alignItems: 'center',   
    position: 'absolute',
  },
  title: {
    fontSize: 50,
    paddingTop: 5,
    color: 'white'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
  buttonArray: {
    flex: 1,
    justifyContent: 'flex-end',
    alignContent: 'center'
  },
  defaultText: {
    fontSize: 20,
    color: "white",
  }
});

export default HomeScreen;