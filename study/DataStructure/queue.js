class Queue {
  constructor() {
    this.storage = new Map();
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.storage.size;
  }

  add(item) {
    if (!this.storage.size) {
      this.storage.set(0, item);
    } else {
      this.storage.set(++this.rear, item);
    }
  }

  pop() {
    const item = this.storage.get(this.front);
    if (item == null) return null;
    if (this.storage.size === 1) {
      this.storage.clear();
      this.front = this.rear = 0;
    } else {
      this.storage.delete(this.front++);
    }
    return item;
  }
}
