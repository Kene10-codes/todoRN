import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function TodoItem({item, handleDelete}) {
  return (
    <TouchableOpacity onPress={() => handleDelete (item.id)}>
      <Text style={styles.todo}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create ({
  todo: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#ddd',
    fontSize: 16,
    marginVertical: 7,
  },
});
