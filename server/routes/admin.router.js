const express = require('express');
const router = express.Router();
const adminOnly = require('../strategies/adminOnly'); // Middleware function
const pool = require('../modules/pool');



router.get('/dashboard', adminOnly, (req, res) => {
  // Return data only accessible by admin
  res.json({ message: 'Welcome Admin' });
});

router.get('/orders', (req, res) => {
    // Fetch orders from the database
    pool.query('SELECT * FROM orders')
      .then(result => res.json(result.rows))
      .catch(error => res.status(500).send(error));
  });
  
  router.get('/inventory', (req, res) => {
    // Fetch inventory from the database
    pool.query('SELECT * FROM inventorytype')
      .then(result => res.json(result.rows))
      .catch(error => res.status(500).send(error));
  });
  

  router.get('/inventory', (req, res) => {
    const queryText = 'SELECT * FROM inventorytype';
    pool.query(queryText)
      .then(result => res.json(result.rows))
      .catch(error => res.status(500).json({ error: 'Failed to fetch inventory' }));
  });
  
  // Add quantity to an item
  router.put('/inventory/:id/add', (req, res) => {
    const queryText = 'UPDATE inventorytype SET quantity = quantity + 1 WHERE id = $1';
    pool.query(queryText, [req.params.id])
      .then(() => res.sendStatus(200))
      .catch(error => res.status(500).json({ error: 'Failed to add quantity' }));
  });
  
  // Remove quantity from an item
  router.put('/inventory/:id/remove', (req, res) => {
    const queryText = 'UPDATE inventorytype SET quantity = GREATEST(0, quantity - 1) WHERE id = $1';
    pool.query(queryText, [req.params.id])
      .then(() => res.sendStatus(200))
      .catch(error => res.status(500).json({ error: 'Failed to remove quantity' }));
  });

module.exports = router;
