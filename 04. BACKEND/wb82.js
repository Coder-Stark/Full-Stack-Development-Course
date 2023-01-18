//SEARCHING DATA IN MONGODB
use shivamkart

//This query will return all the objects with rating equal to 5
//           {filter object}
db.items.find({rating:5})
db.items.find({rating:{$gt:4}})          //gt = greater-then
db.items.find({rating:{$gte:4}})         //gte = greater-then-equal

db.items.find({rating:{$gte:4} , price:{$gt : 21000}})         //gte = greater-then-equal and  gt (price)
db.items.find({rating:{$lte:4} , price:{$gt : 20000}})         //lte = lesser-then-equal (and)  gt (price)

db.items.find({$or:[{rating:{$gte:4}} , {price:{$gt : 21000}}]})         //gte = greater-then-equal (or)  gt (price)

db.items.find(
    {rating:{$gt : 3.5}},
    {rating:1 , qty:1},
)