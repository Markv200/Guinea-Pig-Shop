import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrderStatus } from '../../redux/cart.actions';
import './Orders.css';

function OrdersPage() {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.orders); 

  useEffect(() => {
    dispatch({ type: 'FETCH_ORDERS' }); 
  }, [dispatch]);

  const handleDeleteOrder = (orderId) => {
    dispatch({ type: 'DELETE_ORDER', payload: orderId });
  };

  const handleCompleteOrder = (orderId) => {
    dispatch(updateOrderStatus(orderId));
  };

  return (
    <div className="orders-page">
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Amount Sold</th>
            <th>Guinea Pig Type</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Delivery</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <tr 
                key={`${order.order_id}-${index}`} 
                className={order.status === 'Completed' ? 'completed-order' : ''}
              >
                <td>{order.order_id}</td>
                <td>{order.amount_sold}</td>
                <td>{order.guinea_type}</td>
                <td>{order.payment}</td>
                <td>
                  {order.status === 'Pending' ? (
                    <>
                      <span>Pending</span>
                      <button 
                        className="complete-button" 
                        onClick={() => handleCompleteOrder(order.order_id)}
                      >
                        Complete
                      </button>
                    </>
                  ) : (
                    <span>Completed</span>
                  )}
                </td>
                <td>{order.delivery ? 'Yes' : 'No'}</td>
                <td>{order.address}</td>
                <td>
                  {order.status === 'Pending' && (
                    <button 
                      className="cancel-button" 
                      onClick={() => handleDeleteOrder(order.order_id)}
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No orders found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage;
