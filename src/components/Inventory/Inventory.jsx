// src/components/Inventory/InventoryPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Inventory.css';

function InventoryPage() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    // Fetch inventory data from the backend
    axios.get('/api/admin/inventory')
      .then(response => setInventory(response.data))
      .catch(error => console.error('Error fetching inventory:', error));
  }, []);

  // Function to handle adding quantity
  const handleAdd = (itemId) => {
    axios.put(`/api/admin/inventory/${itemId}/add`)
      .then(() => {
        setInventory(inventory.map(item => 
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        ));
      })
      .catch(error => console.error('Error adding inventory item:', error));
  };

  // Function to handle removing quantity
  const handleRemove = (itemId) => {
    axios.put(`/api/admin/inventory/${itemId}/remove`)
      .then(() => {
        setInventory(inventory.map(item => 
          item.id === itemId && item.quantity > 0 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        ));
      })
      .catch(error => console.error('Error removing inventory item:', error));
  };

  // Function to handle editing item details (redirect to edit page or open modal)
  const handleEdit = (itemId) => {
    // Redirect to edit page or open a modal with item details
    console.log(`Editing item with ID: ${itemId}`);
  };

  return (
    <div className="inventory-page">
      <h1>Inventory</h1>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Quantity</th>
            <th>Add</th>
            <th>Remove</th>
            <th>Description</th>
            <th>Price</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.quantity}</td>
              <td><button onClick={() => handleAdd(item.id)}>Add</button></td>
              <td><button onClick={() => handleRemove(item.id)}>-1</button></td>
              <td>{item.description}</td>
              <td>${item.price.toFixed(2)}</td>
              <td><button onClick={() => handleEdit(item.id)}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryPage;
