import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* submitOrder(action) {
  try {
    const response = yield call(axios.post, '/api/order', action.payload);

    // Trigger the callback function with the confirmation number if provided
    const confirmationNumber = response.data.confirmationNumber;
    if (action.callback) {
      action.callback(confirmationNumber);
    }

    yield put({ type: 'ORDER_SUBMIT_SUCCESS', payload: response.data });
    yield put({ type: 'CLEAR_CART' }); // Clear the cart after successful order submission
  } catch (error) {
    console.error('Order submission failed:', error);
    yield put({ type: 'ORDER_SUBMIT_FAILED', payload: error });
  }
}

function* orderSaga() {
  yield takeLatest('SUBMIT_ORDER', submitOrder);
}

export default orderSaga;
