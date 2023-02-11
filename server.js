const express=require('express')
const app=express()
const port=process.env.port || 3000
const ejs= require('ejs')
const path=require('path')
const sass = require('sass');
const staticpath=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../resources/views')

// const expresslayout=require('express-ejs-layouts')
// app.use(expresslayout)
app.use(express.static('public'))
app.set('views',viewpath)

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/cart',(req,res)=>{
    res.render('cart')
})
app.listen(port,()=>{
    console.log(`port ${3000}`)  //backtick
})