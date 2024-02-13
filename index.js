

// ES
import  express from 'express'
import path from 'path' 
// const express = require('express')   ----command js
// create express app
const app = express()
// router middleware to be more specific
const router = express.Router()
app.use(
    router,
    express.static('./static')
    )   
const port = +process.env.PORT || 4000
// Router -- where you going , app get from which is the /
router.get('^/$|/express',display, (req, res)=>{
res.status(200).sendFile(path.resolve('./static/html/index.html'))
})
router.get('/about',(req, res)=>{
    res.json({

    })
})
//Middleware
function display(req,res,next){
    console.log("Hello Papi");
    next()
}



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