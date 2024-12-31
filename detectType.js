function detectType(input) {
  const type = Object.prototype.toString.call(input).slice(8, -1).toLowerCase();
  console.log(type);
  return type;
}

detectType(1); // Output: 'number'
detectType(new Map()); // Output: 'map'
detectType([]); // Output: 'array'
detectType(null);
