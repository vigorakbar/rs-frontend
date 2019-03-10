import React from 'react';

class AdminTestPage extends React.PureComponent {
  state = {
    test: '',
  }

  render() {
    const { test } = this.state;
    return (
      <div>
        this is test admin page
        {test}
      </div>
    );
  }
}

export default AdminTestPage;
