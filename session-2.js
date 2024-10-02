console.log("Session 2");

// const a = {}; Object literal
// Constructor function
// Using class
// Object factory function
// Using Object class

const obj = new Object();
// console.log(obj);

const obj2 = {};
// console.log(obj2);

const student = {
  name: "Alok Raj",
  roll: 7,
  subject: "CSE",
  about: function () {
    console.log("I Love JS");
  },
  favColor: "black",
  address: {
    state: "Bihar",
    country: "IN",
  },
};

student.favSub = "JS";

// console.log(Object.entries(student));
// console.log(Object.keys(student));
// console.log(Object.values(student));

const tempObj = Object.assign({}, student);

// const tempObj = student;

student.roll = 10;
student.address.state = "KA";
// console.log(tempObj);

// How can I make a perfect deep copy?

const employeeData = {
  John: 100,
  Pete: 500,
  Mary: 250,
};

class Util {
  constructor(data) {
    this.data = data;
  }

  sumSalaries() {
    const valArr = Object.values(this.data);
    return valArr.reduce((a, b) => a + b, 0);
  }
  averageSalaries() {
    const total = this.sumSalaries();
    const count = Object.keys(this.data).length;
    return Math.round(total / count);
  }
  findSalaryRange() {
    const salaryArr = Object.values(this.data);
    return Math.max(...salaryArr) - Math.min(...salaryArr);
  }
}

const util1 = new Util(employeeData);
// console.log(util1.data);
// console.log(util1.sumSalaries());
// console.log(util1.averageSalaries());
// console.log(util1.findSalaryRange());

// Base/Parent class
class CreditCard {
  constructor(cardNumber, limit) {
    this.cardNumber = cardNumber;
    this.limit = limit;
  }

  transactions() {
    console.log("Transaction is supported");
  }

  rewardPoint() {
    console.log("Reward Point: 2X the expense");
  }
}

// Derived/Child class
class SpecialCreditCard extends CreditCard {
  constructor(cardNumber, limit, partnerName, temp) {
    super(cardNumber, limit);
    this.partnerName = partnerName;
    this.temp = 0;
  }
  reward() {
    super.rewardPoint();
    console.log("Cashback of 5%");
  }

  rewardPoint() {
    console.log("Reward Point: 5X the expense", this.partnerName);
  }

  payment() {
    this.temp++;
    console.log(this.temp);
  }
}

const baseCard = new CreditCard("32134242", 1000000);
// baseCard.transactions();
// baseCard.rewardPoint();

const specialCard = new SpecialCreditCard("32134243", 1500000, "Netflix");
// specialCard.transactions();
// specialCard.reward();
// console.log(specialCard.limit);
// specialCard.reward();
specialCard.payment();

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  markPresent() {
    console.log(this.name, "is present");
  }

  getRole() {
    console.log("Employee of office");
  }
}

class Developer extends Employee {
  constructor(prefLang, ...rest) {
    super(...rest);
    this.prefLang = prefLang;
  }
  submitCode() {
    console.log("Code Submitted by", this.name, "from", this.department);
  }

  getRole() {
    console.log("Works with ", this.prefLang);
  }
}

const dev1 = new Developer("JavaScript", "John Doe", "Development");
// dev1.submitCode();
// dev1.markPresent();
dev1.getRole();
