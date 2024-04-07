import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Account = () => {
  // State for difficulty, group size, date, and whether to show the date picker
  const [difficulty, setDifficulty] = useState('no preference');
  const [groupSize, setGroupSize] = useState(2);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [editingDifficulty, setEditingDifficulty] = useState(false);
  const [editingGroupSize, setEditingGroupSize] = useState(false);
  const [newDifficulty, setNewDifficulty] = useState('');
  const [newGroupSize, setNewGroupSize] = useState('');

  // Function to handle editing difficulty
  const handleDifficultyEdit = () => {
    setEditingDifficulty(true);
  };

  // Function to handle saving the new difficulty
  const handleSaveDifficulty = () => {
    setDifficulty(newDifficulty);
    setEditingDifficulty(false);
  };

  // Function to handle opening date picker
  const handleOpenDatePicker = () => {
    setShowDatePicker(true);
  };

  // Function to handle closing date picker
  const handleCloseDatePicker = () => {
    setShowDatePicker(false);
  };

  // Function to handle editing group size
  const handleGroupSizeEdit = () => {
    setEditingGroupSize(true);
  };

  // Function to handle saving the new group size
  const handleSaveGroupSize = () => {
    setGroupSize(parseInt(newGroupSize)); // Convert to integer
    setEditingGroupSize(false);
  };

  // Function to handle selecting date
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
    // Logic for saving the selected date
    handleCloseDatePicker(); // Hide the date picker when date is selected
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Gender:</Text>
        {editingDifficulty ? (
          <TextInput
            style={styles.textInput}
            value={newDifficulty}
            onChangeText={setNewDifficulty}
            placeholder="Enter difficulty"
            autoFocus={true}
          />
        ) : (
          <Text style={styles.text}>{difficulty}</Text>
        )}
        {editingDifficulty ? (
          <TouchableOpacity onPress={handleSaveDifficulty} style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleDifficultyEdit} style={styles.button}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.text}>{date.toDateString()}</Text>
        <TouchableOpacity onPress={handleOpenDatePicker} style={styles.button}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Group Size:</Text>
        {editingGroupSize ? (
          <TextInput
            style={styles.textInput}
            value={newGroupSize}
            onChangeText={setNewGroupSize}
            placeholder="Enter group size"
            keyboardType="numeric"
            autoFocus={true}
          />
        ) : (
          <Text style={styles.text}>{groupSize}</Text>
        )}
        {editingGroupSize ? (
          <TouchableOpacity onPress={handleSaveGroupSize} style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleGroupSizeEdit} style={styles.button}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    flex: 1,
  },
  textInput: {
    fontSize: 18,
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Account;
