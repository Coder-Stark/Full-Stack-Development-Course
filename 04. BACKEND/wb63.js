// using wb22.html
// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello World this is shivam kumar');
  res.end(`<!--styling links--> 
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selector & mod design</title>
      <style>
          .container{
              border: 2px solid red;
              background-color: yellow;
              padding: 24px;
              margin: 34px auto;
              width: 666px;
          }
          a{
              text-decoration:dashed;
              color: green;
          }
          a:hover{
              color: blueviolet;
              background-color: aqua;
          }
          a:visited{
              background-color: brown;
          }
          a:acitive{
              background-color: blue;
          }
          .btn{
              font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
              font-weight: bold;
              background-color: red;
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 13px;
              border-radius: 9px;
          }
          .btn:hover{
              color: pink;
              background-color: green;
              border:2px solid black
          }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus iure ratione obcaecati necessitatibus hic earum repudiandae? Enim aspernatur cupiditate, vel reiciendis obcaecati officia odit deleniti laboriosam? Fugiat, ipsum quas libero tenetur placeat nobis.</p>
          <a href="https://google.com" class="btn">Read more</a>
          <button class="btn">countact us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// REPL -->> Read Evaluate Print Loop 
// to opern just write (node) in terminal 
// ( _ ) -->> Previous value
//(tab * 2 )times -->> global variable shown