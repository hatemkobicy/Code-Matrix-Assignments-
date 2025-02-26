//1
function filterRange(arr, a, b) {
  return arr.filter((num) => num >= a && num <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

alert(filtered);
alert(arr);

//2
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((user) => user.name);

alert(names);

//3

function getAverageAge(users) {
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

alert(getAverageAge(arr));
