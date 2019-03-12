import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      token ? <Component {...props} /> : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location },
        }}
        />
      )
    )}
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.any,
  token: PropTypes.string,
};

const mapStateToProps = (state) => {
  const { token } = state.admin;
  return { token };
};

export default connect(mapStateToProps)(ProtectedRoute);
