import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigator.module.css'


const Navigator = () => {
  return <div className={classes['navigator']}>
        <NavLink to='launch vehicle' className={({isActive}) => isActive ? `${classes.active} ${classes.link}` : `${classes.link}`}>1</NavLink>
        <NavLink to='spaceport' className={({isActive}) => isActive ? `${classes.active} ${classes.link}` : `${classes.link}`}>2</NavLink>
        <NavLink to='space capsule' className={({isActive}) => isActive ? `${classes.active} ${classes.link}` : `${classes.link}`}>3</NavLink>
  </div>
}

export default Navigator