//show dbs 
//use muzzuKart 
//show collections 

db.items.find({price: 22000})

//Delete any form of the mongo database
db.items.deleteOne({price: 22000})

//deleteone will delete the matching entry and will delete the first entry in case of multi document match

db.items.deleteMany({price: 27000})