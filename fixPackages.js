function fixPackages(packages) {
  const openIndex = [];
  let chars = packages.split("");

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "(") {
      openIndex.push(i);
    } else if (chars[i] === ")") {
      const index = openIndex.pop();
      const reversedChars = chars.slice(index + 1, i).reverse();
      chars.splice(index, i - index + 1, ...reversedChars);
      i = index;
    }
  }

  return chars.join("");
}

fixPackages("a(cb)de");
// ➞ "abcde"
// We reverse "cb" inside the parentheses

fixPackages("a(bc(def)g)h");
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

fixPackages("abc(def(gh)i)jk");
// ➞ "abcighfedjk"
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

fixPackages("a(b(c))e");
// ➞ "acbe"
// 1st we reverse "c" → "c", then "bc" → "cb"
