// const http = require("http"); // importing http from http package
// const server = http.createServer((req, res) => {
//   res.end("<p>saroj</p>"); //response from the request
//   console.log(req.url); // this console to be shown on terminal , check it out
// });

// server.listen(8000, "127.0.0.1", () => {
//   // in to the url (port and location)
//   console.log("server was started");
// });

// const http = require("http"); // im,porting http from http package
// const server = http.createServer((req, res) => {
//   if (req.url === "/abc") {
//     //conditionally routing(dynamic routing) to the requested thing
//     res.end("<p>your requested data </p>");
//   } else {
//     res.end("<p>Not Valid </p>");
//   }

//   console.log(req.url); // this console to be shown on terminal , check it out
// });

// server.listen(8000, "127.0.0.1", () => {
//   // in to the url (port and location)
//   console.log("server was started");
// });

// // @2
// const express = require("express"); //This line imports the Express.js library, which provides tools to create web servers and handle HTTP requests and responses.

// const app = express(); //This instance, stored in app, is used to configure the server, define routes, and handle requests.

// app.get("/", (req, res) => {
//   res.status(200).send("Hello world");
// });
// app.get("/bmw", (req, res) => {
//   res.status(200).send("Hello bmw");
// });
// app.get("/abc", (req, res) => {
//   res.status(200).send("Hello abc");
// });
// app.get("/tesla", (req, res) => {
//   res.status(200).send("Hello tesla");
// });

// app.listen(8000, () => {
//   console.log("server started");
// });
// ------------------------------------------------------------------------------------------------------------
// @3
// const express = require("express"); //imports the Express.js framework to handle HTTP requests and responses.
// const fs = require("fs"); //Imports the File System module to perform file operations like reading or writing files.

// const app = express();

// app.get("/read", (req, res) => {
//   fs.readFile("./saroja.txt", "utf8", (err, data) => {
//     //plain dtat read ko lagi utf8

//     if (err) {
//       res.send("cannot read file");
//     } else {
//       res.send(data);
//     }
//   });
// });

// app.listen(8000, () => {
//   console.log("server started ");
// });

// -------------------------------------------------------------------------------------------------------------------

// @4

// const express = require("express"); //imports the Express.js framework to handle HTTP requests and responses.
// const fs = require("fs"); //Imports the File System module to perform file operations like reading or writing files.

// const app = express();
// const writing = "Mango";
// app.get("/write", (req, res) => {
//   fs.writeFile("./saroj.txt", writing, (err) => {
//     // requires parameters  {file location, writing data and err}
//     //plain dtat read ko lagi utf8

//     if (err) {
//       res.send("cannot write file");
//     } else {
//       res.send("successful");
//     }
//   });
// });

// app.listen(8000, () => {
//   console.log("server started ");
// });
// -------------------------------------------------------------------------------------------------------------
// @5
const express = require("express");
const dotenv = require("dotenv").config(); // node can access the .env file now
const mongoose = require("mongoose");
const IndexHandler = require("./Controllers/indexHandler");
const ReadHandler = require("./Controllers/ReadHandler");
const Createhandler = require("./Controllers/Createhandler");
const Updatehandler = require("./Controllers/Updatehandler");
const DeleteHandler = require("./Controllers/DeleteHandler");
require("./models/MovieModal"); // goes the the moviemodal file and runs the code where one of them creates the modal/collection /import model
const app = express();
// console.log(process.env.mongo_connect);

app.use(express.json()); //middleware for body , body meaning the date we sent in payload in postman

const MongoConn = process.env.mongo_connect; //whole application ko PROCESS ko ENV file ma vako KEY access done
mongoose
  .connect(MongoConn, {})
  .then(() => {
    console.log("conn success mongoose");
  })
  .catch((err) => {
    console.log("conn faile mongoose");
  }); // we are using the altyernative of Promise(async,await) here which is then and catch , cause this is not wrapped with a function where we can use async , as a result we cannot use the await as well

app.get("/", IndexHandler); // indexhandler imported
app.get("/data", ReadHandler);
app.post("/data", Createhandler);
app.patch("/data", Updatehandler);
app.delete("/data", DeleteHandler);

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "success",
//   });
// });

app.listen(8000, () => {
  console.log("serverstarted");
});
