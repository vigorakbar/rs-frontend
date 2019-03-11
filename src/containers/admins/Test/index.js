import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onLogoutAdmin } from 'containers/admins/auth/actions';

class AdminTestPage extends React.PureComponent {
  state = {
    test: '',
  }

  render() {
    const { test } = this.state;
    const { onLogout } = this.props;
    return (
      <div>
        this is test admin page
        <br />
        {test}
        <button type="button" onClick={onLogout}>Logout</button>
      </div>
    );
  }
}

AdminTestPage.propTypes = {
  onLogout: PropTypes.any,
};

const mapDispachToProps = dispatch => bindActionCreators(
  {
    onLogout: () => onLogoutAdmin(),
  },
  dispatch,
);

export default connect(
  null,
  mapDispachToProps,
)(AdminTestPage);
