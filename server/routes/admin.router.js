const express = require('express');
const router = express.Router();
const adminOnly = require('../strategies/adminOnly'); // Middleware function
const pool = require('../modules/pool');



router.get('/dashboard', adminOnly, (req, res) => {
  // Return data only accessible by admin
  res.json({ message: 'Welcome Admin' });
});


router.get('/orders', (req, res) => {
    const query = `
      SELECT 
        o.id AS order_id, 
        oi.quantity AS amount_sold, 
        o.paymentType AS payment, 
        o.status, 
        o.isDelivery AS delivery, 
        o.address,
        it.type AS guinea_type
      FROM orders o
      JOIN order_inventory oi ON o.id = oi.order_id
      JOIN inventorytype it ON oi.item_id = it.id;
    `;
    
    pool.query(query)
      .then(result => res.json(result.rows))
      .catch(error => {
        console.error('Error fetching orders:', error);
        res.status(500).send(error);
      });
  });
  



// server/routes/admin.router.js

router.delete('/orders/:id', async (req, res) => {
    const orderId = req.params.id;
  
    const deleteOrderInventoryQuery = `
      DELETE FROM order_inventory WHERE order_id = $1;
    `;
    
    const deleteOrderQuery = `
      DELETE FROM orders WHERE id = $1;
    `;
  
    try {
      // Start a transaction
      await pool.query('BEGIN');
  
      // Delete related records in order_inventory
      await pool.query(deleteOrderInventoryQuery, [orderId]);
  
      // Delete the order in orders table
      await pool.query(deleteOrderQuery, [orderId]);
  
      // Commit the transaction
      await pool.query('COMMIT');
  
      res.sendStatus(204); // Successfully deleted
    } catch (error) {
      // Rollback transaction in case of error
      await pool.query('ROLLBACK');
      console.error('Error deleting order:', error);
      res.sendStatus(500);
    }
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
