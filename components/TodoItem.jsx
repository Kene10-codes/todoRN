import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function TodoItem({item, handleDelete}) {
  return (
    <View style={styles.todo}>
      <Text>{item.text}</Text>
      <TouchableOpacity onPress={() => handleDelete (item.id)}>
        <MaterialIcons name="delete" size={18} color="red" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create ({
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    backgroundColor: '#ddd',
    fontSize: 16,
    marginVertical: 7,
  },
});
