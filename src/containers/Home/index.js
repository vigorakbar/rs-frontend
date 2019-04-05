import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from 'components/Header';

const Home = props => (
  <div>
    <Header active="home" />
    <h1>Home</h1>
    <p>Welcome home!</p>
    <button type="button" onClick={() => props.changePage('/about-us')}>Go to about page via redux</button>
    <br />
    <br />
    <button type="button" onClick={() => props.changePage('/login')}>login as admin</button>
  </div>
);

Home.propTypes = {
  changePage: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    changePage: url => push(url),
  },
  dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(Home);
