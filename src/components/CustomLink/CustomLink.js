import React from "react";
// import { NavLink } from "react-router-dom";
import classes from './CustomLink.module.css'
import { NavLink } from "react-router-dom";


const CustomLink = (props) => {
	// const {index, text} = props

	
	return (
		<NavLink to={props.to} className={({isActive, isPending}) => isPending ? classes['link'] : isActive ? `${classes['link']} ${classes['active']}` : classes['link'] }>
			{props.index && <span className={classes['index']}>{props.index}</span>}
			<span className={classes['text']}>{props.text}</span>
		</NavLink>
	);
};

export default CustomLink;
