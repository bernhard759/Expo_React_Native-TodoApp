import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  'todo-item': {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  'todo-item-text': {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#ccc',
  },
  'delete-button': {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
});

export default styles;
