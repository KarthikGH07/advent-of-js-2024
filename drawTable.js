function drawTable(data) {
  let result = "";
  const columnWidths = {};

  for (const row of data) {
    for (const [key, value] of Object.entries(row)) {
      const valueLength = value.toString().length;
      const keyLength = key.length;

      columnWidths[key] = Math.max(
        columnWidths[key] || 0,
        valueLength,
        keyLength
      );
    }
  }

  for (let obj of data) {
    let row = "";
    for (const [key, value] of Object.entries(obj)) {
      row = row.concat(`| ${value.padEnd(columnWidths[key])} `);
    }
    result += `${row}|\n`;
  }

  return `${border}\n| ${headers
    .map((header) => header.padEnd(columnWidths[header.toLowerCase()]))
    .join(" | ")} |\n${border}\n${result}${border}
  `;
}

console.log(
  drawTable([
    { name: "Alice", city: "London" },
    { name: "Bob", city: "Paris" },
    { name: "Charlie", city: "New York" },
  ])
);
