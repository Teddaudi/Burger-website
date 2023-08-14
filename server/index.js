require('dotenv').config();
// require('express-async-errors');
const express = require('express');
const mongoose = require('mongoose')
const products = require('./data')
const Dishes = require('./models/dishes');
const { ObjectId } = require('mongodb');
const MONGO_URL = process.env.MONGO_URL;
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());


app.get('/', (req, res) => {
    res.send('<h1>Burger Website</h1>');
})
app.get('/menu', async (req, res) => {
    try {
        const dishes = await Dishes.find();
        
        res.json(dishes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

const port = 4000;

const start = async () => {
    try {
        //connectDB
        await mongoose.connect(MONGO_URL);
        const meals = products.map(product => ({
            title: product.title,
            price: product.price,
            image: product.image
        }));
        await Dishes.create(meals)
        app.listen(port, console.log(`Server is listening on ${port}...`));
    } catch (error) {
        console.error(error)
    }
}

start();