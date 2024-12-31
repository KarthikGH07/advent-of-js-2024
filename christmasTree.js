function createXmasTree(height, ornament) {
  let s = "";
  const trunk = `${"_".repeat(height - 1)}#${"_".repeat(height - 1)}`;
  for (let i = 1; i <= height; i++) {
    s += `${"_".repeat(height - i)}${ornament.repeat(i * 2 - 1)}${"_".repeat(
      height - i
    )}\n`;
  }
  return `${s}${trunk}\n${trunk}`;
}

const tree = createXmasTree(5, "*");
console.log(tree);

const tree2 = createXmasTree(3, "+");
console.log(tree2);

const tree3 = createXmasTree(6, "@");
console.log(tree3);
