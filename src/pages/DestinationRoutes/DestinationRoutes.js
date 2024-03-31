import React, {useContext} from 'react';
import CustomLink from '../../components/CustomLink/CustomLink';
import { Outlet } from 'react-router-dom';
import classes from './DestinationRoutes.module.css';
import { NavbarContext } from '../../store/NavbarContext';


const DestinationRoutes = (props) => {

  const ctx = useContext(NavbarContext)

  const destinations = [
    'moon',
    'mars',
    'europa',
    'titan'
  ]


  return <div className={classes['destination-page']} onClick={() => ctx.setNavbarVisible(false)}>
      <div className={classes['nav-description']}>
        <span className={classes['nav-index']}>01</span><span className={classes['nav-heading']}>PICK YOUR DESTINATION</span>
      </div>
      <div className={classes['links']}>
       {destinations.map(destination => <CustomLink 
          addClass='dest-link'
          text={destination.toUpperCase()}
          to={`${destination}`}
        />)}
      </div>
      <Outlet/>
    </div>
}

export default DestinationRoutes