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

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.fixToText}>
        <Text style={styles.header}>Simple Task Manager</Text>
      </View>
      <View>
        <MyButton />
      </View>
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
  },

});


const tasks = [];