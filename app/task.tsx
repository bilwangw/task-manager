// Task data structure
var idCount = 0;

// Task class to store important info
export default class Task {
  id: integer;
  name: string;
  description: string;
  complete: boolean;

  constructor(name, description) {
    this.id = idCount++;
    this.name = name;
    this.description = description;
    this.complete = false;
  }

}
