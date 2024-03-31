import React, {useContext} from "react";
import classes from './TechnologyRoutes.module.css'
import { Outlet } from "react-router";
import Navigator from "./Navigator";
import { NavbarContext } from "../../store/NavbarContext";


const TechnologyRoutes = () => {

	const ctx = useContext(NavbarContext)

	return <div className={classes['technology-page']} onClick={() => ctx.setNavbarVisible(false)}>
				<p className={classes['heading-description']}><span className={classes['index']}>03</span> <span className={classes['heading']}>SPACE LAUNCH 101</span></p>
				<div className={classes['main-page']}>
					<Navigator/>
				  <Outlet/>
				</div>
	</div>
}
export default TechnologyRoutes;
