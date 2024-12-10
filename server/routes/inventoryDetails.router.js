const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', async (req, res) => { 
  const queryText = 'SELECT * FROM "inventorytype" WHERE id = $1';
  try {
    console.log('Fetching details for ID:', req.params.id); 
    const result = await pool.query(queryText, [req.params.id]);

    if (result.rows.length === 0) {
      return res.status(404).send('Item not found');
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error in GET /details/:id route:', error); 
    res.status(500).send(`Server error: ${error.message}`); 
  }
});

module.exports = router;
