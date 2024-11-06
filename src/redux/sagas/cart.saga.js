// import { put, takeLatest, call, select } from 'redux-saga/effects';
// import axios from 'axios';

// // Load cart from backend
// function* loadCart() {
//   try {
//     const response = yield call(axios.get, '/api/cart/load');
//     yield put({ type: 'SET_CART', payload: response.data });
//   } catch (error) {
//     console.error('Error loading cart:', error);
//   }
// }

// // Add item to cart and save to backend

// function* addToCart(action) {
//   try {
//     // Select current cart items from Redux state
//     const cart = yield select(state => state.cart.items);
//     // Add the new item to the current cart structure
//     const updatedCart = [...cart, { itemId: action.payload.itemId, quantity: action.payload.quantity }];

//     // Send updated cart to backend
//     yield call(axios.post, '/api/cart/save', { items: updatedCart });
//     yield put({ type: 'LOAD_CART' }); // Reload cart from backend after update
//   } catch (error) {
//     console.error('Error adding item to cart:', error);
//   }
// }


// // Update item quantity in backend cart
// function* updateQuantity(action) {
//   const { itemId, quantity } = action.payload;
//   try {
//     yield call(axios.put, '/api/cart/updateQuantity', { itemId, quantity });
//     yield put({ type: 'UPDATE_CART_QUANTITY', payload: action.payload });
//   } catch (error) {
//     console.error('Error updating cart quantity:', error);
//   }
// }

// // Clear cart in backend and frontend
// function* clearCart() {
//   try {
//     yield call(axios.delete, '/api/cart/clear');
//     yield put({ type: 'CLEAR_CART' });
//   } catch (error) {
//     console.error('Error clearing cart:', error);
//   }
// }

// function* cartSaga() {
//   yield takeLatest('USER_LOGIN_SUCCESS', loadCart);
//   yield takeLatest('ADD_TO_CART', addToCart); // Listen for ADD_TO_CART action
//   yield takeLatest('UPDATE_CART_QUANTITY', updateQuantity);
//   yield takeLatest('CLEAR_CART', clearCart);
// }

// export default cartSaga;
