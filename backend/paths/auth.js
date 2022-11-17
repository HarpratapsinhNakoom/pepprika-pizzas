const router = require('express').Router();
const User = require('../models/User');

const jwt = require("jsonwebtoken");
const cryptojs = require("crypto-js");

router.post('/signup', async(req, res) => {
    const newUser = new User({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        dob : req.body.dob,
        password : CryptoJS.AES.encrypt(
            req.body.password, 
            process.env.PASSWORD_SECRET )
            .toString(),
    })

    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;