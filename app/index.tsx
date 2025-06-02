import {
  Button,
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
import Task from './task.tsx'
import {NavigationContainer, NavigationIndependentTree, useNavigation, CommonActions, DefaultTheme, } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from "./styles.tsx";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { MD3DarkTheme, MD3LightTheme, PaperProvider, adaptNavigationTheme } from 'react-native-paper';

const Stack = createNativeStackNavigator();
const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: DefaultTheme,
});


const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
  },
};

const tasks = [];


function DisplayTasks() {
  const rows = [];
  for (var i = 0; i < tasks.length; i++) {
    rows.push(DisplayRow(tasks[i]));
  }
  return (
    <View>
      {rows}
    </View>
  )
}

function DisplayRow(task) {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.rowsInactive} key={task.id}>
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
              title = "Delete"
              onPress={() => {
  //                   setModalVisible(!modalVisible);
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
            />
            <Button
              title = "Cancel"
              onPress={() => {
                  setModalVisible(!modalVisible);
                }
              }
            />
          </View>
        </View>
      </Modal>
      <Text>{task.complete ? "\u2713":"\u274C"}</Text>
      <Text>{task.name}</Text>
      <Text>{task.description}</Text>
      <Button
        title = {task.complete ? "Mark as to-do":"Mark as complete"}
        onPress={() => {
          task.complete=!task.complete
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                { name: 'Home' },
              ],
            })
          );
        }}
      />
      <Button
        title = "X"
        onPress={() => {
            setModalVisible(true)
          }
        }
      />
    </View>
  )
}




function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.fixToText}>
          <Text style={styles.header}>Simple Task Manager</Text>
        </View>
        <View style={styles.buttonStyle}>
          <Button
            title="Add Task"
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
          />
        </View>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.subheader}>Tasks:</Text>
          <DisplayTasks />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
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
        <Text style={styles.subheader}>Task Name</Text>
        <TextInput
          style={styles.input}
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
          maxLength={40}
          style={styles.input}
          onChangeText={descOnChangeText}
          value={descText}
          placeholder="Description"
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          title="Submit"
          onPress={() => {
              if(nameText) {
                tasks.push(new Task(nameText, descText));
                navigation.dispatch(
                  CommonActions.reset({
                    index: 1,
                    routes: [
                      { name: 'Tasks' },
                    ],
                  })
                );
              }
            }
          }
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          title="Home"
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
        />
      </View>
    </View>
  );
}


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

function RootStack() {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <NavigationIndependentTree>
        <NavigationContainer theme={CombinedDefaultTheme}>
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