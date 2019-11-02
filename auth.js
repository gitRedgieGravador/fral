const express = require('express')
const jwt = require('jsonwebtoken')

const app = express();

app.post("/login", function(req,res){
    var user = {
        id: 1,
        username: "admin",
        password: "admin"
    }
    jwt.sign({user: user}, 'authRequire', (err, token)=>{
        res.json({
            token: token
        })
    })
})

var port = 5000
app.listen(port, function () {
    console.log("Server listening to: " + port)
})