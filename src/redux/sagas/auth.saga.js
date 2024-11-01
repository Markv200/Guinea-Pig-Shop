// import { call, put } from 'redux-saga/effects';
// import axios from 'axios';

// function* loginUser(action) {
//   try {
//     // Send login request to backend with user credentials
//     const response = yield call(axios.post, '/api/user/login', action.payload);

//     // Store user information in Redux state
//     yield put({ type: 'SET_USER', payload: response.data });

//     // Fetch the user's cart items after successful login
//     yield put({ type: 'FETCH_CART' });
//   } catch (error) {
//     console.error('Error logging in', error);

//     // Handle login error (e.g., display an error message)
//     yield put({ type: 'LOGIN_FAILED', payload: error.message });
//   }
// }

// export default loginUser;
