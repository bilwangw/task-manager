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
