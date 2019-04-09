import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const StyledFooter = Styled.footer`
  border-top: 2px solid #C7E9E7;
  margin-top: 10px;
  padding: 10px;
  color: rgba(0,0,0,.5);
  text-align: center;
  > div {
    display: inline-block
    margin: 0 auto;
  }
  .contact {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    div {
      margin: 0 5px;
    }
  }
`;

const Footer = (props) => {
  const { profile } = props;
  return (
    <StyledFooter className="footer">
      <div className="container">
        <div><b>{profile.name}</b></div>
        <div>{profile.address}</div>
        <div className="contact">
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            {` : ${profile.email}`}
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} />
            {` : ${profile.phone}`}
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

Footer.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default Footer;
