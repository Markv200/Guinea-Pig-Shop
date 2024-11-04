// import React, { useEffect } from 'react';
// import {
//   HashRouter as Router,
//   Redirect,
//   Route,
//   Switch,
// } from 'react-router-dom';

// import { useDispatch, useSelector } from 'react-redux';

// import Nav from '../Nav/Nav';
// import Footer from '../Footer/Footer';

// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// import AboutPage from '../AboutPage/AboutPage';
// import UserPage from '../UserPage/UserPage';
// import InfoPage from '../InfoPage/InfoPage';
// import LoginPage from '../LoginPage/LoginPage';
// // import LandingPage from '../LandingPage/LandingPage';
// import RegisterPage from '../RegisterPage/RegisterPage';
// import Home from '../HomePage/HomePage';
// import Shop from '../ShopPage/Shoppage';
// import Description from '../Description/Description';
// import './App.css';
// import CartPage from '../Cart/Cart';

// function App() {
//   const dispatch = useDispatch();

//   const user = useSelector(store => store.user);

//   useEffect(() => {
//     dispatch({ type: 'FETCH_USER' });
//   }, [dispatch]);

//   return (
//     <Router>
//       <div className="main-content">
//         <Nav />
//         <Switch>
//           {/* Redirect root "/" to "/home" */}
//           <Redirect exact from="/" to="/home" />

//           {/* Public Route: Home Page (Accessible to both logged-in and logged-out users) */}
//           <Route exact path="/home">
//             <Home />
//           </Route>

//           <Route exact path="/shop">
//             <Shop />
//           </Route>

//           <Route exact path="/description/:id">
//             <Description />
//           </Route>

//           {/* Public Route: About Page */}
//           <Route exact path="/about">
//             <AboutPage />
//           </Route>

//           <Route exact path="/cart">
//             <CartPage />
//           </Route>

//           {/* Protected Route: User Page (only accessible if logged in) */}
//           <ProtectedRoute exact path="/user">
//             <UserPage />
//           </ProtectedRoute>

//           {/* Protected Route: Info Page (only accessible if logged in) */}
//           <ProtectedRoute exact path="/info">
//             <InfoPage />
//           </ProtectedRoute>

//           {/* Public Route: Login Page */}
//           <Route exact path="/login">
//             {user.id ?
//               // Redirect logged-in users to the User page
//               <Redirect to="/user" />
//               :
//               // Show the login page if not logged in
//               <LoginPage />
//             }
//           </Route>

//           {/* Public Route: Registration Page */}
//           <Route exact path="/registration">
//             {user.id ?
//               // Redirect logged-in users to the User page
//               <Redirect to="/user" />
//               :
//               // Show the registration page if not logged in
//               <RegisterPage />
//             }
//           </Route>

//           {/* Catch-all Route for 404 */}
//           <Route>
//             <h1>404 - Page Not Found</h1>
//           </Route>
//         </Switch>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

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
import ThankYou from '../Thankyou/Thankyou'

import './App.css';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div className="main-content">
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home"><Home /></Route>
          <Route exact path="/shop"><Shop /></Route>
          <Route exact path="/description/:id"><Description /></Route>
          <Route exact path="/about"><AboutPage /></Route>
          <Route exact path="/cart"><CartPage /></Route>
          <Route exact path="/checkout"><CheckoutPage /></Route>
          <Route exact path="/thankyou"><ThankYou /></Route> {/* Add Thank You Route */}
          <ProtectedRoute exact path="/user"><UserPage /></ProtectedRoute>
          <ProtectedRoute exact path="/info"><InfoPage /></ProtectedRoute>
          <Route exact path="/login">
            {user.id ? <Redirect to="/user" /> : <LoginPage />}
          </Route>
          <Route exact path="/registration">
            {user.id ? <Redirect to="/user" /> : <RegisterPage />}
          </Route>
          <Route><h1>404 - Page Not Found</h1></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
