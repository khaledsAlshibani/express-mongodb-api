require('dotenv').config();
const express = require('express')
const app = express()
const PORT = 3000;
const mongoose = require('mongoose')

app.get('/', (req, res) => {
    res.send('Hello world!')
})

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(PORT, () => {
            console.log("Server Listening on PORT:", PORT);
        });
    })
    .catch(e => console.error('Error connecting to MongoDB:', e));