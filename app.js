
const express = require('express')
const user = require('./user')
const app = express()

// Middleware
const myMiddleware = (req,res, next)=>{
    console.log(Date.now())
    next()
}

// App use
// app.use(myMiddleware)
app.use(express.json())
app.use(user)


// Route
app.get('/', (req, res)=>{
    res.send('Hello World')
    console.log('Hello world')
})



app.listen(3001, console.log('Server is on in port 3001') )