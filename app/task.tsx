// Task data structure
var idCount = 0;

export default class Task {
  constructor(name, description) {
    this.id = idCount++;
    this.name = name;
    this.description = description;
    this.complete = false;
  }

  toggleComplete() {
    this.complete = !this.complete;
  }

}

export const tasks = [];


export function DisplayToDo() {
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

function ToDoRow(task) {
  if(!task.complete) {
    return (
      <View style={styles.rows}>
        <Text>{task.name}</Text>
        <Text>{task.description}</Text>
      </View>
    )
  }
}

export function DisplayDoneTasks() {
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

function DoneTaskRow(task) {
  if(task.complete) {
    return (
      <View style={styles.rows}>
        <Text>{task.name}</Text>
        <Text>{task.description}</Text>
      </View>
    )
  }
}