// MODULES IN NODEJS
//BUILT IN , USER , THIRDPARTY

const fs = require("fs");

const text = fs.readFileSync("tut64.txt" , "utf-8");
console.log("The content of file is ");
console.log(text);

let text1 = fs.readFileSync("tut64.txt" , "utf-8");
text1 = text1.replace("developer" , "Shivam");
console.log("Creating a new file");
fs.writeFileSync("Shivam.txt" , text1);
console.log(text1);

// output

// Writing in browser javascript and developer console
// Creating a new file -->> {new file created(Shivam.txt)}
// Writing in browser javascript and Shivam console