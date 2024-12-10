import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from '../LoginPage/LoginPage';

function ProtectedRoute({ component: Component, adminOnly, ...props }) {
  const user = useSelector((store) => store.user);

  return (
    <Route
      {...props}
      render={(routeProps) =>
        user.id ? (
          adminOnly && user.role !== 'admin' ? (
            <Redirect to="/not-authorized" />
          ) : (
            <Component {...routeProps} />
          )
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default ProtectedRoute;
