import React from 'react';
import { Link } from 'react-router-dom';

import free from 'assets/ic_shipping@2x.png';

import classes from './item.module.scss';

export default function Item({
  id,
  free_shipping,
  location,
  picture,
  price,
  title,
}) {
  return (
    <div className={classes.container}>
      <Link to={`/items/${id}`}>
        <figure className={classes.image}>
          <img src={picture} alt={title} />
        </figure>
      </Link>
      <div className={classes.content}>
        <div className={classes.price_location}>
          <div className={classes.price}>
            ${price && price.amount.toLocaleString('de-DE')}
            {free_shipping && (
              <img
                src={free}
                alt='Envio gratis'
                title='Envio gratis'
                width='18px'
                height='18px'
              />
            )}
          </div>
          <div className={classes.location}>{location}</div>
        </div>
        <Link to={`/items/${id}`}>
          <div className={classes.title}>{title}</div>
        </Link>
      </div>
    </div>
  );
}
