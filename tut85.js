//show dbs
//use muzzuKart
//show collections

db.items.find()
db.items.updateOne({name1: "nokia 5233"}, {$set: {price: 2}})
db.items.find()
db.items.updateMany({name: "1+ 67"}, {$set: {price: 3, rating: 1}})
