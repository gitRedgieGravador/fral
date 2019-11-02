"use strict";
const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())
app.use(router)
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use(allowCrossDomain)

var loan = [{
    id: "FL2021",
    borrower: "Redgie Gravador",
    disb_date: "10/23/2019",
    prin_amount: 10000,
    prin_interest: 100,
    detail: [{
        eminum: 1,
        date: "10-19-2019",
        amount: 1000,
        penalty: 0,
        tpayable: 1000
    },
    {
        eminum: 2,
        date: "10-19-2019",
        amount: 1400,
        penalty: 0,
        tpayable: 1400
    },
    {
        eminum: 3,
        date: "10-19-2019",
        amount: 160,
        penalty: 0,
        tpayable: 1600
    },
    {
        eminum: 4,
        date: "10-19-2019",
        amount: 1100,
        penalty: 0,
        tpayable: 1100
    },
    {
        eminum: 5,
        date: "10-19-2019",
        amount: 6000,
        penalty: 0,
        tpayable: 6000
    },
    {
        eminum: 6,
        date: "10-19-2019",
        amount: 100,
        penalty: 0,
        tpayable: 100
    },
    {
        eminum: 7,
        date: "10-19-2019",
        amount: 9000,
        penalty: 0,
        tpayable: 9000
    },
    {
        eminum: 8,
        date: "10-19-2019",
        amount: 600,
        penalty: 0,
        tpayable: 600
    }

    ]
}]
app.post('/getloan', function (req, res) {
    req.on('data', function (data) {
        var getid = data
        console.log(getid)
        loan.forEach(item => {
            if (item.id == getid) {
                res.send(item)
                console.log(item)
                return
            }
        })
    })

    //res.send(loan)
})

router.post('/login', (req, res) => {

    let token = jwt.sign({ id: 21231 }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token, user: {admin: "admin"} });

})

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))