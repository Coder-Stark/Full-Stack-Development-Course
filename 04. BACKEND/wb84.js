//UPDATING DATA IN MONGODB
//CRUD -->> CREAT READ UPDATE DELETE

show dbs
use shivamkart
show collections

db.anotherCollection.insertOne({a:89})
show collections

//in items
//update
// db.items.updateOne({},{})
db.items.find()
db.items.updateOne({name:"moto 30s"},{$set : {price:2}})
db.items.find()
db.items.updateMany({name:"jio"},{$set : {price : 5 , rating : 1}})
db.items.find()