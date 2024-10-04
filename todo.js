import { add, diff, multiply, NUM } from "./calculate.js";

const todo = [];
console.log(NUM);
const addToDo = (arr, item, priority) => {
  const newArr = [...arr];
  if (priority === "high") {
    newArr.unshift(item);
  } else {
    newArr.push(item);
  }
  return newArr;

  //   if (priority === 'high') {
  //     return [item,...arr];
  //   } else {
  //     return [...arr, item];
  //   }
};

const clearTodo = (arr, index) => {
  const newArr = [...arr];
  newArr[index] = null;
  return newArr;
};

const updateTodo = (arr, index, item) => {
  const newArr = [...arr];
  newArr[index] = item;
  return newArr;
};

const getTodo = (arr, index) => {
  if (index) return arr[index];

  return arr;
};

const result1 = add(2, 3) + diff(3, 2) + multiply(2, 3);
console.log("TODO:", result1);
