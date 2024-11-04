const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', async (req, res) => {
  const { items, paymentType, isCash, isDelivery, address, firstName, lastName, email, phoneNumber } = req.body;

  console.log('Received order data:', req.body);

  try {
    // Insert order details without the user_id column
    const orderQuery = `
      INSERT INTO "orders" ("paymenttype", "iscash", "status", "isdelivery", "address")
      VALUES ($1, $2, 'Pending', $3, $4)
      RETURNING "id";
    `;
    const orderResult = await pool.query(orderQuery, [paymentType, isCash, isDelivery, address]);

    const orderId = orderResult.rows[0]?.id;
    console.log('New order ID:', orderId);

    if (!orderId) {
      throw new Error('Order ID not generated');
    }

    // Insert each item in the order into the order_inventory table
    const itemQueries = items.map(item => {
      console.log('Inserting item:', item);
      return pool.query(
        `INSERT INTO "order_inventory" ("order_id", "item_id", "quantity") VALUES ($1, $2, $3);`,
        [orderId, item.id, item.quantity]
      );
    });
    await Promise.all(itemQueries);

    res.status(201).send({ confirmationNumber: orderId });
  } catch (error) {
    console.error('Error submitting order:', error);
    res.status(500).send('Order submission failed');
  }
});

module.exports = router;
