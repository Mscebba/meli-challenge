import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

import logo from 'assets/Logo_ML@2x.png';

import classes from './header.module.scss';

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to='/'>
          <img src={logo} alt='MercadoLibre' width='53px' height='36px' />
        </Link>
        <SearchBar />
      </div>
    </header>
  );
}
