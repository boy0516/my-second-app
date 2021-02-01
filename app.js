const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// http://127.0.0.1:3000/
app.get('/', (req, res) => res.send('Hello, Nodejs!'))
app.get('/welcome',(req, res)=>res.send('Hi,ther.welcome to the nodejs'))
app.listen(port, () => console.log('Example app listen on port 3000'))