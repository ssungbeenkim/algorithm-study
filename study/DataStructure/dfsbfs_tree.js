// 기본적인 이진트리의 형태와 dfs 알고리즘.
// https://www.youtube.com/watch?v=P8gbyzHZgfY
/* 서비스에서 필요한 자료형태를 만들어 쓸 일이 생길 것이다. 그때 유용하게 사용되곤 함.  */
{
  const binaryTree = {
    root: {
      value: 5,
      left: {
        value: 3,
        left: {
          value: 3,
          left: {
            value: 3,
            left: null,
            right: null,
          },
          right: {
            value: 3,
            left: null,
            right: null,
          },
        },
        right: {
          value: 4,
          left: {
            value: 3,
            left: null,
            right: null,
          },
          right: {
            value: 3,
            left: null,
            right: null,
          },
        },
      },
      right: {
        value: 4,
        left: {
          value: 3,
          left: {
            value: 3,
            left: null,
            right: null,
          },
          right: {
            value: 3,
            left: null,
            right: null,
          },
        },
        right: {
          value: 3,
          left: {
            value: 3,
            left: null,
            right: null,
          },
          right: {
            value: 3,
            left: null,
            right: null,
          },
        },
      },
    },
  };
  console.log(JSON.stringify(binaryTree, null, 4));
  console.clear();
}

/* 코드 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(data) {
    let init = new Node(data);
    this.root = init;
    this.dataCount = 0;
  }
  length() {
    return this.dataCount;
  }
  insert(data) {
    let newNode = new Node(data);
    let curNode = this.root;

    while (curNode) {
      if (data === curNode.data) {
        return;
      }
      if (data < curNode.data) {
        if (!curNode.left) {
          curNode.left = newNode;
          this.dataCount++;
          return;
        }
        curNode = curNode.left;
      }
      if (data > curNode.data) {
        if (!curNode.right) {
          curNode.right = newNode;
          this.dataCount++;
          return;
        }
        curNode = curNode.right;
      }
    }
  }
  DFS() {
    let results = [];
    let stack = [this.root];

    while (stack.length !== 0) {
      let current = stack.pop();
      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
      results.push(current.data);
    }
    return results;
  }

  BFS() {
    let results = [];
    let queue = [this.root];

    while (queue.length !== 0) {
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      results.push(current.data);
    }
    return results;
  }
}

const tree = new Tree(5);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(4);
tree.insert(6);
tree.insert(9);
// console.dir(tree, { depth: null });
console.log(tree.DFS());
console.log(tree.BFS());
