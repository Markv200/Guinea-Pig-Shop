import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import inventorySaga from './inventory.saga'; 
import itemDetailsSaga from './itemDetails.saga';
import cartSaga from './cart.saga';
import orderSaga from './order.saga'; 
import watchOrdersSaga from './orders.saga';




export default function* rootSaga() {
  yield all([
    loginSaga(), 
    registrationSaga(),
    userSaga(),
    inventorySaga(),     
    itemDetailsSaga(),
    cartSaga(),      
    orderSaga(),
    watchOrdersSaga(),


  ]);
}
