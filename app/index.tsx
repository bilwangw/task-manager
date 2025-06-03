import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlexAlignType,
  FlexStyle,
  TextInput,
  Modal,
  useColorScheme,
} from 'react-native';
import React, {useState} from "react";
import Task from './task.tsx';
import {NavigationContainer, NavigationIndependentTree, useNavigation, CommonActions, DefaultTheme, } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from "./styles.tsx";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { PaperProvider, adaptNavigationTheme, DataTable, Button  } from 'react-native-paper';

const Stack = createNativeStackNavigator();
const tasks = [];


// Sample tasks for testing purposes
const task1 = new Task("task1", "this is a task");
const task2 = new Task("task2", "this is a task");
const task3 = new Task("task3", "this is a task");
const task4 = new Task("task4", "this is a task");
// const task5 = new Task("task4", "this is a task");
// const task6 = new Task("task4", "this is a task");
// const task7 = new Task("task4", "this is a task");
// const task8 = new Task("task4", "this is a task");
// const task9 = new Task("task4", "this is a task");
// const task10 = new Task("task4", "this is a task");
// const task11 = new Task("task4", "this is a task");
// const task12 = new Task("task4", "this is a task");
// const task13 = new Task("task4", "this is a task");
// const task14 = new Task("task4", "this is a task");
// const task15 = new Task("task4", "this is a task");
// const task16 = new Task("task4", "this is a task");
// const task17 = new Task("task4", "this is a task");
// const task18 = new Task("task4", "this is a task");
task4.complete = true;

tasks.push(task1,task2,task3, task4);
// tasks.push(task1,task2,task3, task4, task5, task6, task7, task8, task9, task10, task11, task12, task13, task14, task15, task16, task17, task18);



// Function for creating the list of tasks
function DisplayTasks() {
  const rows = [];
  for (var i = 0; i < tasks.length; i++) {
    rows.push(DisplayRow(tasks[i]));
  }
  return (
    <DataTable>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title style={{flex: 1}}></DataTable.Title>
        <DataTable.Title style={{flex: 3}}>Name</DataTable.Title>
        <DataTable.Title style={{flex: 6}}>Description</DataTable.Title>
        <DataTable.Title style={{flex: 1}}></DataTable.Title>
      </DataTable.Header>
      {rows}
    </DataTable>
  )
}

// Function to display each individual task, handle deletion, and handle toggling completion
function DisplayRow(task) {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [taskState, setTaskState] = useState(task.complete ? " \u2713":" ---")
  const descAlert = () =>
  Alert.alert('Description', task.description, [
    {text: 'OK', onPress: () => console.log('ok')},
  ]);

  return (
      <DataTable.Row key={task.id} styles={styles.rows}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}
          >
            <View style={styles.modalView}>
              <Text style={styles.modalHeader}>Delete {task.name}?</Text>
              <Text>Are you sure you want to delete this task? This action cannot be undone</Text>
              <View style={styles.modalButtons}>
                <Button
                  mode='outlined'
                  onPress={() => {
                      tasks.splice(tasks.indexOf(task), 1);
                      navigation.dispatch(
                        CommonActions.reset({
                          index: 1,
                          routes: [
                            { name: 'Home' },
                          ],
                        })
                      );
                    }
                  }
                >
                  Delete
                </Button>
                <Button
                  mode='outlined'
                  onPress={() => {
                      setModalVisible(!modalVisible);
                    }
                  }
                >
                  Cancel
                </Button>
              </View>
            </View>
          </Modal>
        <DataTable.Cell
          style={{flex: 1, textAlign: 'right',}}
          onPress={() => {
            task.complete=!task.complete;
            setTaskState(task.complete ? " \u2713":" ---");
          }}
        >
        {taskState}
        </DataTable.Cell>
        <DataTable.Cell style={{flex: 3}}>{task.name}</DataTable.Cell>
        <DataTable.Cell
          style={{flex: 6}}
          onPress={() => {
            descAlert()
          }}
        >{task.description}
        </DataTable.Cell>
        <DataTable.Cell
          style={{flex: 1}}
          onPress={() => {
            setModalVisible(true)
          }
        }
        >{"\u274C"}
        </DataTable.Cell>
      </DataTable.Row>
  )
}


// Default page, displaying tasks with a button to add more
function HomeScreen() {
  const navigation = useNavigation();
  const helpAlert = () =>
    Alert.alert('How to Use Task Manager', 'To mark a task as complete, click on the "---". To Un-mark a task as complete, click it again!\nTo delete a task, press the red X.\nClick on the description text to expand and read the full description', [
      {text: 'OK', onPress: () => console.log('ok')},
  ]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.fixToText}>
          <Text style={styles.header}>Simple Task Manager</Text>
          <Button
            style={styles.helpButton}
            icon="help"
            mode="compact"
            onPress={() => {
              helpAlert()
            }}
          >
          </Button>
        </View>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.subheader}>Tasks:</Text>
          <DisplayTasks />
        </ScrollView>
      </SafeAreaView>
      <View style={styles.addTask}>
        <Button
          icon="plus"
          mode="contained"
          accessibilityLabel="Add Task"
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  { name: 'Tasks' },
                ],
              })
            );}
          }
        >
          Add Task
        </Button>
      </View>
    </SafeAreaProvider>
  );
}

// Form to add a new task with basic error handling
function TaskScreen() {
  const navigation = useNavigation();
  const createAlert = () =>
      Alert.alert('Could Not Create Task', 'Please enter a task name', [
        {text: 'OK', onPress: () => console.log('ok')},
      ]);

  const [nameText, nameOnChangeText] = React.useState('');
  const [descText, descOnChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.fixToText}>
        <Text style={styles.header}>Add Task</Text>
      </View>
      <View>
        <Text style={styles.subheader}>Task Name</Text>
        <TextInput
          style={styles.input}
          maxLength={40}
          onChangeText={nameOnChangeText}
          value={nameText}
          placeholder="Task Name"
        />
      </View>
      <View>
        <Text style={styles.subheader}>Description</Text>
        <TextInput
          multiline
          numberOfLines={4}
          maxLength={100}
          style={styles.input}
          onChangeText={descOnChangeText}
          value={descText}
          placeholder="Description"
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          mode="contained"
          accessibilityLabel="Submit task"
          onPress={() => {
              if(nameText) {
                tasks.push(new Task(nameText, descText));
                nameOnChangeText('');
                descOnChangeText('');
              } else {
                createAlert();
              }
            }
          }
        >
          Submit
        </Button>
      </View>
      <View style={styles.buttonStyle}>
        <Button
          icon="home"
          style={{fontSize: 25}}
          accessibilityLabel="Go back to home screen"
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  { name: 'Home' },
                ],
              })
            );}
          }
        >Home
        </Button>
      </View>
    </View>
  );
}


// Navigation function
function RootStack() {
  return (
    <PaperProvider>
      <NavigationIndependentTree>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home"
            screenOptions={{
              headerShown: false
            }}
          >
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
    </PaperProvider>
  );
};


export default function Main() {
  return (
    <RootStack />
  );
}