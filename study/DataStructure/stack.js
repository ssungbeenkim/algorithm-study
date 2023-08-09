/* 
https://www.youtube.com/watch?v=dvKuG3gfLFQ&list=PLkfUwwo13dlX-n3xetKlUQwitgOp43uV1&index=2
FIFO
*/

class Stack {
  constructor() {
    this.arr = [];
  }
  push(data) {
    this.arr.push(data);
  }
}

let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s);
