function organizeShoes(shoes) {
  const pairs = [];
  const existingSizeMap = new Map();
  shoes.forEach((shoe) => {
    if (!existingSizeMap.has(shoe.size)) {
      existingSizeMap.set(shoe.size, { I: 0, R: 0 });
    }
    const currentSizeShoes = existingSizeMap.get(shoe.size);

    if (shoe.type === "I" && currentSizeShoes.R > 0) {
      pairs.push(shoe.size);
      existingSizeMap.set(shoe.size, {
        I: currentSizeShoes.I,
        R: currentSizeShoes.R - 1,
      });
    } else if (shoe.type === "R" && currentSizeShoes.I > 0) {
      pairs.push(shoe.size);
      existingSizeMap.set(shoe.size, {
        I: currentSizeShoes.I - 1,
        R: currentSizeShoes.R,
      });
    } else {
      existingSizeMap.set(
        shoe.size,
        shoe.type === "I"
          ? { I: currentSizeShoes.I + 1, R: 0 }
          : { I: 0, R: currentSizeShoes.R + 1 }
      );
    }
  });

  return pairs;
}

const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

console.log(organizeShoes(shoes));
// [38, 42]

const shoes2 = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 },
];
console.log(organizeShoes(shoes2));
// [38, 38]

const shoes3 = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 43 },
];

console.log(organizeShoes(shoes3));
// []
