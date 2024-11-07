// redux/cart.actions.js

export const addToCart = (item_id, quantity, type, price, image_path) => ({
    type: 'ADD_TO_CART',
    payload: { item_id, quantity, type, price, image_path },
  });
  
  export const updateCartQuantity = (item_id, quantity) => ({
    type: 'UPDATE_CART_QUANTITY',
    payload: { item_id, quantity },
  });
  
  export const clearCart = () => ({ type: 'CLEAR_CART' });
  
  export const setCart = (items, itemCount, subtotal) => ({
    type: 'SET_CART',
    payload: { items, itemCount, subtotal },
  });
  

  // export const loadCart = () => ({ type: 'LOAD_CART' });
  export const updateOrderStatus = (orderId) => ({
    type: 'UPDATE_ORDER_STATUS',
    payload: orderId,
  });
  