const crypto = require("crypto");
const config = require("config");

const key = Buffer.from(config.get("KEY"), "hex");
const iv = Buffer.from(config.get("IV"), "hex");

function encryptText(text, key, iv) {
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(text, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
}

function decryptText(text, key, iv) {
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(text, "base64", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

const data = "Encryption in Node";
console.log(data);

const encryptedData = encryptText(data, key, iv);
console.log(encryptedData);

const decryptedData = decryptText(encryptedData, key, iv);
console.log(decryptedData);
