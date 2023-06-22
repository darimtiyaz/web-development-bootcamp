// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
  //console.log("we are connected bro/sis")
}

const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function speak() {
  const greeting = "My name is " + this.name
  //console.log(greeting);
};

const Kitten = mongoose.model('muzzuKitty', kittySchema);

const muzzuKitty = new Kitten({ name: 'muzzuKitty ' });
//const muzzuKitty2 = new Kitten({ name: 'muzzuKitty2 ' });
console.log(muzzuKitty.name); // 'Silence'
muzzuKitty.speak();


muzzuKitty.save();
muzzuKitty.speak();

//const kittens =Kitten.find();
//console.log(kittens);