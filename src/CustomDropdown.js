import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const CustomDropdown = props => {
  const {options, modalOpen, onPress, onSelect, selectedOption} = props;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalOpen}
      onRequestClose={() => onPress()}
      onDismiss={() => onPress()}>
      <TouchableWithoutFeedback onPress={() => onPress()}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {options.map((option, index) => (
              <View
                key={index}
                style={[
                  styles.modalOption,

                  option === selectedOption && styles.selectedOption,
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    onSelect(option);
                    onPress();
                  }}>
                  <Text>{option}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    padding: 20,
    width: '85%',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  modalOption: {
    padding: 8,
    margin: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: 'lightblue',
  },
});
