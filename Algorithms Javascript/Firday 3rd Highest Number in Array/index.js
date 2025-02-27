function thirdHighest(input) {
  if (input.length < 3) return "Array must have at least 3 numbers";

  let first = -Infinity,
    second = -Infinity,
    third = -Infinity;

  for (let i = 0; i < input.length; i++) {
    let num = input[i];

    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second && num < first) {
      third = second;
      second = num;
    } else if (num > third && num < second) {
      third = num;
    }
  }

  return third === -Infinity ? "No third highest number found" : third;
}

console.log(thirdHighest([5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]));
console.log(thirdHighest([2, 5, 3, 1, 4]));
console.log(thirdHighest([10, 10, 10, 10]));
console.log(thirdHighest([1, 2]));
console.log(thirdHighest([-5, -1, -10, -3, -2]));
