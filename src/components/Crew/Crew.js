import React from 'react'
import classes from './Crew.module.css'



const Crew = (props) => {

  const {jobTitle, name, description, imgSrc} = props 

  return <div className={classes['crew']}>
    <div>
      <p className={classes['job-title']}>{jobTitle.toUpperCase()}</p>
      <p className={classes['name']}>{name.toUpperCase()}</p>
      <p className={classes['description']}>{description}</p>
    </div>
    <div>
      <img src={imgSrc} alt="" />
      <hr className={classes['img-hr']}/>
    </div>
  </div>
}


export default Crew