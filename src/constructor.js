export default class Task {
  constructor(description, id) {
    this.description = description;
    this.id = id;
    this.completed = false;
  }
}