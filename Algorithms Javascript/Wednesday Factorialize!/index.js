function factorialize(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialize(0));
console.log(factorialize(5));
console.log(factorialize(10));
