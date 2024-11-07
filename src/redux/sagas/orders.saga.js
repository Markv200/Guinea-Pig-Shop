
import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';


function* fetchOrdersSaga() {
    try {
      const response = yield call(axios.get, '/api/admin/orders');
      yield put({ type: 'SET_ORDERS', payload: response.data });
    } catch (error) {
      console.log('Error fetching orders:', error);
    }
  }
  
  // Delete order saga
  function* deleteOrderSaga(action) {
    try {
      yield call(axios.delete, `/api/admin/orders/${action.payload}`);
      yield put({ type: 'FETCH_ORDERS' }); // Refresh orders after deletion
    } catch (error) {
      console.log('Error deleting order:', error);
    }
  }


// Root saga for orders
function* watchOrdersSaga() {
  yield takeLatest('DELETE_ORDER', deleteOrderSaga);
  yield takeLatest('FETCH_ORDERS', fetchOrdersSaga);
}

export default watchOrdersSaga;
