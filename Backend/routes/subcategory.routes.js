const express = require('express');
const router = express.Router();
const db = require('../db/index');


// Helper function to handle errors
const handleError = (res, err) => {
    console.error(err);  
    res.status(500).json({ error: err.message });
};


// all subcategories
router.get('/', (req, res) => {
    try {
        const subCategories = db.prepare('SELECT * FROM sub_category').all();  // Get all subcategories
        res.json(subCategories);  
    } 
    catch (err) {
        handleError(res, err);  // Use helper function
    }
});


// subcategories based on category ID or cat_id
router.get('/:cat_id', (req, res) => {
    const { cat_id } = req.params;

    // Basic validation 
    if (!cat_id) {
        return res.status(400).json({ error: 'Category ID is required' });
    }

    try {
        const subCategories = db.prepare('SELECT * FROM sub_category WHERE cat_id = ?').all(cat_id);  
        if (subCategories.length === 0) {
            return res.status(404).json({ message: 'No subcategories found for this category' });
        }
        res.json(subCategories);  
    } 
    catch (err) {
        handleError(res, err);  // Use Helper function
    }
});

module.exports = router;