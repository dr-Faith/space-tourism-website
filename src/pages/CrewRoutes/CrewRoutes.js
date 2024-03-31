import React, {useContext} from 'react'
import classes from './CrewRoutes.module.css'
import { Outlet } from 'react-router-dom'
import Navigator from './Navigator'
import { NavbarContext } from '../../store/NavbarContext'


const CrewRoutes = () => {

  const ctx = useContext(NavbarContext)


  return <div className={classes['crew']} onClick={() => ctx.setNavbarVisible(false)}>
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