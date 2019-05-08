import React from 'react';
// import PropTypes from 'prop-types';
import Styled from 'styled-components';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Image from 'components/Image';

import BackgroundImg from 'assets/cover.jpg';
import BackgroundImgSm from 'assets/cover-small.jpg';
import logo from 'assets/logo-black2.png';

import { getProfile } from 'models/Profile';

const Container = Styled.div`
  height: 100%;
  .wrapper {
    margin: 20px;
  }
`;

const Cover = Styled.div`
  background-image: url(${BackgroundImg});
  background-size: cover;
  height: 560px;
  margin-bottom: 30px;
  background-position: 0% 25%;

  @media only screen and (max-width: 500px) {
    background-image: url(${BackgroundImgSm});
    background-position: 65% 25%;
  }

  .cover-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    

    .logo {
      height: 20vw;
      min-height: 183px;
      max-height: 260px;
      margin: 3vw 10px 0 8vw;
      @media only screen and (max-width: 500px) {
        height: 123px;
        min-height: 123px;
        margin-left: 14px;
      }
    }

    .quote-container {
      align-self: flex-end;
      font-family: 'Gochi Hand', cursive;
      margin: 0 5vw 5vw 0;
    }

    .quote {
      background-color: white;
      border-radius: 5px;
      font-size: 25px;
      padding: 4px;
      color: #362F2E;
    }

    .quote-top {
      width: 210px;
      border-bottom-right-radius: 0;
    }

    .quote-bottom {
      margin-left: 50px;
      border-top-left-radius: 0;
    }
  }
`;

const Content = Styled.div`
  font-family: 'PT Sans', sans-serif;
  max-width: 1200px;
  margin: 0 auto;

  .blog-title {
    margin: 0 0 10px 10px;
  }

  .article-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 20px 40px 20px;

    .card {
      max-width: 370px;
      margin-bottom: 20px;
    }
  }
`;

class Home extends React.PureComponent {
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
        <Cover>
          <Header active="home" />
          <div className="cover-content">
            <Image className="logo" src={logo} alt="Logo Rumah Sahaja" />
          </div>
        </Cover>
        <Content>
          <h3 className="blog-title">Artikel Terkini</h3>
          <div className="article-container">
            <div className="card">
              <Image className="card-img-top" src={BackgroundImg} alt="Card image cap" />
              <div className="card-body">
                <p>
                  Some quick example text to build on the card title and
                  make up the bulk of the card&apos;s content.
                </p>
              </div>
            </div>
            <div className="card">
              <Image className="card-img-top" src={BackgroundImg} alt="Card image cap" />
              <div className="card-body">
                <p>
                  Some quick example text to build on the card title and
                  make up the bulk of the card&apos;s content.
                </p>
              </div>
            </div>
            <div className="card">
              <Image className="card-img-top" src={BackgroundImg} alt="Card image cap" />
              <div className="card-body">
                <p>
                  Some quick example text to build on the card title and
                  make up the bulk of the card&apos;s content.
                </p>
              </div>
            </div>
          </div>
        </Content>
        <Footer profile={profile} />
      </Container>
    );
  }
}

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
