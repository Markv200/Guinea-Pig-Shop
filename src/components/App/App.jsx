import React, { useEffect } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Home from '../HomePage/HomePage';
import Shop from '../ShopPage/Shoppage';
import Description from '../Description/Description';
import CartPage from '../Cart/Cart';
import CheckoutPage from '../Checkout/Checkout';
import ThankYou from '../Thankyou/Thankyou';
import AdminPage from '../AdminPage'; 

import OrdersPage from '../Orders/Orders';
import InventoryPage from '../Inventory/Inventory'

import './App.css';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    // Fetch user data on app load
    dispatch({ type: 'FETCH_USER' });
  
    // Load cart data on app load (use backend if user is authenticated)
    if (user.id) {
      dispatch({ type: 'LOAD_CART' });
    } else {
      // For guests, load cart from localStorage if available
      const savedCart = JSON.parse(localStorage.getItem('cart'));
      if (savedCart) {
        dispatch({ type: 'SET_CART', payload: { items: savedCart, itemCount: savedCart.length } });
      }
    }
  }, [dispatch, user.id]);

  return (
    <Router>
      <div className="main-content">
        <Nav />
        <Switch>
          {/* Redirect root "/" to "/home" */}
          <Redirect exact from="/" to="/home" />

          {/* Public Route: Home Page */}
          <Route exact path="/home">
            <Home />
          </Route>

          {/* Public Route: Shop Page */}
          <Route exact path="/shop">
            <Shop />
          </Route>

          {/* Public Route: Description Page */}
          <Route exact path="/description/:id">
            <Description />
          </Route>

          {/* Public Route: About Page */}
          <Route exact path="/about">
            <AboutPage />
          </Route>

          {/* Public Route: Cart Page */}
          <Route exact path="/cart">
            <CartPage />
          </Route>

          {/* Public Route: Checkout Page */}
          <Route exact path="/checkout">
            <CheckoutPage />
          </Route>

          {/* Public Route: Thank You Page */}
          <Route exact path="/thankyou">
            <ThankYou />
          </Route>

          {/* Protected Route: User Page */}
          <ProtectedRoute exact path="/user">
            <UserPage />
          </ProtectedRoute>

          {/* Protected Route: Info Page */}
          <ProtectedRoute exact path="/info">
            <InfoPage />
          </ProtectedRoute>

          {/* Admin-Only Protected Route: Admin Page */}
          <ProtectedRoute exact path="/admin" component={AdminPage} adminOnly={true} />
          <ProtectedRoute exact path="/admin/orders" component={OrdersPage} adminOnly={true} />
          <ProtectedRoute exact path="/admin/inventory" component={InventoryPage} adminOnly={true} />


          {/* Public Route: Login Page */}
          <Route exact path="/login">
            {user.id ? <Redirect to="/user" /> : <LoginPage />}
          </Route>

          {/* Public Route: Registration Page */}
          <Route exact path="/registration">
            {user.id ? <Redirect to="/user" /> : <RegisterPage />}
          </Route>

          {/* Catch-all Route for 404 */}
          <Route>
            <h1>404 - Page Not Found</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
