// 1

const checkAge = (age) =>
  age > 18 ||
  confirm("Do you have your parents permission to access this page?");

// 2

const pow = (x, n) => {
  if (n < 1) throw new Error("n must be greater than 1");
  return x ** n;
};

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));

// 3

const ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

// 4

let calculator = {
  read() {
    this.a = +prompt("Enter first number:", 0);
    this.b = +prompt("Enter second number:", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// 5

const min = (a, b) => (a < b ? a : b);

console.log(min(2, 5));
console.log(min(10, -3));
console.log(min(7, 7));
