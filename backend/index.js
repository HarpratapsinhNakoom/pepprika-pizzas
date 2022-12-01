const mongoose = require("mongoose")

const express = require("express")
const app = express()
app.use(express.json())

const cors = require('cors');
app.use(cors());

const authRoute = require('./paths/auth')
const productRoute = require('./paths/products')


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

app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);

app.listen(PORT, () => {
    console.log("Server listening on PORT - ",PORT);
})