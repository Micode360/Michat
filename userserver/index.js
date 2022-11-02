const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const base = require("./config/base");
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary");
const socket = require("./utils/socket");



const app = express();
const httpServer = createServer(app);
const io = socket.ioSetUp(httpServer);
socket.connection(io);

base(); // Instantiating database


require("dotenv").config();

app.use(
  cors({
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    origin: ["http://localhost:3000"],
  })
);


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
app.use(cookieParser());
const socketIoMiddleware = (req, res, next) => {
  req.io = io;
  next();
}

//routes
app.use("/chat/auth", require("./routes/auth"));
app.use("/chat/private", require("./routes/private"));
app.use("/darsh", require("./routes/user"));
app.use("/api/v1/hello", socketIoMiddleware, (req, res) => {
  req.io.emit("message", `Hello ${req.originalUrl}`);
  res.send("from socket Api")
});


app.get("/cookie", (req, res) => {
  // res.setHeader('Set-Cookie', 'Tylan=true')
  res.cookie("Mihan", true, { maxAge: 3000, httpOnly: true });
  res.send("Hurray cookie was set.");

  //req.cookie. Gets the cookie
});

app.get("/readcookie", (req, res) => {
  res.send({ cookie: req.cookies });
});


let port = process.env.PORT || 3000;

//Powering up the server
const server = httpServer.listen(port, () =>
  console.log(`User_Server:${port}`)
);

process.on("unhandledRejection", (error, promise) => {
  console.log(`Process Error: ${error}`);

  server.close(() => process.exit(1));
});


