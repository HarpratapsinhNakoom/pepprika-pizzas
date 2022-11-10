const mongoose = require("mongoose")

const express = require("express")
const app = express()



const dotenv = require("dotenv")
dotenv.config();

const PORT = process.env.PORT || 5500

mongoose.connect(
    process.env.MONGODB_URL
).then(() => {
    console.log('DB connected')
}).catch((err) => {
    console.log(err);
})

app.listen(PORT, () => {
    console.log("Server listening on PORT - ",PORT);
})