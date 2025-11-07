import { linkedList } from "./ll.js";

const list = new linkedList;

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());

list.prepend("hippo");
console.log(list.toString());

list.removeAt(2);
console.log(list.toString());

list.insertAt("elephant", 2);
console.log(list.toString());

list.pop();
console.log(list.toString());

list.shift();
console.log(list.toString());

console.log(list.find("snake"));

console.log(list.contains("snake"));

console.log(list.at(4));

console.log(list.size());

console.log(list.head());

console.log(list.tail());

console.log(list.toString());