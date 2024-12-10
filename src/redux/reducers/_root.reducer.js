import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import inventory from './inventory.reducer';
import selectedItem from './selectedItem.reducer';
import cartReducer from './cart.reducer';
import ordersReducer from './orders.reducer';


const rootReducer = combineReducers({
  errors, 
  user, 
  inventory,
  selectedItem,
  cart: cartReducer,
  orders: ordersReducer,


});

export default rootReducer;
