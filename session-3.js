import { add, diff, multiply } from "./calculate.js";

console.log("Session 3");

// Pure Function? In simple terms, pure functions do not rely on external state. Therefore, all operations performed in pure functions are not affected by external state. As a result, the same input parameters will give the same deterministic output regardless of how many times you run the function.

// Pure functions always return same output for same input parameters
function sum(a, b) {
  const c = a + b;
  return c;
}

sum(2, 3); // 5
sum(2, 3); // 5
sum(2, 3); // 5
sum(2, 3); // 5
sum(2, 3); // 5

const num = 10;

function sum2(a, b) {
  return a + b + num;
}

sum2(2, 3); // 15

/**
 * Advantages of pure functions:
 * A pure function works as an independent function that gives the same output for the same inputs.
 * Pure functions are readable because of independent behavior. Moreover, they are straightforward to debug.
 * You can clone an external state into a pure function, but it does not change the purity of the function.
 */

//Impure Function: An impure function is a function that contains one or more side effects. It mutates data outside of its lexical scope and does not predictably produce the same output for the same input.

// mutate -> change

function addKeyFn(obj, key, val) {
  const copyObj = { ...obj };
  copyObj[key] = val;
  return copyObj;
}

const student = {
  name: "Crio",
  profession: "IT",
};

const obj1 = addKeyFn(student, "designation", "Developer");
// console.log(obj1);
// console.log(student);

/**
 * The following JavaScript functions are inherently impure:
 * Math.random()
 * Date.now()
 * arr.splice()
 * arr.push()
 * arr.sort()
 * console.log() and alert() are also impure functions (although they generate the same behavior and always return the same value for identical calls).
 * JavaScript is synchronous by its nature. Therefore, asynchronous functions such as fetch and promise are impure.
 *
 * Advantages of impure functions:
 * Impure functions can use an in-place solution to reduce the space complexity.
 * In impure functions, the state can be modified to use the parent variable and call for the function compiling.
 */
const obj = {
  name: "Test",
  roll: 7,
  address: {
    city: "Bangalore",
    country: "IN",
    state: {
      name: "Karnataka",
      code: "KA",
    },
  },
};

const copyObject = { ...obj, address: { ...obj.address } };

const deepClone = (obj) => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);

  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );
  return clone;
};

function printName() {
  console.log("CrioDo");
}

function hofFunction(cb) {
  cb();
}

function hofFunction2() {
  return () => {
    console.log("CrioDo!!!");
  };
}

function hofFunction3(cb) {
  cb();
  return () => {
    console.log("CrioDo!!!!");
  };
}

// hofFunction(printName);
const temp = hofFunction2();
// temp();

const result = add(2, 3) + diff(3, 2) + multiply(2, 3);
console.log("Session 3:", result);
