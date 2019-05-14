import React from 'react';
import Styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Image from 'components/Image';

import { getProfile } from 'models/Profile';

import BackgroundImgTitle from 'assets/bg-about-title.jpg';
import LogoRS from 'assets/logo.png';
import BackgroundImgVisi from 'assets/bg-about-visi.jpg';
import BackgroundImgMisi from 'assets/bg-about-misi.jpg';
import BackgroundImgVisiSm from 'assets/bg-about-visi-small.jpg';
import BackgroundImgMisiSm from 'assets/bg-about-misi-small.jpg';

const Logo = Styled(Image)`
  height: 75%;
  width: 75%;
  @media only screen and (max-width: 500px) {
    margin-left: 2em;
  }
`;

const Container = Styled.div`
  height: 100vh;
  .wrapper {
    margin: 20px;
  }
  background-color: #e1eded;
  overflow: auto;
`;

const InnerContainer = Styled.div`
  margin: 0 auto;
  padding: 0 10vw;

  @media only screen and (max-width: 500px) {
    padding: 0;
  }

  h2 {
    margin: 50px 0;
    text-align: center;
    font-family: 'PT Sans',sans-serif;
    color: #90c9c8;
    font-size: 22px;
    font-weight: bold;
    @media only screen and (max-width: 500px) {
      padding: 0 0.5em;
    }
  }

  .logo-container {
    margin: 50px auto 50px auto;
    width: 35em;
    height: 10em;

    @media only screen and (max-width: 500px) {
      margin: 50px auto 0 auto;
      width: 20em;
      height: 5em;
    }
  }

  .image-title-wrapper {
    height: 50em;
    width: 100%;
    background-image: url(${BackgroundImgTitle});
    background-size: cover;
    margin: 0 auto;
    @media only screen and (max-width: 500px) {
      display: none;
    }
  }

  .image-container {
    height: 50em;
    width: 100%;
    margin: 200px auto;
    display: flex;
    position: relative;
  }

  .image-visi-wrapper {
    height: 35em;
    width: 50em;
    left: 0em;    
    background-image: url(${BackgroundImgVisi});
    background-size: cover;
    position: absolute;
    z-index: 0;

    @media only screen and (max-width: 500px) {
      background-image: url(${BackgroundImgVisiSm});
      width: 100%;
      height: 100%;
    }

  }

  .image-visi-content{
    background-color: #90c9c8;
    height: 20em;
    width: 40em;
    bottom: 10em;
    right: 0em;
    z-index: 1;
    position: absolute;
    padding: 5em;
    color: #e1eded;
    font-family: 'PT Sans',sans-serif;
    font-weight: bold;

    @media only screen and (max-width: 500px) {
      width: 100%;
    }

    h1 {
      font-weight: bold;
    }

    div{
      font-size: 22px;
    }
  }

  .image-misi-wrapper{
    height: 30em;
    width: 50em;
    right: 0em;
    background-image: url(${BackgroundImgMisi});
    background-size: cover;
    position: absolute;
    z-index: 0;

    @media only screen and (max-width: 500px) {
      background-image: url(${BackgroundImgMisiSm});
      width: 100%;
      height: 100%;
    }
  }

  .image-misi-content{
    background-color: #90c9c8;
    height: 25em;
    width: 50em;
    top: 10em;
    left: 0em;
    z-index: 1;
    position: absolute;
    padding: 2.5em;
    color: #e1eded;
    font-family: 'PT Sans',sans-serif;
    font-weight: bold;
  
    @media only screen and (max-width: 500px) {
      width: 100%;
      height: 35em;
    }

    h1{
      font-weight: bold;
    }

    div{
      font-size: 22px;
    }
  }
`;

class About extends React.PureComponent {
  state = {
    profile: {},
  }

  componentDidMount() {
    this.getRSProfile();
  }

  getRSProfile = () => {
    getProfile()
      .then((response) => {
        this.setState({
          profile: response.data,
        });
      })
      .catch((error) => {
        console.log(error) //eslint-disable-line
      });
  }

  render() {
    const { profile } = this.state;
    return (
      <Container>
        <Header active="about-us" />
        <InnerContainer>
          <div className="logo-container">
            <Logo src={LogoRS} />
          </div>
          <h2>
            Rumah Belajar SAHAJA Ciroyom merupakan sebuah rumah belajar yang didirikan untuk
            mendidik perilaku ‘anak marginal’ agar menjadi lebih baik, berakhlak mulia, berbudi
            pekerti luhur, mandiri, memperoleh pendidikan yang layak dan dapat diterima oleh
            masyarakat.
          </h2>
          <div className="image-title-wrapper" />
          <div className="image-container">
            <div className="image-visi-wrapper" />
            <div className="image-visi-content">
              <h1>VISI</h1>
              <div>
                Menjadi sahabat anak-anak marginal untuk membangun karakter yang lebih baik.
              </div>
            </div>
          </div>
          <div className="image-container">
            <div className="image-misi-wrapper" />
            <div className="image-misi-content">
              <h1>MISI</h1>
              <div>
                <br />
                Membiasakan anak-anak marginal untuk hidup sehat.
                <br />
                <br />
                Memberikan pendidikan yang layak bagi anak-anak marginal.
                <br />
                <br />
                Memfasilitasi anak-anak marginal untuk mendapatkan lingkungan yang lebih baik dalam bentuk rumah singgah.
              </div>
            </div>
          </div>
        </InnerContainer>
        <Footer profile={profile} />
      </Container>
    );
  }
}

export default About;
