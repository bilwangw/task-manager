// Task data structure

export default class Task {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.complete = false;
  }

  toggleComplete() {
    this.complete = !this.complete;
  }

}


export default function DisplayToDo() {
  const rows = [];
  for (var i = 0; i < tasks.length; i++) {
    rows.push(ToDoRow(tasks[i]));
  }
  return (
    <View>
      {rows}
    </View>
  )
}

export default function ToDoRow(task) {
  if(!task.complete) {
    return (
      <View style={styles.rows}>
        <Text>{task.name}</Text>
        <Text>{task.description}</Text>
      </View>
    )
  }
}

export default function DisplayDoneTasks() {
  const rows = [];
  for (var i = 0; i < tasks.length; i++) {
    rows.push(DoneTaskRow(tasks[i]));
  }
  return (
    <View>
      {rows}
    </View>
  )
}

export default function DoneTaskRow(task) {
  if(task.complete) {
    return (
      <View style={styles.rows}>
        <Text>{task.name}</Text>
        <Text>{task.description}</Text>
      </View>
    )
  }
}