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
import {Task, DisplayToDo, ToDoRow, DisplayDoneTasks, DoneTaskRow} from './task.tsx';
import {NavigationContainer, NavigationIndependentTree, useNavigation } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from "./styles.tsx";

const Stack = createNativeStackNavigator();

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
        <Text style={styles.subheader}>To-Do:</Text>
        <DisplayToDo />
        <Text style={styles.subheader}>Completed Tasks:</Text>
        <DisplayDoneTasks />
    </View>
  );
}

function TaskScreen() {
  const navigation = useNavigation();
  const [nameText, nameOnChangeText] = React.useState('');
  const [descText, descOnChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.fixToText}>
        <Text style={styles.header}>Add Task</Text>
      </View>
      <View>
        <Text>Task Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={nameOnChangeText}
          value={nameText}
          placeholder="Task Name"
        />
      </View>
      <View>
        <Text>Description</Text>
        <TextInput
          multiline
          numberOfLines={4}
          maxLength={40}
          style={styles.input}
          onChangeText={descOnChangeText}
          value={descText}
          placeholder="Description"
        />
      </View>
      <View>
        <Button
          title="Submit"
          onPress={() =>
            {
              if(nameText) {
                tasks.push(new Task(nameText, descText));
//                 nameText = "";
//                 descText = "";
              }
            }
          }
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

const task1 = new Task("task1", "this is a task");
const task2 = new Task("task2", "this is a task");
const task3 = new Task("task3", "this is a task");
const task4 = new Task("task4", "this is a task");
task4.complete = true;

tasks.push(task1,task2,task3, task4);




function RootStack() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
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