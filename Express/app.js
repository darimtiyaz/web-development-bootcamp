const express = require('express');

const app = express();
const port = 80;

app.use('/static', express.static('static'))

app.get("/", (req, res)=>{
  res.status(200).send("This is home page of  my first express app with munna");
});

app.get("/about", (req, res)=>{
  res.send("This is about page of my first express app with munna");
});

app.post("/contact", (req, res)=>{
  res.send("This is contact page of my first express app with munna");
});

app.post("/this", (req, res)=>{
  res.status(404).send("This is my first express app with munna");
});

app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
})