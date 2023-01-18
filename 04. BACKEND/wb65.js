// SYNCHRONOUS(BLOCKING) -->> LINE BY LINE EXECUTION

// ASYNCHRONOUS(NON-BLOCKING) -->> LINE BY LINE EXECUTION NOT GURANTEED (CALLBACK WELL FIRE)

const fs = require("fs");


//ASYNCHRONOUS(NON-BLOCKING)
fs.readFile("Shivam.txt" , "utf-8" , (err , data)=>{
    console.log(err , data);
});
console.log("This is a messege");

//SYNCHRONOUS(BLOCKING)
const text = fs.readFileSync("tut64.txt" , "utf-8");
console.log("The content of file is ");
console.log(text);


// output
// This is a messege
// The content of file is 
// Writing in browser javascript and developer console
// null Writing in browser javascript and Shivam console
