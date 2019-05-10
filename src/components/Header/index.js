import React from 'react';
import PropTypes from 'prop-types';
import Image from 'components/Image';
import logo from 'assets/logo-small.png';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cx from 'classnames';
import Styled from 'styled-components';

const Nav = Styled.nav`
  background-image: linear-gradient(to right, white, #C7E9E7);
  opacity: 0.9;
  box-shadow: 0 -7px 40px 0 grey;
  margin-bottom: 10px;
`;

class Header extends React.PureComponent {
  onNavClick = (e, url) => {
    const { onNavigate } = this.props;
    e.preventDefault();
    onNavigate(url);
  }

  render() {
    const { active, className } = this.props;
    return (
      <Nav className={cx('navbar navbar-expand-lg navbar-light bg-light', className)}>
        <a href="/" className="navbar-brand" onClick={e => this.onNavClick(e, '/')}>
          <Image src={logo} alt="Logo Rumah Sahaja" />
        </a>
        <a className="navbar-toggler" href="/" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className={cx('nav-item', active === 'home' && 'active')}>
              <a href="/" className="nav-link" onClick={e => this.onNavClick(e, '/')}>
                Home
              </a>
            </li>
            <li className={cx('nav-item', active === 'news' && 'active')}>
              <a href="/news" className="nav-link" onClick={e => this.onNavClick(e, '/news')}>
                Berita
              </a>
            </li>
            <li className={cx('nav-item', active === 'donation' && 'active')}>
              <a href="/donation" className="nav-link" onClick={e => this.onNavClick(e, '/donation')}>
                Donasi
              </a>
            </li>
            <li className={cx('nav-item', active === 'about-us' && 'active')}>
              <a href="/about-us" className="nav-link" onClick={e => this.onNavClick(e, '/about-us')}>
                Tentang Kami
              </a>
            </li>
            <li className={cx('nav-item', active === 'schedule' && 'active')}>
              <a href="/schedule" className="nav-link" onClick={e => this.onNavClick(e, '/schedule')}>
                Jadwal
              </a>
            </li>
          </ul>
        </div>
      </Nav>
    );
  }
}

Header.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  active: PropTypes.oneOf(['home', 'news', 'donation', 'about-us', 'schedule']),
  className: PropTypes.string,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    onNavigate: url => push(url),
  },
  dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(Header);
