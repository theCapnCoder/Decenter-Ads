import React from "react";

export const Tree = () => {
  class Node<T> {
    value: T;
    children: Node<T>[];
    parent: Node<T> | null;

    constructor(value: T) {
      this.value = value;
      this.children = [];
      this.parent = null;
    }

    addChild(child: Node<T>) {
      child.parent = this;
      this.children.push(child);
    }

    isLeaf(){
      return this.children.length === 0
    }
  }

  const root: Node<string> = new Node("A");
  const nodeB: Node<string> = new Node("B");
  const nodeC: Node<string> = new Node("C");
  const nodeD: Node<string> = new Node("D");
  const nodeE: Node<string> = new Node("E");

  root.addChild(nodeB);
  root.addChild(nodeC);
  // root.addChild(nodeD);
  // root.addChild(nodeE);
  nodeB.addChild(nodeD);
  // nodeB.addChild(nodeD);
  // nodeB.addChild(nodeD);
  // nodeC.addChild(nodeE);
  // nodeC.addChild(nodeE);

  console.log('root', root)

  // const printTree = (node: Node<string>, level: number = 0) => {
  //   const indent = " ".repeat(level * 4);

  //   console.log('----', indent + node.value);

  //   for (const child of node.children) {
  //     console.log(child, node.value);
  //     printTree(child, level + 1);
  //   }
  // };

  // printTree(root);

  return (
    <div>
      <div>Tree</div>
      {/* <pre>{JSON.stringify(root, null, 2)}</pre> */}
    </div>
  );
};
