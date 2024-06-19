import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  const [tasks, setTasks] = useState([]);

  let taskInput = '';

  const addTask = () => {
    if (taskInput.trim().length > 0) {
      setTasks([...tasks, { key: Math.random().toString(), value: taskInput }]);
      taskInput = '';
    }
  };

   const deleteTask = (taskKey) => {
    setTasks(tasks.filter(task => task.key !== taskKey));
  };

  const flatListItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.value}</Text>
      <TouchableOpacity onPress={() => deleteTask(item.key)}>
        <Icon name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={flatListItem}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          onChangeText={(text) => taskInput = text}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Icon name="add-circle-outline" size={40} color="green" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  listContainer: {
    padding: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginVertical:10
    
    
  },
  taskText: {
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding : 10
  },
  input: {
    flex: 1,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 10,
    textAlign :'center',
    backgroundColor : '#d3d3d3',
    

  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
