function isPalindrome(str) {
  let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  for (let i = 0; i < cleanStr.length / 2; i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Was it a car or a cat I saw?")); // true
console.log(isPalindrome("No 'x' in Nixon")); // true
