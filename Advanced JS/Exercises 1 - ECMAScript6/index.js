// 1

let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);

// 2

const ourPlanetName = "Earth";
let currentVisitorName = "John";

// 3

let phrase = "Hello";

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

// 4

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user);

// 5

const user = {
  name: "John",
};

user.name = "Pete";

console.log(user.name);

// 6

let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130,
};

let sum = Object.values(salaries).reduce((acc, salary) => acc + salary, 0);

console.log(sum); // 390

// 7

let result = a + b < 4 ? "Below" : "Over";

// 8

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
