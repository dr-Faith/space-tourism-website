import React, {useContext, useState} from 'react'
import classes from './Home.module.css'
import { NavbarContext } from '../../store/NavbarContext'


const Home = (props) => {

  const [exploreBtnHover, setExploreBtnHover] = useState(false)

  const ctx = useContext(NavbarContext)


  const handleExloreButtonMouseOver = () => {
    setExploreBtnHover(true)
  }

  const handleExploreButtonMouseOut = () => {
    setExploreBtnHover(false)
  }


  return <div className={classes['home']} onClick={() => ctx.setNavbarVisible(false)}>
     <div>
          <div className={classes['home-content']}>
            <div className={classes['home-text']}>
              <p className={classes['home-description']}>SO, YOU WANT TO TRAVEL TO <br/><span className={classes['space']}>SPACE</span></p>
              <p className={classes['text-description']}>Let's face it; if you want to go to space, you might as well geniuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </div>
            <div className={classes['explore-button-wrap']} style={{background: exploreBtnHover && 'hsla(0, 0%, 100%, .1)'}}>
              <div className={classes['explore-button']} onMouseOver={handleExloreButtonMouseOver} onMouseOut={handleExploreButtonMouseOut}>
                EXPLORE
              </div> 
            </div>
          </div>
        </div>
  </div>      
}

export default Home
