const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second", "utf8");
console.log(first);
console.log(second);

writeFileSync(
  "./content/result",
  `This is the writefilesync result ${first}, ${second}`
);
