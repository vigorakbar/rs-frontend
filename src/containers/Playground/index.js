import React from 'react';

// Buat coba-coba
class Playground extends React.PureComponent {
  state = {
    test: 'ground',
  }

  render() {
    const { test } = this.state;
    return (
      <div>
        <div>
          This is play
          {test}
        </div>
      </div>
    );
  }
}

export default Playground;
