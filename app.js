const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require("method-override");
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('Listening on Port 3000');
})