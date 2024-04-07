import React from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';

function BigButton({ text, onPress, style, color }) {
  return (
    <TouchableHighlight activeOpacity={1} onPress={onPress}>
      <View style={[styles.photoButton, { backgroundColor: color }, style]}>
        <Text style={styles.defaultText}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  photoButton: {
    //backgroundColor: '#0DA062', // Old colors
    backgroundColor: '#4E7E80',
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.86

  },
  defaultText: {
    fontSize: 20,
    color: "white",
  }

});

export default BigButton;