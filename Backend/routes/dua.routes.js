const express = require('express');
const router = express.Router();
const db = require('../db/index');


// All duas

router.get('/', (req, res) => {
    try {
        const categories = db.prepare('SELECT * FROM dua').all();
        res.json(categories);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});



// duas based on subcat_id

router.get('/:subcat_id', (req, res) => {

    const { subcat_id } = req.params;

    // validation 
    if (!subcat_id) {
        return res.status(400).json({ error: 'Subcategory ID is required' });
    }

    try {
        const duas = db.prepare('SELECT * FROM dua WHERE subcat_id = ?').all(subcat_id);

        if (duas.length === 0) {
            return res.status(404).json({ message: 'No duas found for this subcategory' });
        }

        res.json(duas);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});



// Export

module.exports = router;