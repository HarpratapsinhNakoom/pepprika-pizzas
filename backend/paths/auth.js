const router = require('express').Router();
const User = require('../models/User');

const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

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

router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({
            email : req.body.email
        });

        !user && res.status(401).json("Wrong credentials no such email");

        const ogPassword = CryptoJS.AES.decrypt(
                                            user.password,
                                            process.env.PASSWORD_SECRET)
                                            .toString(CryptoJS.enc.Utf8);
        
        // console.log(ogPassword);
        ogPassword !== req.body.password && res.status(401).json("Wrong credentials");
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin : user.isAdmin,
        }, process.env.JWT_SECRET_KEY,
        {expiresIn : "3d"}
        );


        const {password, ...otherInfo} = user._doc;
        res.status(200).json({...otherInfo, accessToken});

    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
})

module.exports = router;