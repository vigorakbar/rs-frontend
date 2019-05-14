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

const LogoContainer = Styled.div`
  margin: 50px auto 50px auto;
  width: 35em;
  height: 10em;
`;

const Logo = Styled(Image)`
  height: 100%;
  width: 100%;
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
  width: 100em;
  margin: 0 auto;

  h2 {
    margin: 100px 0;
    text-align: center;
    font-family: 'Lucida Sans Unicode', sans-serif;
    color: #90c9c8;
    font-size: 32px;
    font-weight: bold;
  }
`;

const ImageTitleWrapper = Styled.div`
  height: 50em;
  width: 100%;
  background-image: url(${BackgroundImgTitle});
  background-size: cover;
  margin: 0 auto;
`;

const ImageContainer = Styled.div`
  height: 50em;
  width: 100%;
  margin: 200px auto;
  display: flex;
  position: relative;
`;

const ImageVisiContent = Styled.div`
background-color: #90c9c8;
height: 20em;
width: 40em;
bottom: 10em;
right: 0em;
z-index: 1;
position: absolute;
padding: 5em;

h1{    
  color: #e1eded;
  font-family: 'Lucida Sans Unicode',sans-serif;
  font-weight: bold;
}

div{
  color: #e1eded;
  font-size: 28px;
  font-family: 'Lucida Sans Unicode',sans-serif;
  font-weight: bold;
}

`;

const ImageVisiWrapper = Styled.div`
  height: 45em;
  width: 70em;
  left: 0em
  background-image: url(${BackgroundImgVisi});
  background-size: cover;
  position: absolute;
  z-index: 0;
`;

const ImageMisiContent = Styled.div`
background-color: #90c9c8;
height: 40em;
width: 50em;
top: 10em;
left: 0em;
z-index: 1;
position: absolute;
padding: 5em;
h1{    
  color: #e1eded;
  font-family: 'Lucida Sans Unicode',sans-serif;
  font-weight: bold;
}

div{
  color: #e1eded;
  font-size: 28px;
  font-family: 'Lucida Sans Unicode',sans-serif;
  font-weight: bold;
}

`;

const ImageMisiWrapper = Styled.div`
  height: 45em;
  width: 70em;
  right: 0em;
  background-image: url(${BackgroundImgMisi});
  background-size: cover;
  position: absolute;
  z-index: 0;
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
          <LogoContainer>
            <Logo src={LogoRS} />
          </LogoContainer>
          <h2>
            Rumah Belajar SAHAJA Ciroyom merupakan sebuah rumah belajar yang didirikan untuk
            mendidik perilaku ‘anak marginal’ agar menjadi lebih baik, berakhlak mulia, berbudi
            pekerti luhur, mandiri, memperoleh pendidikan yang layak dan dapat diterima oleh
            masyarakat.
          </h2>
          <ImageTitleWrapper />
          <ImageContainer>
            <ImageVisiWrapper />
            <ImageVisiContent>
              <h1>VISI</h1>
              <div>
                Menjadi sahabat anak-anak marginal untuk membangun karakter yang lebih baik.
              </div>
            </ImageVisiContent>
          </ImageContainer>
          <ImageContainer>
            <ImageMisiWrapper />
            <ImageMisiContent>
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
            </ImageMisiContent>
          </ImageContainer>
        </InnerContainer>
        <Footer profile={profile} />
      </Container>
    );
  }
}

export default About;
