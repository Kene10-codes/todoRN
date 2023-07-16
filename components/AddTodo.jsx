import {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default function Header({submitHandler}) {
  const [text, setText] = useState ('');

  const addTodoHandler = text => {
    setText (text);
  };
  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Add todo.."
        onChangeText={addTodoHandler}
        style={styles.input}
      />

      <Button
        title="Add todo"
        color="blue"
        onPress={() => submitHandler (text)}
      />
    </View>
  );
}

const styles = StyleSheet.create ({
  form: {},
  input: {},
});
