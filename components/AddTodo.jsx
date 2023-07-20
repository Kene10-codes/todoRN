import {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

export default function Header({submitHandler, addTodoHandler, text}) {
  return (
    <View>
      <TextInput placeholder="Add todo.." onChangeText={addTodoHandler} />
      <Button
        title="Add todo"
        color="blue"
        onPress={() => submitHandler (text)}
      />
    </View>
  );
}
