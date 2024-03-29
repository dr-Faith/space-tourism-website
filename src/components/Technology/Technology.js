import React from "react";
import classes from './Technology.module.css'


const Technology = (props) => {

  const {imgSrc, title, description} = props

	return <div className={classes['technology']}>
     <div>
      <p className={classes['terminology']}>THE TERMINOLOGY ...</p>
      <p className={classes['title']}>{title.toUpperCase()}</p>
      <p className={classes['description']}>{description}</p>
     </div>
     <div>
      <img src={imgSrc} alt=""/>
     </div>
  </div>;
};


export default Technology;
