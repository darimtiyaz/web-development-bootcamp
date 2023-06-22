const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

const mongoose = require('mongoose');
const bodyparser = require("body-parser")
const { stringify } = require("querystring");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

//Defining mongoose schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  text: String

});

const Contact = mongoose.model('Contact', contactSchema);

//Express specific stuff
app.use('/static', express.static('static'))  //for serving static files
app.use(express.urlencoded())

//Pug specific stuff
app.set('view engine', 'pug')   //set the template engine as pug
app.set('views',path.join(__dirname, 'views'))  //set the views directory


//End points
app.get('/', (req, res)=>{
  const params = { }
  res.status(200).render('index.pug', params);
})

app.get('/contact', (req, res)=>{
  const params = { }
  res.status(200).render('contact.pug', params);
})

app.post('/contact', (req, res)=>{
  var myData = new Contact(req.body);
  myData.save().then(()=>{
    res.send("This item has been saved to the database")
  }).catch(()=>{
    res.status(400).send("Item was not saved to the database")
  });
 // res.status(200).render('contact.pug');
})

//start the server
app.listen(port, ()=>{
  console.log(`The application started successfully on port ${port}`);
});
