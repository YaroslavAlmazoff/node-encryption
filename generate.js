const crypto = require("crypto");

console.log(crypto.randomBytes(32).toString("hex"));
console.log(crypto.randomBytes(16).toString("hex"));
