import React from 'react';
import Carousel from 'components/Carousel';
import Pict1 from 'assets/bg1.jpg';
import Pict2 from 'assets/cover.jpg';
import Pict3 from 'assets/logo.png';

// Buat coba-coba
class Playground extends React.PureComponent {
  state = {
    test: 'ground',
  }

  render() {
    const { test } = this.state;
    const images = [
      Pict1,
      Pict2,
      Pict3,
      Pict2,
    ];
    const captions = [
      { title: 'test title 1', body: 'test body 1' },
      { title: 'test title 2', body: 'test body 2' },
      { title: 'test title 3', body: 'test body 3' },
      { title: 'test title 4', body: 'test body 4' },
    ];
    return (
      <div>
        <Carousel images={images} captions={captions} />
        <div>
          This is play
          {test}
        </div>
      </div>
    );
  }
}

export default Playground;
