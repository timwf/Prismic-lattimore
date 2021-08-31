

import { StaticImage } from "gatsby-plugin-image"
import "../scss/components/menu.scss"
import {handleMouseHoverRight, handleMouseHoverExit, handleMouseHoverLeft, enableScroll } from '../utils/helpers.js'
import Minus from "../images/minus.svg"
import Plus from "../images/plus.svg"

import AniLink from "gatsby-plugin-transition-link/AniLink"


import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { RichText } from 'prismic-reactjs'





const Menu = () => {
  const queryData = useStaticQuery(graphql`
  {
    prismicNavigation {
      data {
        top_navigation {
          link {
            url
          }
          link_label {
            raw
          }
        }
      }
    }
  }
`)

const navigation = queryData.prismicNavigation
const topNav = navigation.data.top_navigation



  function closeMenu(){
    var menu = document.getElementsByClassName('menu')  
    menu[0].classList.remove('active')
    enableScroll()
  }


  return (
    <div className={"menu"}>
      <div className="menu__header">





        <AniLink  bg="#f1f1f1" duration={1} to="/"  >
          <div className="menu__logo" onClick={e => closeMenu(e)} onMouseEnter={e => handleMouseHoverLeft(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>
          <h1>Lattimore</h1>
          <h1>Friends</h1>
          <Plus />
          </div>
        </AniLink>
        <div className="menu__close"
          onMouseEnter={e => handleMouseHoverRight(e)}
          onMouseLeave={e =>handleMouseHoverExit(e)}
          onClick={e => closeMenu(e)}
          tabIndex={0} 
          role="button"
          onKeyDown={e => closeMenu(e)}
        >
        <Minus />
        </div>
      </div>
       <div className="menu__inner">
        <div className="menu__left">
          <StaticImage
            className="bio-avatar"
            layout="constrained"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/home-image.png"   
            placeholder="blurred"    
            quality={65}
            style={{  height: "auto", paddingBottom: "2px" }}
            imgStyle={{ height: "auto", border: "solid black" }}
            alt="home-image"
          />
          <p className="body">We’re happy to be as white-labelled as you need.</p>        
        </div>
        <div className="menu__right">
          <div className="menu__right-top">

          {topNav.map((navItem, index) => {
            return (
              <AniLink 
              cover bg="#f1f1f1" duration={1} 
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}              
              activeClassName="active"
              key={`link-${index}`}
              className="menu-font" to={navItem.link.url}><span> {RichText.asText(navItem.link_label.raw)}</span></AniLink>
             )
          })}

          </div>
          <div className="menu__right-bottom">
            <AniLink 
              cover bg="#f1f1f1" duration={1} 
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}
              activeClassName="active"
              className="menu-font" to="/contact"><span>CONTACT</span></AniLink>
            <AniLink 
                  cover bg="#f1f1f1" duration={1} 
              onMouseEnter={e => handleMouseHoverRight(e)}
              onMouseLeave={e =>handleMouseHoverExit(e)}  
              activeClassName="active"      
              className="menu-font" to="/terms"><span>LEGAL</span></AniLink>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Menu



// // Header.js file 

// import * as React from 'react'
// import { Link, graphql, useStaticQuery } from 'gatsby'
// import { RichText } from 'prismic-reactjs'

// export const Header = ({ isHomepage }) => {
//   const queryData = useStaticQuery(graphql`
//     {
//       prismicNavigation {
//         data {
//           top_navigation {
//             link {
//               url
//             }
//             link_label {
//               raw
//             }
//           }
//         }
//       }
//     }
//   `)

//   const navigation = queryData.prismicNavigation
//   const topNav = navigation.data.top_navigation

//   const homepageClass = isHomepage ? 'homepage-header' : ''

//   return (
//     <header className={`site-header ${homepageClass}`}>
//       <Link to="/">
//         <div className="logo">Example Site</div>
//       </Link>
//       <nav>
//         <ul>
//           {topNav.map((navItem, index) => {
//             return (
//               <li key={`link-${index}`}>
//                 <Link to={navItem.link.url}>
//                   {RichText.asText(navItem.link_label.raw)}
//                 </Link>
//               </li>
//             )
//           })}
//         </ul>
//       </nav>
//     </header>
//   )
// }
