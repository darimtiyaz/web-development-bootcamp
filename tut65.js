//synchronous or blocking
//line by line execute

//Asynchronous or non blocking
//line by line no guaranteed
//-calbacks fire

const fs = require("fs");
let text = fs.readFile("dele.txt", "utf-8", (err,data)=>{
  console.log(err,data);
});
console.log("This is a message")