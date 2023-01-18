// SERVING HTML FILES 

const fs = require("fs");

const http = require('http');
const filecontent = fs.readFileSync('wb62.html');

const server = http.createServer((req , res) =>{
    res.writeHead(200 , {'content-type':'text/html'});
    res.end(filecontent);
});

server.listen(80 , '127.0.0.1' ,()=>{
    console.log("Listening on port 80");
});

// output
// Listening on port 80
//When we type (127.0.0.1) on browser wb62.html file shows