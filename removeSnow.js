function removeSnow(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
}

removeSnow("zxxzoz"); // -> "oz"
// 1. Remove "xx", resulting in "zzoz"
// 2. Remove "zz", resulting in "oz"

removeSnow("abcdd"); // -> "abc"
// 1. Remove "dd", resulting in "abc"

removeSnow("zzz"); // -> "z"
// 1. Remove "zz", resulting in "z"

removeSnow("a"); // -> "a"
// No duplicate piles
