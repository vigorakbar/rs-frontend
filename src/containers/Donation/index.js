import React from 'react';
import Styled from 'styled-components';
import Header from 'components/Header';
import BackgroundImg from 'assets/bg1.jpg';
import BackgroundImgSm from 'assets/bg1-small.jpg';

const Container = Styled.div`
  height: 100%;
  .wrapper {
    margin: 20px;
  }
`;

const BackgroundWrapper = Styled.div`
  height: 100%;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: 0% 15%;

  @media only screen and (max-width: 500px) {
    background-image: url(${BackgroundImgSm});
  }

  h1 {
    font-family: 'Noto Serif', serif;
    color: white;
    font-size: 60px;
  }

  .content {
    font-family: 'PT Sans', sans-serif;
    color: white;
    font-size: 22px;
  }

  .text-container {
    max-width: 500px;
    margin: 3vw 10px 0 5vw;
  }
`;

const Donation = () => (
  <Container>
    <BackgroundWrapper>
      <Header active="donation" />
      <div className="text-container">
        <h1>Donasi</h1>
        <div className="content">
          <div>
            Mari ikut memperjuangkan pendidikan dan senyum anak jalanan dengan berdonasi.
          </div>
          <br />
          <div>BCA</div>
          <div>a.n. Rumah Sahaja</div>
          <div>1234567890</div>
        </div>
      </div>
    </BackgroundWrapper>
  </Container>
);

export default Donation;
