import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header () {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  header: {
    height: 70,
    paddingTop: 38,
    backgroundColor: 'blue',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
});
