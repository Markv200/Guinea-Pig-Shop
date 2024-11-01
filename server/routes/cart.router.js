// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();

// // Get the user's cart from the database
// router.get('/', (req, res) => {
//   if (!req.user) {
//     return res.status(401).send('Unauthorized');
//   }

//   const queryText = `SELECT * FROM cart WHERE user_id = $1`;
//   pool
//     .query(queryText, [req.user.id])
//     .then((result) => res.json(result.rows))
//     .catch((error) => {
//       console.error('Error retrieving cart:', error);
//       res.sendStatus(500);
//     });
// });

// // Add or update an item in the cart
// router.post('/', (req, res) => {
//   if (!req.user) {
//     return res.status(401).send('Unauthorized');
//   }

//   const { id, name, price, quantity, image } = req.body;
//   const queryText = `
//     INSERT INTO cart (user_id, item_id, name, price, quantity, image)
//     VALUES ($1, $2, $3, $4, $5, $6)
//     ON CONFLICT (user_id, item_id)
//     DO UPDATE SET quantity = cart.quantity + $5;
//   `;

//   pool
//     .query(queryText, [req.user.id, id, name, price, quantity, image])
//     .then(() => res.sendStatus(201))
//     .catch((error) => {
//       console.error('Error adding/updating item in cart:', error);
//       res.sendStatus(500);
//     });
// });

// // Delete an item from the cart
// router.delete('/:id', (req, res) => {
//   if (!req.user) {
//     return res.status(401).send('Unauthorized');
//   }

//   const queryText = `DELETE FROM cart WHERE user_id = $1 AND item_id = $2`;
//   pool
//     .query(queryText, [req.user.id, req.params.id])
//     .then(() => res.sendStatus(204))
//     .catch((error) => {
//       console.error('Error deleting item from cart:', error);
//       res.sendStatus(500);
//     });
// });

// module.exports = router;
