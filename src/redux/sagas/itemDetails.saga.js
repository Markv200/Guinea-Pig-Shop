import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchItemDetails(action) {
  try {
    console.log('Fetching details for item ID:dsfdfsdfsdfdsf', action.payload); // Debug log

    const response = yield call(axios.get, `/api/inventory/details/${action.payload}`);
    yield put({ type: 'SET_ITEM_DETAILS', payload: response.data });
  } catch (error) {
    console.error('Error fetching item details:', error);
  }
}

function* itemDetailsSaga() {
  yield takeLatest('FETCH_ITEM_DETAILS', fetchItemDetails);
}

export default itemDetailsSaga;
