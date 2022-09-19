const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");


require("dotenv").config();

app.use(
  cors({
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    origin: ["http://localhost:3000"],
  })
);

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


if (process.env.NODE_ENV === "production") {
app.use(express.static("../client/build"));
  app.get("/*", (req, res) =>
    res.sendFile(path.resolve(__dirname + "/client/build/index.html"))
  );
}


let port = process.env.PORT || 3000;

//Powering up the server
const server = app.listen(port, () =>
  console.log(`Main_Server:${port}`)
);

process.on("unhandledRejection", (error, promise) => {
  console.log(`Process Error: ${error}`);

  server.close(() => process.exit(1));
});
