function compile(instructions) {
  const registers = {};
  let pointer = 0;

  const getValue = (arg) => (isNaN(arg) ? registers[arg] ?? 0 : parseInt(arg));

  while (pointer < instructions.length) {
    const [command, arg1, arg2] = instructions[pointer].split(" ");

    if (command === "MOV") {
      registers[arg2] = getValue(arg1);
    } else if (command === "INC") {
      registers[arg1] = (registers[arg1] ?? 0) + 1;
    } else if (command === "DEC") {
      registers[arg1] = (registers[arg1] ?? 0) - 1;
    } else if (command === "JMP") {
      if (getValue(arg1) === 0) {
        pointer = parseInt(arg2);
        continue;
      }
    }

    pointer++;
  }
  return registers?.A;
}

const instructions = [
  "MOV -1 C", // copies -1 to register 'C',
  "INC C", // increments the value of register 'C'
  "JMP C 1", // jumps to the instruction at index 1 if 'C' is 0
  "MOV C A", // copies register 'C' to register 'A',
  "INC A", // increments the value of register 'A'
];

console.log(compile(instructions)); // -> 2
