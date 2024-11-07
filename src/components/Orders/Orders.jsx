import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.log('Error fetching orders:', error));
  }, []);

  return (
    <div className="orders-page">
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Info</th>
            <th>Amount Sold</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Delivery</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.name}</td>
              <td>{order.contact}</td>
              <td>{order.amount_sold}</td>
              <td>{order.payment}</td>
              <td>{order.status}</td>
              <td>{order.delivery}</td>
              <td><button>Cancel</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage;
