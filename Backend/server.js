const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;


// main middleware

app.use(express.json());

app.use(cors());





// Default route to check the server is running or not

app.get('/', (req, res) => {
    res.send('server is running');
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`)
})