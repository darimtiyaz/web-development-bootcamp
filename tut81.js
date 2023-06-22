//inserting data in mongo db
//use muzzuKart
db.items.insertOne({name1:"Samsung 30s", price:22000,rating:4.5, qty:233, sold:98})

db.items.insertMany([{name1:"samsung 30s", price: 22000, rating:4.5, qty:233,sold:98}, {name1: "Moto 30s", price: 29000, rating:3.7, qty:43, sold:120}])

db.items.insertMany([{name1:"vivo 30s", price: 27000, rating:4.5, qty:200,sold:98}, {name1: "oppo 30s", price: 29000, rating:3.1, qty:431, sold:70},{name1: "mi note10", price:2000,rating:5.3, qty:35, sold:100, isBig: true}])