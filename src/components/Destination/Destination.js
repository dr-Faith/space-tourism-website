import React from 'react';
import classes from './Destination.module.css'


const Destination = (props) => {

  const {
    imgSrc,
    destination,
    description,
    distance,
    travelTime
  } = props

  return (
    <div className={classes['destination']}>
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <div>
      {/* Navigation */}
        {/* <div>
          <CustomLink text='MOON'/>
          <CustomLink text='MARS'/>
          <CustomLink text='EUROPA'/>
          <CustomLink text='TITAN'/>
        </div> */}
        <p className={classes['name']}>{destination.toUpperCase()}</p>
        <p className={classes['description']}>{description}</p>
        <hr className={classes['destination-hr']} />
        <div className={classes['description-footer']}>
          <div>
            <p className={classes['avg-dist']}>AVG. DISTANCE</p>
            <p className={classes['footer-info']}>{distance.toUpperCase()}</p>
          </div>
          <div>
            <p className={classes['est-travel']}>EST. TRAVEL TIME</p>
            <p className={classes['footer-info']}>{travelTime.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Destination