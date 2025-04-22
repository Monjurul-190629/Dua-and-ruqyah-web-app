const express = require('express');
const router = express.Router();
const db = require('../db/index');


// category

router.get('/', (req, res) => {
    try {
        const categories = db.prepare('SELECT * FROM category').all();
        res.json(categories);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// category with its id


router.get('/:cat_id', (req, res) => {
    const { cat_id } = req.params;

    try {

        const category = db.prepare('SELECT * FROM category WHERE cat_id = ?').get(cat_id);

        // If the category is found, return it; otherwise, return a 404 error
        if (category) {
            res.json(category);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } 
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});





// Now export 

module.exports = router;