const express = require('express');
const path = require('path')

const app = express();
const port = 8080;

app.use('/static', express.static(path.join(__dirname, 'static')))


app.set('view engine', 'pug')

app.get('',(req,res)=>{
    res.render('index-dev');
})

app.listen(8080,()=>{
    console.log(`Application is running on port: ${port}`)
})