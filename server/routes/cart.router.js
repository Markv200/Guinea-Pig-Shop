// const express = require('express');
// const router = express.Router();
// const pool = require('../modules/pool');

// // Save or update the cart for the authenticated user
// router.post('/save', async (req, res) => {
//   const userId = req.user?.id;
//   const { items } = req.body;

//   if (!userId) return res.status(401).send('User not authenticated');

//   try {
//     // Clear existing cart items for the user
//     await pool.query('DELETE FROM user_cart WHERE user_id = $1', [userId]);

//     // Insert each item in the cart into the user_cart table
//     const cartPromises = items.map(item => {
//       return pool.query(
//         `INSERT INTO user_cart (user_id, item_id, quantity) VALUES ($1, $2, $3)`,
//         [userId, item.id, item.quantity]
//       );
//     });
//     await Promise.all(cartPromises);

//     res.sendStatus(200);
//   } catch (error) {
//     console.error('Error saving cart:', error);
//     res.status(500).send('Failed to save cart');
//   }
// });

// // Load the cart for the authenticated user
// router.get('/load', async (req, res) => {
//   const userId = req.user?.id;

//   if (!userId) return res.status(401).send('User not authenticated');

//   try {
//     const result = await pool.query(
//       `SELECT item_id AS id, quantity FROM user_cart WHERE user_id = $1`,
//       [userId]
//     );
//     const items = result.rows;
//     const itemCount = items.reduce((total, item) => total + item.quantity, 0);
//     const subtotal = await calculateSubtotal(items);

//     res.json({ items, itemCount, subtotal });
//   } catch (error) {
//     console.error('Error loading cart:', error);
//     res.status(500).send('Failed to load cart');
//   }
// });

// // Helper function to calculate subtotal based on item prices
// async function calculateSubtotal(items) {
//   let subtotal = 0;
//   for (const item of items) {
//     const result = await pool.query(`SELECT price FROM inventorytype WHERE id = $1`, [item.id]);
//     subtotal += result.rows[0].price * item.quantity;
//   }
//   return subtotal;
// }

// // Update item quantity in the user's cart
// router.put('/updateQuantity', async (req, res) => {
//   const userId = req.user?.id;
//   const { item_id, quantity } = req.body;

//   if (!userId) return res.status(401).send('User not authenticated');

//   try {
//     await pool.query(
//       'UPDATE user_cart SET quantity = $1 WHERE user_id = $2 AND item_id = $3',
//       [quantity, userId, item_id]
//     );
//     res.sendStatus(200);
//   } catch (error) {
//     console.error('Error updating cart quantity:', error);
//     res.status(500).send('Failed to update cart quantity');
//   }
// });

// // Clear the user's cart
// router.delete('/clear', async (req, res) => {
//   const userId = req.user?.id;

//   if (!userId) return res.status(401).send('User not authenticated');

//   try {
//     await pool.query('DELETE FROM user_cart WHERE user_id = $1', [userId]);
//     res.sendStatus(200);
//   } catch (error) {
//     console.error('Error clearing cart:', error);
//     res.status(500).send('Failed to clear cart');
//   }
// });

// module.exports = router;
