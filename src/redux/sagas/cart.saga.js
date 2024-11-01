// import { call, put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';

// // Fetch cart items from backend on user login
// function* fetchCart() {
//   try {
//     const response = yield call(axios.get, '/api/cart');
//     yield put({ type: 'SET_CART', payload: response.data });
//   } catch (error) {
//     console.error('Error fetching cart', error);
//   }
// }

// // Add or update an item in the cart
// function* addToCart(action) {
//   try {
//     yield call(axios.post, '/api/cart', action.payload);
//     yield put({ type: 'FETCH_CART' }); // Refresh cart after update
//   } catch (error) {
//     console.error('Error adding item to cart', error);
//   }
// }

// // Remove an item from the cart
// function* removeFromCart(action) {
//   try {
//     yield call(axios.delete, `/api/cart/${action.payload}`);
//     yield put({ type: 'FETCH_CART' }); // Refresh cart after delete
//   } catch (error) {
//     console.error('Error removing item from cart', error);
//   }
// }

// function* cartSaga() {
//   yield takeLatest('FETCH_CART', fetchCart);
//   yield takeLatest('ADD_TO_CART', addToCart);
//   yield takeLatest('REMOVE_FROM_CART', removeFromCart);
// }

// export default cartSaga;
