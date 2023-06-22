//searching data in mongo db
//use muzzuKart

//This query will return all the objects with rating equal to 3.1
db.items.find({rating: 3.1})
db.items.find({rating: {$gte:3.1}})
db.items.find({rating: {$gt: 3.1}})
//And operator
db.items.find({rating: {$gt: 3.1}, price: {$gt: 4000}})

db.items.find({rating: {$gt: 4.1}, price: {$gt: 12000}})

db.items.find({$or:[{rating: {$lt: 4.7}}, {price:{$gt: 23000}}]})

db.items.find({rating: {$gt: 3.5}}, {rating: 1})