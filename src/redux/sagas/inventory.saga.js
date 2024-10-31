import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchInventory() {
  try {
    const response = yield call(axios.get, '/api/inventory');
    yield put({ type: 'SET_INVENTORY', payload: response.data });
  } catch (error) {
    console.error('Error fetching inventory', error);
  }
}

function* inventorySaga() {
  yield takeLatest('FETCH_INVENTORY', fetchInventory);
}

export default inventorySaga;
