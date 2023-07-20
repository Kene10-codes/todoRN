import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function TodoItem({item, handleDelete}) {
  return (
    <View style={styles.todo}>
      <Text style={styles.item}>{item.text}</Text>
      <TouchableOpacity onPress={() => handleDelete (item.id)}>
        <MaterialIcons name="delete" size={18} color="red" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create ({
  item: {fontSize: 17, fontWeight: '600'},
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#f1f1f1',
    marginVertical: 7,
  },
});
