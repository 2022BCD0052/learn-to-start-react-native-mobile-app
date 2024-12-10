import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import React from 'react';

const ModalDialogBox = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ModalDialogBox</Text>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={styles.openButton}
      >
        <Text style={styles.buttonText}>Show First Modal</Text>
      </TouchableOpacity>
      
      {/* Modal */}
      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setVisible(false)} // Handle back button press on Android
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>This is the first modal</Text>
            <Text style={styles.modalSubText}>Hi there!</Text>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalDialogBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 40,
  },
  closeButton: {
    backgroundColor: '#FF6347',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim background
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalSubText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
});
