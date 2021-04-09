import React from 'react';
import { useHistory } from 'react-router';

import classes from './search-bar.module.scss';

export default function SearchBar() {
  const [term, setTerm] = React.useState('');
  const history = useHistory();

  function search(e) {
    e.preventDefault();
    if (term.trim() === '') return 'Loading';
    history.push({ pathname: '/items', search: `?search=${term}` });
  }

  return (
    <form onSubmit={search} className={classes.container}>
      <input
        id='search'
        value={term}
        onChange={({ target }) => setTerm(target.value)}
        type='text'
        placeholder='no dejes nunca de comprar'
        autoFocus
      />
      <button type='submit' className={classes.search} aria-label='Search' />
    </form>
  );
}
