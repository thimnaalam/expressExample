

// ES
import  express from 'express' 
// const express = require('express')   ----command js
// create express app

const app = express()
const port = +process.env.PORT || 4000
// Router -- where you going , app get from which is the /
app.get('/', (req, res)=>{
res.json({
    status: res.statusCode,
    message: 'Home'
})
})
app.get('/about', (req, res)=>{
    res.json({
        status: res.statusCode,
        message: 'about'
    })
    })
    app.get('*', (req, res)=>{
        res.json({
            status: res.statusCode,
            message: 'error 404'
        })
        })

app.listen(port)