import React from 'react';

import classes from './not-found.module.scss';

export default function EmptyErrorPage({ icon, children }) {
  return (
    <div className={classes.container}>
      {icon && <div className={classes.icon}>{icon}</div>}
      <div className={classes.content}>{children}</div>
    </div>
  );
}
