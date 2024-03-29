import React from 'react'
import classes from './CrewRoutes.module.css'
import { NavLink, Outlet } from 'react-router-dom'
import Navigator from './Navigator'


const CrewRoutes = () => {
  return <div className={classes['crew']}>
      <div>
        <div className={classes['nav-description']}>
          <span className={classes['nav-index']}>02</span><span className={classes['nav-heading']}>MEET YOUR CREW</span>
        </div>
        {/* <div> */}
        <Outlet/>
        <Navigator/>
        {/* </div> */}
      </div>
  </div>
}


export default CrewRoutes