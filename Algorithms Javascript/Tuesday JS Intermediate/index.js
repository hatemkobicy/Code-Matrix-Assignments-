// 1. Addition
const sumValues = Array.from({ length: 2701 - 200 + 1 }, (_, i) => i + 200)
  .filter((x) => (x % 3 === 0) ^ (x % 5 === 0))
  .reduce((acc, val) => acc + val, 0);
console.log("Sum:", sumValues);

// 2. Shift the Values
function shiftValues(arr) {
  return [arr[arr.length - 1], ...arr.slice(0, -1)];
}
const X = [2, 1, 6, 4, -7];
console.log("Shifted Array:", shiftValues(X));

// 3. FizzBuzz
const fizzBuzz = Array.from({ length: 135 }, (_, i) => {
  const x = i + 1;
  return x % 3 === 0 && x % 5 === 0
    ? "FizzBuzz"
    : x % 3 === 0
    ? "Fizz"
    : x % 5 === 0
    ? "Buzz"
    : x;
});
console.log("FizzBuzz:", fizzBuzz);

// 4. Fibonacci (sum under 1,000,000)
function fibonacciSum(limit) {
  let a = 0,
    b = 1,
    total = 0;
  while (a < limit) {
    total += a;
    [a, b] = [b, a + b];
  }
  return total;
}
console.log("Fibonacci Sum:", fibonacciSum(1000000));

// 5. Remove the Negative
function removeNegatives(arr) {
  return arr.filter((x) => x >= 0);
}
const Y = [1, -2, 4, 1];
console.log("Filtered Array:", removeNegatives(Y));

// 6. Communist Censorship
function censorWord(arr, word) {
  return arr.map((x) => (x === word ? "*".repeat(word.length) : x));
}
const Z = ["Man", "I", "Love", "The", "Matrix", "Program"];
console.log("Censored Array:", censorWord(Z, "Program"));
