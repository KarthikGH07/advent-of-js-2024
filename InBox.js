function inBox(box) {
  let giftInTheBox = false;

  for (let i = 0; i < box.length; i++) {
    if (i !== 0 && i !== box.length - 1) {
      giftInTheBox = box[i].slice(1, -1).includes("*");
      if (giftInTheBox) {
        break;
      }
    }
  }

  return giftInTheBox;
}

// console.log(inBox(["###", "#*#", "###"])); // ➞ true

// inBox(["####", "#* #", "#  #", "####"]); // ➞ true

console.log(inBox(["#*#", "###", "###"])); // ➞ false

// inBox(["#####", "#   #", "#   #", "#   #", "#####"]); // ➞ false
