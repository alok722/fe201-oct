console.log("Running");

// OOPs -> Object Oriented Programming
// class based language -> class + Object

// class -> blueprint of object -> single instance of class ic called as object

// class Car => color, brand, fuelType, startFunc

// bmwObj => black, BMW, Petrol, startFunc
// suzukiObj => white, Suzuki, Petrol, startFunc

// Prototyped language -> Object
// Object -> Define blueprint/template
// object -> specific object

// async, await -> Promise
// class keyword -> syntactic sugarcoat around existing JS functionalities

// What's existing in JS, Later I will Class and then compare

// Constructor Function -> Template for Object
function Car(color, brand, fuelType) {
  this.color = color;
  this.brand = brand;
  this.fuelType = fuelType;
  this.engineStart = function () {
    console.log(`Car ${this.color} ${this.brand} started`);
  };
}

const bmwObj = new Car("black", "BMW", "Petrol");
// console.log(bmwObj);

// What new keyword is doing behind the scenes
// It does 3 things
// 1. -> Create an empty object
// 200MemoryLocation -> {}

// 2. Refers this keyword to newly created object
// this -> 200MemoryLocation

// 3. Returns the newly created object

// {
//   color: 'black',
//   brand: 'BMW',
//   fuelType: 'Petrol',
//   start: [Function: start]
// }

function Circle(radius, x, y) {
  this.radius = radius;
  this.location = {
    x: x,
    y: y,
  };
  this.draw = function () {
    console.log(this.location);
  };
  this.move = function (nextX, nextY) {
    this.location.x = nextX;
    this.location.y = nextY;
  };
}

const circleObj = new Circle(10, 0, 0);
// console.log(circleObj);

// for (let i = 1; i <= 10; i++) {
//   circleObj.move(i, i);
//   circleObj.draw();
// }

const person = {
  name: "Alok",
  class: "B.Tech",
  run: function () {
    console.log(this);
  },
};

// person.run();

function hello() {
  console.log(this);
}
// window.hello();

function User(fullName) {
  this.fullName = fullName;
  this.friendList = [];
  this.addFriend = function (friendName) {
    this.friendList.push(friendName);
  };
  this.printFriendList = function () {
    console.log(this.friendList);
  };
  this.findMutual = function (userObj) {
    // console.log(this);
    // console.log(userObj);
    const mutualFriends = this.friendList.filter((friend) =>
      userObj.friendList.includes(friend)
    );
    console.log("Mutual Friends:", mutualFriends);
  };
}

const vivek = new User("Vivek Kumar");
vivek.addFriend("Harish");
vivek.addFriend("Radhe");
vivek.addFriend("Ajay");

// vivek.printFriendList();

const varun = new User("Varun");
varun.addFriend("Rohan");
varun.addFriend("Vatsal");
varun.addFriend("Radhe");
varun.addFriend("Harish");

// varun.printFriendList();

// vivek.findMutual(varun);

const student = {
  fullName: "Alok Raj",
  greet: function () {
    console.log("this", this);
    console.log("Hello " + this.fullName);
  },
};

function executor(cb) {
  console.log(this);
  cb();
}

// student.greet();

const newGreet = student.greet.bind(student);

// executor(newGreet);

// what if when I am passing the function, I also bind the value of this keyword

const timer = {
  currentTime: 0,
  showTime: function () {
    console.log("from here", this.currentTime);
  },
  addTen: function () {
    console.log("THIS", this);
    this.currentTime += 10;
    this.showTime();
  },
};

// timer.addTen();
const newFun = timer.addTen.bind(timer);
// setTimeout(newFun, 2000);

function CarConstructorFunc(color, model, type) {
  this.color = color;
  this.model = model;
  this.type = type;
  this.start = function () {
    console.log("Car Start");
  };
}
const carObj1 = new CarConstructorFunc("black", "BMW", "petrol");
console.log(carObj1);

class CarClass {
  constructor(color, model, type) {
    this.color = color;
    this.model = model;
    this.type = type;
  }

  start() {
    console.log("Car Start");
  }
}

const carObjFromClass = new CarClass("red", "Audi", "diesel");
console.log(carObjFromClass);
