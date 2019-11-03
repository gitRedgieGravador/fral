const express = require('express');
const router = new express.Router()
const User = require('../model/user')
const { ObjectID } = require('mongodb')
const authenticate = require('../auth/auth')

router.post('/users', async (req, res) => {
    console.log("entered")
    const user = new User(req.body);
    try {
        const token = await user.newAuthToken()//auth and return token
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.checkValidCredentials(req.body.email, req.body.password)
        const token = await user.newAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send()
    }
})

router.get('/users/me', authenticate, async (req, res) => {
    res.send(req.user)
})

router.post("/try", authenticate, async(req, res)=>{
    console.log("enert")
    res.send("hello")
})
module.exports = router