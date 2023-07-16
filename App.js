import {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Header from './components/Header.jsx';
import TodoItem from './components/TodoItem.jsx';
import AddTodo from './components/AddTodo.jsx';

export default function App () {
  const [todos, setTodos] = useState ([
    {
      text: 'Watch football',
      id: '1',
    },
    {
      text: 'Play video games',
      id: '2',
    },
    {
      text: 'Code using RN language',
      id: '3',
    },
  ]);

  // Handle delete function
  const handleDelete = id => {
    setTodos (prevTodos => prevTodos.filter (todo => todo.id != id));
  };

  // submit new todo function
  const submitHandler = text => {
    setTodos (prevTodos => [
      ...prevTodos,
      {text: text, id: Math.random ().toString ()},
    ]);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} handleDelete={handleDelete} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25,
  },
  content: {
    paddingHorizontal: 10,
  },
  list: {
    paddingVertical: 20,
  },
});
