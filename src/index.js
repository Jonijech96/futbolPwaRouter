require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

//midlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//routes
app.use(require('./routes/index'));

//static contents
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000)

console.log('Server Listening...');