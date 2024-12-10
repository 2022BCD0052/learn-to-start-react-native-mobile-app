import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    color: 'crimson',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  list: {
    margin: 10,
    padding: 10,
    borderColor: 'gray',
    backgroundColor: 'lightblue',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  item: {
    padding: 10,
    margin: 5,
    borderColor: 'gray',
    backgroundColor: 'lightgreen',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    color: 'darkslategray',
    marginBottom: 10,
    fontWeight: '500',
    paddingHorizontal: 10,
  },
  email: {
    fontSize: 16,
    color: 'darkslategray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  password: {
    fontSize: 16,
    color: 'darkslategray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  role: {
    fontSize: 16,
    color: 'darkslategray',
    marginBottom: 10,
    fontStyle: 'italic',
    paddingHorizontal: 10,
  },
});
