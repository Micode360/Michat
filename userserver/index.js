const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const base = require("./config/base");
const cookieParser = require("cookie-parser");
const AWS = require('aws-sdk');




const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  cosole.log(socket,"New user connected");
  // ...
});

base(); // Instantiating database


require("dotenv").config();

app.use(
  cors({
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    origin: ["http://localhost:3000"],
  })
);



//  AWS Configuration

//Configuring s3 database
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET
});


//passing s3 as middleware
app.use((req , res , next ) => {
  req.s3 = s3;
  next();
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
app.use(cookieParser());

//routes
app.use("/chat/auth", require("./routes/auth"));
app.use("/chat/private", require("./routes/private"));
app.use("/darsh", require("./routes/user"));


app.get("/cookie", (req, res) => {
  // res.setHeader('Set-Cookie', 'Tylan=true')
  res.cookie("Mihan", true, { maxAge: 3000, httpOnly: true });
  res.send("Hurray cookie was set.");

  //req.cookie. Gets the cookie
});

app.get("/readcookie", (req, res) => {
  res.send({ cookie: req.cookies });
});

app.get('/aws',(req,res)=> {
  res.send(`<img src="https://michat.s3.amazonaws.com/d81aa919-9a0f-4700-8f1d-0692072306c2.png"/>`)
})

let port = process.env.PORT || 3000;

//Powering up the server
const server = httpServer.listen(port, () =>
  console.log(`User_Server:${port}`)
);

process.on("unhandledRejection", (error, promise) => {
  console.log(`Process Error: ${error}`);

  server.close(() => process.exit(1));
});
