import React from 'react';

import classes from './breadcrumb.module.scss';

export default function BreadCrumb({ items }) {
  return (
    <div className={classes.container}>
      <ul className={classes.breadcrumb}>
        {items.map((item, idx) => (
          <li key={item + idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
