//INSERTING DATA IN MONGODB
use shivamkart

// right-click to paste in mongosh
db.items.insertOne({name:"samsung 30s", price:20000,rating:5, qty:222,sold:100})

db.items.find()

db.items.insertMany([{name:"moto 10s", price:33000,rating:4, qty:212,sold:120},{name:"samsung 30s", price:20000,rating:5, qty:222,sold:100},{name:"jio", price:21000,rating:3.5, qty:22,sold:130 , isBig : true}])

db.items.find()
