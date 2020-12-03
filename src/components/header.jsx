import PropTypes from 'prop-types';
import React from 'react';
import logo from '../images/XovieY.png';

import styles from './header.module.scss';

const Header = ({ siteTitle }) => {
  return (
    <header className={styles.Header}>
      <a href="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </a>
      <ul className={styles.links}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="mailto:oviisaacs@gmail.com">Contact</a>
        </li>
      </ul>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
