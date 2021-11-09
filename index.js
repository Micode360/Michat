const express = require('express');
const app = express();
const cors = require('cors');
const base = require('./config/base');
base();

require('dotenv').config()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ extended: false }));

//routes
app.use('/auth', require('./routes/auth'));


let port = process.env.PORT || 3000;


app.post('/signup',(req,res)=>{ 
    console.log(req.body)
})


app.listen(port, () =>{
    console.log(`listening on port ${port}`)
});