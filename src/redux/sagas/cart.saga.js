import { put, takeLatest, call, select } from 'redux-saga/effects';
import axios from 'axios';

// Load cart from backend
function* loadCart() {
  try {
    const response = yield call(axios.get, '/api/cart/load');
    yield put({ type: 'SET_CART', payload: response.data }); // Set cart data in Redux state
  } catch (error) {
    console.error('Error loading cart:', error);
  }
}

function* addToCart(action) {
  try {
    // Select items from Redux state
    const cart = yield select(state => state.cart.items);

    // Transform each item to ensure `item_id` is used consistently
    const updatedCart = cart.map(item => ({
      item_id: item.item_id || item.id, // Use item_id if available; otherwise, use id
      quantity: item.quantity,
    }));

    console.log("Updated cart before sending to backend:", updatedCart);

    // Send standardized cart to backend
    yield call(axios.post, '/api/cart/save', { items: updatedCart });
    yield put({ type: 'LOAD_CART' });
  } catch (error) {
    console.error('Error adding item to cart:', error);
  }
}



// Update item quantity in backend cart
function* updateQuantity(action) {
  const { item_id, quantity } = action.payload;
  try {
    yield call(axios.put, '/api/cart/updateQuantity', { item_id, quantity });
    yield put({ type: 'UPDATE_CART_QUANTITY', payload: action.payload });
  } catch (error) {
    console.error('Error updating cart quantity:', error);
  }
}

// Clear cart in backend and frontend
function* clearCart() {
  try {
    yield call(axios.delete, '/api/cart/clear');
    // yield put({ type: 'CLEAR_CART' });
  } catch (error) {
    console.error('Error clearing cart:', error);
  }
}

function* cartSaga() {
  yield takeLatest('USER_LOGIN_SUCCESS', loadCart);
  yield takeLatest('LOAD_CART', loadCart);
  yield takeLatest('ADD_TO_CART', addToCart); // Listen for ADD_TO_CART action
  yield takeLatest('UPDATE_CART_QUANTITY', updateQuantity);
  yield takeLatest('CLEAR_CART', clearCart);
}

export default cartSaga;


