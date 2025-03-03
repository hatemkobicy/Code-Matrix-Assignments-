// Exercise 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Exercise 2
const person1 = new Person("John", 25);

function describePerson(callback) {
  callback.call(person1);
}

describePerson(function () {
  console.log(this.introduce());
});

// Exercise 3
function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${milliseconds} milliseconds`);
    }, milliseconds);
  });
}

wait(4000).then((message) => console.log(message));
