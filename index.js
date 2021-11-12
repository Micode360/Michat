const express = require('express');
const app = express();
const cors = require('cors');
const base = require('./config/base');
const cookieParser = require('cookie-parser');
base();

require('dotenv').config()
//app.use(cors())

app.use(cors({
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    origin: ['http://localhost:3000']
}));

app.use(express.urlencoded({ extended: false }))
app.use(express.json({ extended: false }));
app.use(cookieParser());

//routes
app.use('/auth', require('./routes/auth'));


app.get('/cookie', (req,res) => {

    // res.setHeader('Set-Cookie', 'Tylan=true')
    res.cookie('Mihan', true, {maxAge: 3000, httpOnly: true});
    res.send('Hurray cookie was set.')

    //req.cookie. Gets the cookie

});

app.get('/readcookie', (req,res) => {
    res.send({cookie: req.cookies})
});


if(process.env.NODE_ENV  === 'production') {
    app.use(express.static('client/build'));

    app.get('/', (req, res) => {
        res.sendFile(__dirname, + '/client/build/index.html')
    }
     
    );

}


let port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`listening on port ${port}`)
});