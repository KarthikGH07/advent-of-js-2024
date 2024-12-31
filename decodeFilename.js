function decodeFilename(filename) {
  return filename.replaceAll(/^[0-9]*_|.[a-zA-Z0-9]*$/g, "");
}

console.log(decodeFilename("2023122512345678_sleighDesign.png.grinchwa"));
