function drawRace(indices, length) {
  let result = "";

  for (let i = 1; i <= indices.length; i++) {
    const track = [..."~".repeat(length)];
    if (indices[i - 1] !== 0) {
      track.splice(indices[i - 1], 1, "r");
    }
    result += `${" ".repeat(indices.length - i)}${track
      .join("")
      .concat(` /${i}`)
      .concat(i !== indices.length ? "\n" : "")}`;
  }

  return result;
}

drawRace([0, 5, -3], 10);

// console.log([..."~".repeat(10)].splice(5, 1, "r"));
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/
