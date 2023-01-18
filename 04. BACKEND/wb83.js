//DELETING DATA IN MONGODB
use shivamkart

db.items.find({price:21000})

//deleteOne -->> delete  the matching document entry and will delete the first entry in case of multi document
db.items.deleteOne({price:21000})

//deleteMany -->> delete all matching document entry
db.items.deleteMany({price:20000})
