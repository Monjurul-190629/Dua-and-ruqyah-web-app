const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importing the db to check

const db = require('./db/index')

// Importing routes

const categoryRoutes = require('./routes/category.routes');
const subcategoryRoutes = require('./routes/subcategory.routes');
const duaRoutes = require('./routes/dua.routes')


const app = express();
const port = process.env.PORT || 5000;


// main middleware

app.use(express.json());

app.use(cors());


// routes

app.use('/categories', categoryRoutes);
app.use('/subcategories', subcategoryRoutes);
app.use('/duas', duaRoutes);


// Default route to check the server is running or not

app.get('/', (req, res) => {
    res.send('server is running');
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`)
})    

