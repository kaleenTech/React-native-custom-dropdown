import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import CustomDropdown from './src/CustomDropdown';

const App = () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
      {
        <CustomDropdown
          modalOpen={modalOpen}
          selectedOption={selectedOption}
          options={options}
          onPress={() => setModalOpen(!modalOpen)}
          onSelect={option => setSelectedOption(option)}
        />
      }
      <View style={styles.cotainer}>
        <Button
          title="SELECT ME"
          color="teal"
          style={styles.button}
          onPress={() => setModalOpen(!modalOpen)}
        />
        <Text style={styles.selctedOption}>
          {selectedOption ? 'Selected: ' + selectedOption : 'Select an option'}
        </Text>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    elevation: 10,
    marginVertical: 20,
    alignSelf: 'center',
  },
  selctedOption: {
    margin: 10,
    fontSize: 18,
    color: 'gray',
  },
});
