const fs = require("fs");
let text = fs.readFileSync('dele.text', "utf-8");
text = text.replace("content","Rohan");

console.log("this is content of the file is");
console.log(text);

console.log("creating a new file...");
fs.writeFileSync("rohan.text",text);