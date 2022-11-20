const router = require('express').Router();
const CryptoJS = require('crypto-js');
const User = require('../models/User');
const { verifyToken, 
    verifyTokenAndAuthorization,
    verifyTokenAndIsAdmin } = require("./verifyToken")
//before proccedding with the CRUD operation we need to check jwt.
//So we call a middleware function to verify the token

//---------UPDATING USER-----------
router.put("/update_user/:id",verifyTokenAndAuthorization, async (req,res) => {
    //if the user has changes the password we need to handle
    //it as we will be storing the hashed password
    if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password, 
            process.env.PASSWORD_SECRET )
            .toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true})

        res.status(200).json(updatedUser);
    }catch(err) {
        res.status(500).json(err);
    }
});

//-------------DELETING USER--------------
router.delete("/delete_user/:id", verifyTokenAndAuthorization, async (req,res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("DELETED USER");
    }catch(err) {
        res.status(500).json(err)
    }
})