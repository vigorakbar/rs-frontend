import React from 'react';
// import PropTypes from 'prop-types';
import Styled from 'styled-components';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BaseHeader from 'components/Header';
import Footer from 'components/Footer';
import Image from 'components/Image';

import BackgroundImg from 'assets/cover.jpg';

import { getProfile } from 'models/Profile';
import Carousel from '../../components/Carousel';

const Container = Styled.div`
  height: 100%;
  .wrapper {
    margin: 20px;
  }

  #carouselComponent {
    margin-bottom: 32px;
  }
`;

const Header = Styled(BaseHeader)`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 99;
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
        <Header active="home" />
        <Carousel images={[BackgroundImg]} captions={[{ title: 'Hello Everybody', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' }]} />
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
