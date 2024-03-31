import React, { createContext, useState } from "react"

const NavbarContext = createContext({
  navbarVisible: false,
  setNavbarVisible: () => {}
});


const NavbarContextProvider = (props) => {

  const [navbarVisible, setNavbarVisible] = useState(false)


  const handleSetNavbarVisible = (value) => {
    setNavbarVisible(value)
  }

  return <NavbarContext.Provider
  value={{
    navbarVisible: navbarVisible,
    setNavbarVisible: (value) => {handleSetNavbarVisible(value)}
  }}
>
  {props.children}
</NavbarContext.Provider>
}

const NavbarConsumer = (props) => <NavbarContext.Consumer>
    {props.children}
</NavbarContext.Consumer>


export default NavbarContextProvider
export {NavbarConsumer, NavbarContext}
