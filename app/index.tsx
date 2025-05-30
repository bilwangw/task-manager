import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlexAlignType,
  FlexStyle,
} from 'react-native';
import React from "react";
import Task from './task.tsx';

function MyButton() {
  return (
    <Button
       title="manage-tasks"
    >
    Manage Tasks
    </Button>
  );
}

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

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.fixToText}>
        <Text style={styles.header}>Simple Task Manager</Text>
      </View>
      <View>
        <MyButton />
      </View>
      <DisplayTasks />
    </View>
  );
}


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


const tasks = [];

const task1 = new Task("task1231", "this is a task")
const task2 = new Task("task41242", "this is a task")
const task3 = new Task("task2143", "this is a task")

tasks.push(task1,task2,task3);