// 1. Print 1 - 135
for (let i = 1; i <= 135; i++) {
  console.log(i);
}

// 2. Print Odd Numbers 1 - 135
for (let i = 1; i <= 135; i += 2) {
  console.log(i);
}

// 3. Sum of Printed Numbers
let sum = 0;
for (let i = 0; i <= 135; i++) {
  sum += i;
  console.log(`Number is: ${i} Sum: ${sum}`);
}

// 4. Print the elements of an array
function printArray(arr) {
  for (let num of arr) {
    console.log(num);
  }
}
printArray([1, 4, 2, 12]);

// 5. Find Max
function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(findMax([2, -3, -1]));

// 6. Get Average
function getAverage(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum / arr.length;
}
console.log(getAverage([2, 1, 3]));

// 7. Eliminate the Negatives
function eliminateNegatives(arr) {
  return arr.map((num) => (num < 0 ? 0 : num));
}
console.log(eliminateNegatives([2, -1, 4, -3]));

// 8. Number to String
function numberToString(arr) {
  return arr.map((num) => (num < 0 ? "negative" : num));
}
console.log(numberToString([1, -2, 3, -4]));
