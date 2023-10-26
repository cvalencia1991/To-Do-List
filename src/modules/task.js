class Task {
  constructor(id, name, description, status) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
  }

  addTask() {
    console.log('addTask', this);
  }
}

export default Task;