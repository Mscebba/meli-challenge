import React from 'react';

import classes from './button.module.scss';

export default function Button({ children }) {
  return <button className={classes.btn}>{children}</button>;
}
