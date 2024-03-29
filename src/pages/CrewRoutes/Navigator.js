import React from 'react';
import classes from './Navigator.module.css'
import { NavLink } from 'react-router-dom';


const Navigator = () => {
  return  <div className={classes['nav-links']}>
            <NavLink to='commander' className={({isPending, isActive}) => isPending ? classes['link'] : isActive ? `${classes['link']} ${classes['active']}` : classes['link']}/>
            <NavLink to='mission specialist' className={({isPending, isActive}) => isPending ? classes['link'] : isActive ? `${classes['link']} ${classes['active']}`: classes['link']}/>
            <NavLink to='pilot' className={({isPending, isActive}) => isPending ? classes['link'] : isActive ? `${classes['link']} ${classes['active']}` : classes['link']}/>
            <NavLink to='flight engineer' className={({isPending, isActive}) => isPending ? classes['link'] : isActive ? `${classes['link']} ${classes['active']}` : classes['link']}/>
        </div>
}

export default Navigator