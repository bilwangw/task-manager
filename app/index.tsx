import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlexAlignType,
  FlexStyle,
  TextInput,
} from 'react-native';
import React from "react";
import Task from './task.tsx';
import {NavigationContainer, NavigationIndependentTree, useNavigation } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


function DisplayTasks() {
  const rows = [];
  for (var i = 0; i < tasks.length; i++) {
    rows.push(TaskRow(tasks[i]));
  }
  return (
    <View>
      {rows}
    </View>
  )
}

function TaskRow(task) {
  return (
    <View style={styles.rows}>
      <Text>{task.name}</Text>
      <Text>{task.description}</Text>
      <Text>{task.complete ? "Done!" : "Incomplete"}</Text>
    </View>
  )
}

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.fixToText}>
        <Text style={styles.header}>Simple Task Manager</Text>
      </View>
      <View>
        <Button
          title="Add Task"
          onPress={() =>
            navigation.navigate('Tasks')
          }
        />
      </View>
       <DisplayTasks />
    </View>
  );
}

function TaskScreen() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.fixToText}>
        <Text style={styles.header}>Add Task</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Task Name"
          keyboardType="numeric"
        />
      </View>
      <View>
        <Button
          title="Go Home"
          onPress={() =>
            navigation.navigate('Home')
          }
        />
      </View>
    </View>
  );
}



const tasks = [];

const task1 = new Task("task1231", "this is a task")
const task2 = new Task("task41242", "this is a task")
const task3 = new Task("task2143", "this is a task")

tasks.push(task1,task2,task3);


const styles = StyleSheet.create({
  container: {
    marginTop: 1,
    justifyContent: 'center'
  },
  header: {
    color: 'Black',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    margin: 25,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 1,
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 1,
    left: 15,
    right: 15,
  }
});

function RootStack() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen
            name="Tasks"
            component={TaskScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};


export default function App() {
  return (
    <RootStack />
  );
}