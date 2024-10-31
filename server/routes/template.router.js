const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET route to fetch inventory items
router.get('/', async (req, res) => {
  try {
    const queryText = 'SELECT * FROM "inventorytype";';
    const result = await pool.query(queryText);
    res.json(result.rows);
  } catch (error) {
    console.error('Error in GET inventory:', error);
    res.status(500).send('Server error');
  }
});

// POST route to add a new inventory item
// router.post('/', async (req, res) => {
//   const { price, type, description, quantity, image_path } = req.body;
//   const queryText = `
//     INSERT INTO "inventorytype" ("price", "type", "description", "quantity", "image_path")
//     VALUES ($1, $2, $3, $4, $5);
//   `;
//   try {
//     await pool.query(queryText, [price, type, description, quantity, image_path]);
//     res.status(201).send('Inventory item added');
//   } catch (error) {
//     console.error('Error in POST inventory:', error);
//     res.status(500).send('Server error');
//   }
// });

module.exports = router;
