// console.log("This is external js file");

// let name = "Shivam";
// let name1 = "Aditya";
// let name2 = "Tushar";
// let name3 = "Sourabh";
// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");

// // same as above(7-10)lines 
// function greet(name){
//     console.log(name+" is a bad boy");
// }
// greet(name);
// greet(name1);
// greet(name2);
// greet(name3);


let man = "Shivam";
let man1 = "Aditya";
let man2 = "Tushar";
let man3 = "Sourabh";
let greetText = "Good Morning"
function greet( man, greetText="Greeting from Javascript"){
    // let man = "rahul"-->>local not effect on output
    console.log(greetText + " " + man);
    console.log(man  + " is a genius person");
}
greet(man , greetText);
greet(man1 , greetText);
greet(man2 , greetText);
greet(man3);
 

function sum(a , b , c){
    let d  = a + b + c ;
    return d;
    // console.log("Funciton is returned")-->>this will never execute
}
let retrunvalue = sum(1 , 3, 5 );
console.log(retrunvalue);


// output

// This is external js file
// Shivam is a good boy
// Aditya is a good boy
// Tushar is a good boy
// Sourabh is a good boy

// Shivam is a bad boy
// Aditya is a bad boy
// Tushar is a bad boy
// Sourabh is a bad boy

// Good Morning Shivam
// Shivam is a genius person
// Good Morning Aditya
// Aditya is a genius person
// Good Morning Tushar
// Tushar is a genius person
// Greeting from Javascript Sourabh
// Sourabh is a genius person
// 9