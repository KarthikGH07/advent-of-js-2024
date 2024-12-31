const assert = require("assert");

function createFrame(names) {
  const longestName = Math.max(...names.map((name) => name.length));
  const stars = Array.from({ length: longestName + 4 }, () => "*");

  let s = "";
  for (let i = 0; i < names.length + 2; i++) {
    if (i === 0) {
      s = s.concat(...stars, "\n");
    } else if (i === names.length + 1) {
      s = s.concat(...stars);
    } else {
      s = s.concat(
        "*",
        " ",
        names[i - 1],
        ...Array.from(
          { length: longestName - names[i - 1]?.length + 1 },
          () => " "
        ),
        "*",
        "\n"
      );
    }
  }

  return s;
}

function createFrame1(names) {
  if (names.length === 0) return "***\n***"; // Handle empty array

  // Find the length of the longest name
  const longestName = Math.max(...names.map((name) => name.length));
  const frameWidth = longestName + 4; // 2 for border + 2 for padding

  // Create the top and bottom borders
  const border = "*".repeat(frameWidth);

  // Create the framed content
  const framedNames = names
    .map((name) => `* ${name.padEnd(longestName)} *`)
    .join("\n");

  // Combine everything
  return `${border}\n${framedNames}\n${border}`;
}

console.log(createFrame1(["midu", "madeval", "educalvolpz"]));

function organizeInventory(inventory) {
  return inventory?.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = {};
    }
    acc[item.category][item.name] =
      (acc[item.category][item.name] ?? 0) + item.quantity;

    return acc;
  }, {});
}

console.log(
  organizeInventory([
    { name: "doll", quantity: 5, category: "toys" },
    { name: "car", quantity: 3, category: "toys" },
    { name: "ball", quantity: 2, category: "sports" },
    { name: "car", quantity: 2, category: "toys" },
    { name: "racket", quantity: 4, category: "sports" },
  ])
);

function shuffle(arr) {
  // return arr.sort(() => Math.random() - 0.5);

  // for (let i = arr.length - 1; i >= 0; i--) {
  //   const randomIndex = Math.floor(Math.random() * (i + 1));
  //   [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  // }

  for (let i = 0; i < arr.length; i++) {
    const j = i + Math.floor(Math.random() * (arr.length - i));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

let count = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  321: 0,
  312: 0,
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join("")]++;
}

// show counts of all possible permutations
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}

const arr = [1, 2, 3, 4];
const permutations = [
  [1, 2, 3, 4],
  [1, 2, 4, 3],
  [1, 3, 2, 4],
  [1, 3, 4, 2],
  [1, 4, 2, 3],
  [1, 4, 3, 2],
  [2, 1, 3, 4],
  [2, 1, 4, 3],
  [2, 3, 1, 4],
  [2, 3, 4, 1],
  [2, 4, 1, 3],
  [2, 4, 3, 1],
  [3, 1, 2, 4],
  [3, 1, 4, 2],
  [3, 2, 1, 4],
  [3, 2, 4, 1],
  [3, 4, 1, 2],
  [3, 4, 2, 1],
  [4, 1, 2, 3],
  [4, 1, 3, 2],
  [4, 2, 1, 3],
  [4, 2, 3, 1],
  [4, 3, 1, 2],
  [4, 3, 2, 1],
];

// Shuffle the array
shuffle(arr);

// Validate the shuffled array
const isValidPermutation = permutations.some(
  (permutation) => JSON.stringify(permutation) === JSON.stringify(arr)
);

if (isValidPermutation) {
  console.log("The shuffled array is a valid permutation:", arr);
} else {
  console.log(
    "Something went wrong! The shuffled array does not match any of the valid permutations."
  );
}

function throttle(func, waitTime) {
  let isThrottling = false,
    savedArgs = null;

  return function (...args) {
    if (!isThrottling) {
      func.apply(this, args);
      isThrottling = true;

      function queueTimer() {
        setTimeout(() => {
          isThrottling = false;

          if (savedArgs) {
            func.apply(this, savedArgs);
            isThrottling = true;
            savedArgs = null;
            queueTimer();
          }
        }, waitTime);
      }

      queueTimer();
    } else {
      savedArgs = args;
    }
  };
}

let time = 0;

function testThrottle(input) {
  const calls = [];
  time = 0;

  function wrapper(arg) {
    calls.push(`${arg}@${time}`);
  }

  const throttledFunc = throttle(wrapper, 3);
  input.forEach((call) => {
    const [arg, time] = call.split("@");
    setTimeout(() => throttledFunc(arg), time);
  });
  return calls;
}

console.assert(testThrottle(["A@0", "B@2", "C@3"]), ["A@0", "C@3"], "Success");

function curry(func) {
  return function curriedFunction(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...args2) {
        return curriedFunction(...args, ...args2);
      };
    }
  };
}

const joinArgs = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedFunc = curry(joinArgs);

console.log(curriedFunc(1, 2, 3)); // '1_2_3'
console.log(curriedFunc(1)(2, 3)); // '1_2_3'
console.log(curriedFunc(1, 2)(3)); // '1_2_3'

function flat(array, depthLevel = 1) {
  // const result = [];
  // array.forEach((item) => {
  //   if (Array.isArray(item) && depthLevel > 0) {
  //     result.push(...flat(item, depthLevel - 1));
  //   } else {
  //     result.push(item);
  //   }
  // });

  // return result;

  return array.reduce((acc, item) => {
    if (Array.isArray(item) && depthLevel > 0) {
      acc.push(...flat(item, depthLevel - 1));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}

const array = [1, [2], [3, [4]]];
console.log(flat(array, 1));
// [1, 2, 3, [4]] flattens on depth level 1
console.log(flat(arr, 2));
