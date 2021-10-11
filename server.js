const express = require('express')
const app= express()
const port= 4000
app.set('view engine','html')
app.use(express.static('home page'))
app.get('/',(req,res)=> {res.render('signlog.html');})
// app.get('/',(req,res)=> {res.render('index.html')}
app.listen(port,()=>{console.log(`server running ${port}`);})
