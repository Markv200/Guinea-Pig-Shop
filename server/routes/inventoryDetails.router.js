const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET route to fetch details of a specific inventory item by ID
router.get('/:id', async (req, res) => { // We use only '/:id' here since it will be mounted under '/api/inventory/details'
  const queryText = 'SELECT * FROM "inventorytype" WHERE id = $1';
  try {
    console.log('Fetching details for ID:', req.params.id); // Debugging log
    const result = await pool.query(queryText, [req.params.id]);

    if (result.rows.length === 0) {
      return res.status(404).send('Item not found');
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error in GET /details/:id route:', error); // More specific logging
    res.status(500).send(`Server error: ${error.message}`); // Send specific error message to client
  }
});

module.exports = router;
