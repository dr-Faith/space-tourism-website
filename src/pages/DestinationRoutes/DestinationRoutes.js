import React from 'react';
import CustomLink from '../../components/CustomLink/CustomLink';
import { Route, Routes, Outlet, useLocation } from 'react-router-dom';
import classes from './DestinationRoutes.module.css';


const DestinationRoutes = (props) => {

  const destinations = [
    'moon',
    'mars',
    'europa',
    'titan'
  ]

  return (
    <div className={classes['destination-page']}>
      <div className={classes['nav-description']}>
        <span className={classes['nav-index']}>01</span><span className={classes['nav-heading']}>PICK YOUR DESTINATION</span>
      </div>
      <div className={classes['links']}>
       {destinations.map(destination => <CustomLink 
          text={destination.toUpperCase()}
          to={`${destination}`}
        />)}
      </div>
      <Outlet/>
    </div>
  )
}

export default DestinationRoutes