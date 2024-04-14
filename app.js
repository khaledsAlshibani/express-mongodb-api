const express = require('express');
const app = express();
const PORT = 3000;
const connectDB = require('./db');
const productRoutes = require('./routes/productRoute');

// Middleware to parse json body
app.use(express.json());

// Homepage root route
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Product route
app.use('/products', productRoutes);

// Connect to mongodb
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('Server Listening on PORT:', PORT);
    });
});
