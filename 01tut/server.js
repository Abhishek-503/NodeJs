console.log("Hello");

const os = require("os");
const path = require("path");
const math = require("./math");

const { add, sub, mul, div } = require("./math");

console.log(math.add(2, 3));
console.log(div(2, 3));
console.log(sub(2, 3));
console.log(mul(2, 3));
// console.log(os.type());
// console.log(os.homedir());
// console.log(os.type());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));

// console.log(path.parse(__filename));
