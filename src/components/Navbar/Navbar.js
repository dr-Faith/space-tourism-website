import React, { useState, useEffect, useContext } from "react";
import classes from "./Navbar.module.css";
import CustomLink from "../CustomLink/CustomLink";
import { NavbarContext } from "../../store/NavbarContext";

const Navbar = () => {
	// function useMediaQuery(query) {
	//   const [matches, setMatches] = React.useState(false);
	//   React.useEffect(() => {
	//     const matchQueryList = window.matchMedia(query);
	//     function handleChange(e) {
	//       setMatches(e.matches);
	//     }
	//     matchQueryList.addEventListener("change", handleChange);
	//   }, [query]);
	//   return matches;
	// }
	const [matches, setMatches] = useState(window.matchMedia("(min-width: 680px)").matches);
	const ctx = useContext(NavbarContext)

	useEffect(() => {
		window.matchMedia("(min-width: 680px)").addEventListener("change", (e) => setMatches(e.matches));
	}, []);

	// const [navbarVisible, setNavbarVisible] = useState(false);
	// const matches = useMediaQuery()

	// const openNavbar = () => {
	// 	setNavbarVisible(true);
	// };

	// const closeNavbar = () => {
	// 	setNavbarVisible(false);
	// };

	// return <div class="real-bar">
	return <div className={classes["navbar"]}>
			<div className={classes["nav-icon-wrapper"]}>
				<div className={classes["nav-icon"]}>
					<div className={classes["white-circle"]}></div>
					<div className={classes["white-circle"]}></div>
					<div className={classes["white-circle"]}></div>
					<div className={classes["white-circle"]}></div>
				</div>
			</div>
			<div className={classes["nav-wrapper"]}>
				<hr className={classes["nav-line"]} />
			</div>
			<div
				className={classes["links"]}
				style={{ visibility: matches ? "visible" : ctx.navbarVisible ? "visible" : "hidden" }}
			>
				<CustomLink index="00" text="HOME" to="home/" />
				<CustomLink index="01" text="DESTINATION" to="destination/" />
				<CustomLink index="02" text="CREW" to="crew/" />
				<CustomLink index="03" text="TECHNOLOGY" to="technology/" />
			</div>

			{/* Burger button */}
			<div
				className={classes["burger-button"]}
				style={{ visibility: ctx.navbarVisible ? "hidden" : "visible" }}
				onClick={() => ctx.setNavbarVisible(true)}
			>
				<div className={classes["line"]}></div>
				<div className={classes["line"]}></div>
				<div className={classes["line"]}></div>
			</div>
			<div
				className={classes["cross"]}
				style={{ visibility: ctx.navbarVisible ? "visible" : "hidden" }}
				onClick={() => ctx.setNavbarVisible(false)}
			>
				<div className={classes["left"]}></div>
				<div className={classes["right"]}></div>
			</div>
		</div>

}

export default Navbar;
