import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Styled from 'styled-components';
import {
  faYoutube, faInstagram, faTwitter, faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faDonate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* eslint react/no-array-index-key: 0 */

const ImageWrapper = Styled.div`
  max-height: 560px;

  #image-caption {
    background: rgba(199,233,231,0.6);
    color: black;
    border-radius: 20px;
    padding: 20px;
  }
`;

const PlugWrapper = Styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  margin-top: 20px;

  .social-media {
    display: flex;
    align-items: center;

    div {
      margin: 10px 8px;
    }

    .icon-wrapper {
      width: 28px;
      height: 28px;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      padding-top: 2px;
      transition: all .2s ease-in-out;

      &.instagram {
        background-color: #C13584;
      }

      &.twitter {
        background-color: #1DA1F2;
      }

      &.facebook {
        background-color: #3C5A99;
      }

      &.youtube {
        background-color: #FF0000;
      }
    }

    .icon-wrapper:hover {
      transform: scale(1.1);
    }
  }

  .donation {
    display: flex;
    align-items: center;
    background-color: #66A63F;
    border-radius: 8px;
    cursor: pointer;
    padding: 0 10px;
    color:white;
    font-weight: 500;
    height: 42px;
    transition: all .2s ease-in-out;
    div {
      margin: 4px 6px;
    }
    .icon-wrapper {
      color: white;
    }
  }

  .donation:hover {
    transform: scale(1.1);
  }
`;

const Carousel = (props) => {
  const { images, captions, className } = props;
  return (
    <div id="carouselComponent" className={cx('carousel slide', className)} data-ride="carousel">
      <ol className="carousel-indicators">
        {images.map((item, i) => (
          i === 0
            ? <li key={i} data-target="#carouselComponent" data-slide-to="0" className="active" />
            : <li key={i} data-target="#carouselComponent" data-slide-to={i} />
        ))}
      </ol>
      <div className="carousel-inner">
        {images.map((image, i) => (
          <ImageWrapper className={cx('carousel-item', i === 0 && 'active')} key={i}>
            <img className="d-block w-100" src={image} alt={captions[i].title} />
            <div id="image-caption" className="carousel-caption d-none d-md-block">
              <h5>{captions[i].title}</h5>
              <p>{captions[i].body}</p>
              <PlugWrapper>
                <div className="social-media">
                  <div>Ikuti Kami :</div>
                  <div className="icon-wrapper instagram"><FontAwesomeIcon icon={faInstagram} className="fa-lg" /></div>
                  <div className="icon-wrapper twitter"><FontAwesomeIcon icon={faTwitter} className="fa-lg" /></div>
                  <div className="icon-wrapper facebook"><FontAwesomeIcon icon={faFacebook} className="fa-lg" /></div>
                  <div className="icon-wrapper youtube"><FontAwesomeIcon icon={faYoutube} className="fa-lg" /></div>
                </div>
                <div className="donation">
                  <div className="icon-wrapper donate"><FontAwesomeIcon icon={faDonate} className="fa-lg" /></div>
                  <div>Donasi</div>
                </div>
              </PlugWrapper>
            </div>
          </ImageWrapper>
        ))}
      </div>
      <a className="carousel-control-prev" href="#carouselComponent" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselComponent" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  captions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
    }),
  ),
  className: PropTypes.string,
};

export default Carousel;
