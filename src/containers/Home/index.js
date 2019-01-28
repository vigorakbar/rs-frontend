import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <button type="button" onClick={() => props.changePage()}>Go to about page via redux</button>
  </div>
);

Home.propTypes = {
  changePage: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    changePage: () => push('/about-us'),
  },
  dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(Home);
