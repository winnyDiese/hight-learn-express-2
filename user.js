
const express = require('express')
const router = express.Router()

// router.get('/users', (req, res)=>{
//     console.log("Login user")
//     res.send("Login user")
// })

router.post('/users', (req, res)=>{
    console.log(req.body)
    res.send("I'm new here !")
})

module.exports = router