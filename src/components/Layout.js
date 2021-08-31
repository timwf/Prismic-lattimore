import React, { useEffect } from 'react';
import Menu from "../components/menu"
import { Header } from './Header'
import { Footer } from './Footer'
 import Plus from "../images/plus.svg"
import "../scss/base/base.scss"
 import "../scss/components/header.scss"
 import "../scss/components/footer.scss"
 import AniLink from "gatsby-plugin-transition-link/AniLink"
 import {handleMouseHoverRight, handleMouseHoverExit, handleMouseHoverLeft,  getActualViewheight, disableScroll, enableScroll } from '../utils/helpers.js'

export const Layout = ({ isHomepage, children, navigation }) => {
  let pageWrap = true


  if(isHomepage){
    pageWrap = false
  }

  useEffect(() => {

    enableScroll()

    getActualViewheight()

    // checkIfTouch()
    if (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0)) {
      return
    }else{
      const cursor = document.getElementsByClassName('mouse-cursor')  
      const wrapper = document.getElementsByClassName('global-wrapper')  

      const moveBespokeCursor = e => {
        cursor[0].style.left = e.pageX - 12 + "px"
        cursor[0].style.top = e.pageY - 12 + "px"
        cursor[0].style.opacity = "1" 
      }

      const removeBespokeCursor = e => {
        cursor[0].style.opacity = "0" 
      }

      const addBespokeCursor = e => {
        cursor[0].style.opacity = "1" 
      }
      wrapper[0].addEventListener('mouseleave', removeBespokeCursor)
      wrapper[0].addEventListener('mouseenter' , addBespokeCursor)  
      window.addEventListener('mousemove', moveBespokeCursor)
      window.addEventListener('scroll', removeBespokeCursor)
    }

  },[]);



    //open menu
    function openMenu(){
      var menu = document.getElementsByClassName('menu')  
      menu[0].classList.add('active')
      
  
      if(window.innerWidth > 1024){
        disableScroll()
      }
    }

    return(


<div className="global-wrapper" data-is-root-path="kk">
    {/* <Header isHomepage={isHomepage} navigation={navigation} /> */}

    <div className="mouse-cursor">
        <p className="cursor-caption"></p>
        
      <svg      
     
        width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9381 18.0151L34.7451 40.8222L40.8222 34.7451L18.0151 11.9381L18.3015 11.0669C18.3015 11.0669 18.5909 10.7775 20.0468 11.076C21.5028 11.3744 24.7162 14.009 28.7796 12.2848C32.843 10.5605 34.5673 6.49708 34.5673 6.49708L28.1345 0.0643358C28.1345 0.0643358 24.3755 4.4081 19.7303 6.12933C15.0851 7.85056 8.07362 1.99658 8.07362 1.99658L5.17978 4.89041L4.8904 5.17979L1.99657 8.07362C1.99657 8.07362 7.85055 15.0851 6.12932 19.7303C4.40809 24.3755 0.0643263 28.1345 0.0643263 28.1345L6.49707 34.5673C6.49707 34.5673 10.5605 32.843 12.2847 28.7796C14.009 24.7162 11.3744 21.5028 11.076 20.0469C10.7775 18.5909 11.0669 18.3015 11.0669 18.3015L11.9381 18.0151Z" fill="#DC25FD"/>
      </svg>
      </div>

 <Menu ></Menu> 

    <div className="header container">
        <AniLink cover bg="#f1f1f1" duration={1}  to="/" className="header__logo" onMouseEnter={e => handleMouseHoverLeft(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>
          <h2>Lattimore</h2>
          <Plus />
          <h2>Friends</h2>
        </AniLink>       
        <div 
          role="button"
          tabIndex={0}
          className="header__open" 
          onMouseEnter={e => handleMouseHoverRight(e)}
          onMouseLeave={e =>handleMouseHoverExit(e)}
          onClick={e => openMenu()}   
          onKeyDown={e => openMenu()}  
        >
          <Plus />
        </div>        
      </div>

    <main className={`banner ${pageWrap ? "page-wrap container" : ""}`}>{children}</main>




      <div className="footer container">
        <div className="footer-desktop">
          <div className="footer-desktop__col-one">
            <h4 >2021 c hewoco ltd. <a onMouseEnter={e => handleMouseHoverRight(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>Legal area.</a></h4>
          </div>
          <div className="footer-desktop__col-two">
          <AniLink cover bg="#f1f1f1" duration={1}  to="/" className="header__logo" onMouseEnter={e => handleMouseHoverRight(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>
            <h2>Lattimore</h2>
            <Plus />
            <h2>Friends</h2>
          </AniLink>   
          </div>
          <div className="footer-desktop__col-three">
            <h4 onMouseEnter={e => handleMouseHoverRight(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>Awwwards</h4>
            <h4 onMouseEnter={e => handleMouseHoverRight(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>Instagram</h4>
            <h4 onMouseEnter={e => handleMouseHoverRight(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>LinkedIn</h4>
          </div>
        </div>

        <div className="footer-mobile ">
          <div className="footer-mobile__col-one ">
            <AniLink  bg="#f1f1f1" duration={1} to="/"  >
              <div className="menu__logo"  onMouseEnter={e => handleMouseHoverLeft(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>
              <h1>Lattimore</h1>
              <h1>Friends</h1>
              {/* <Plus /> */}
              </div>
            </AniLink>

            <h4 >2021 c hewoco ltd. <a onMouseEnter={e => handleMouseHoverRight(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>Legal area.</a></h4>
          </div>
          <div className="footer-mobile__col-two ">
            <h4>Awwwards</h4>
            <h4>Instagram</h4>
            <h4>LinkedIn</h4>
          </div>
        </div>
         
      </div>


    {/* <Footer /> */}
  </div>
    )
    }





// import React, { useEffect } from 'react';

// // import Menu from "../components/menu"
// import {handleMouseHoverRight, handleMouseHoverExit, handleMouseHoverLeft,  getActualViewheight, disableScroll, enableScroll } from '../utils/helpers.js'
// // import Plus from "../images/plus.svg"
// import "../scss/base/base.scss"
// // import "../scss/components/header.scss"
// // import "../scss/components/footer.scss"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

// const Layout = ({ location="", title, children }) => {
//   // const rootPath = `${__PATH_PREFIX__}/`
//   // const isRootPath = location.pathname === rootPath
//   let header
//   let footer
//   let pageWrap = false 

  // useEffect(() => {

  //   enableScroll()

  //   getActualViewheight()

  //   // checkIfTouch()
  //   if (('ontouchstart' in window) ||
  //   (navigator.maxTouchPoints > 0) ||
  //   (navigator.msMaxTouchPoints > 0)) {
  //     return
  //   }else{
  //     const cursor = document.getElementsByClassName('mouse-cursor')  
  //     const wrapper = document.getElementsByClassName('global-wrapper')  

  //     const moveBespokeCursor = e => {
  //       cursor[0].style.left = e.pageX - 12 + "px"
  //       cursor[0].style.top = e.pageY - 12 + "px"
  //       cursor[0].style.opacity = "1" 
  //     }

  //     const removeBespokeCursor = e => {
  //       cursor[0].style.opacity = "0" 
  //     }

  //     const addBespokeCursor = e => {
  //       cursor[0].style.opacity = "1" 
  //     }
  //     wrapper[0].addEventListener('mouseleave', removeBespokeCursor)
  //     wrapper[0].addEventListener('mouseenter' , addBespokeCursor)  
  //     window.addEventListener('mousemove', moveBespokeCursor)
  //     window.addEventListener('scroll', removeBespokeCursor)
  //   }

  // },[]);

  // //open menu
  // function openMenu(){
  //   var menu = document.getElementsByClassName('menu')  
  //   menu[0].classList.add('active')
    

  //   if(window.innerWidth > 1024){
  //     disableScroll()
  //   }
  // }


//   // if home
//   // if (isRootPath) {
//   //   header = (
//   //     <div></div>
//   //   )

//   //   footer = (
//   //     <div></div>
//   //   )
//   // } else {
//     pageWrap = true
//     header = (
      // <div className="header container">
      //   <AniLink cover bg="#f1f1f1" duration={1}  to="/" className="header__logo" onMouseEnter={e => handleMouseHoverLeft(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>
      //     <h2>Lattimore</h2>
      //     {/* <Plus /> */}
      //     <h2>Friends</h2>
      //   </AniLink>       
      //   <div 
      //     role="button"
      //     tabIndex={0}
      //     className="header__open" 
      //     onMouseEnter={e => handleMouseHoverRight(e)}
      //     onMouseLeave={e =>handleMouseHoverExit(e)}
      //     onClick={e => openMenu()}   
      //     onKeyDown={e => openMenu()}  
      //   >
      //     {/* <Plus /> */}
      //   </div>        
      // </div>
//     )
    // footer = (
    //   <div className="footer container">
    //     <div className="footer-desktop">
    //       <div className="footer-desktop__col-one">
    //         <h4 >2021 c hewoco ltd. <a onMouseEnter={e => handleMouseHoverRight(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>Legal area.</a></h4>
    //       </div>
    //       <div className="footer-desktop__col-two">
    //       <AniLink cover bg="#f1f1f1" duration={1}  to="/" className="header__logo" onMouseEnter={e => handleMouseHoverRight(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>
    //         <h2>Lattimore</h2>
    //         {/* <Plus /> */}
    //         <h2>Friends</h2>
    //       </AniLink>   
    //       </div>
    //       <div className="footer-desktop__col-three">
    //         <h4 onMouseEnter={e => handleMouseHoverRight(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>Awwwards</h4>
    //         <h4 onMouseEnter={e => handleMouseHoverRight(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>Instagram</h4>
    //         <h4 onMouseEnter={e => handleMouseHoverRight(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>LinkedIn</h4>
    //       </div>
    //     </div>

    //     <div className="footer-mobile ">
    //       <div className="footer-mobile__col-one ">
    //         <AniLink  bg="#f1f1f1" duration={1} to="/"  >
    //           <div className="menu__logo"  onMouseEnter={e => handleMouseHoverLeft(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>
    //           <h1>Lattimore</h1>
    //           <h1>Friends</h1>
    //           {/* <Plus /> */}
    //           </div>
    //         </AniLink>

    //         <h4 >2021 c hewoco ltd. <a onMouseEnter={e => handleMouseHoverRight(e)} onMouseLeave={e =>handleMouseHoverExit(e)}>Legal area.</a></h4>
    //       </div>
    //       <div className="footer-mobile__col-two ">
    //         <h4>Awwwards</h4>
    //         <h4>Instagram</h4>
    //         <h4>LinkedIn</h4>
    //       </div>
    //     </div>
         
    //   </div>
//     )
//   // }

//   return (
//     <div className="global-wrapper" data-is-root-path="kk"
//     // {isRootPath}
//     >
     
      // <div className="mouse-cursor">
      //   <p className="cursor-caption"></p>
        
      // <svg      
     
      //   width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      //   <path d="M11.9381 18.0151L34.7451 40.8222L40.8222 34.7451L18.0151 11.9381L18.3015 11.0669C18.3015 11.0669 18.5909 10.7775 20.0468 11.076C21.5028 11.3744 24.7162 14.009 28.7796 12.2848C32.843 10.5605 34.5673 6.49708 34.5673 6.49708L28.1345 0.0643358C28.1345 0.0643358 24.3755 4.4081 19.7303 6.12933C15.0851 7.85056 8.07362 1.99658 8.07362 1.99658L5.17978 4.89041L4.8904 5.17979L1.99657 8.07362C1.99657 8.07362 7.85055 15.0851 6.12932 19.7303C4.40809 24.3755 0.0643263 28.1345 0.0643263 28.1345L6.49707 34.5673C6.49707 34.5673 10.5605 32.843 12.2847 28.7796C14.009 24.7162 11.3744 21.5028 11.076 20.0469C10.7775 18.5909 11.0669 18.3015 11.0669 18.3015L11.9381 18.0151Z" fill="#DC25FD"/>
      // </svg>
      // </div>

//       {/* <Menu ></Menu> */}
//       <header className="global-header">{header}</header>
//       <main className={`banner ${pageWrap ? "page-wrap container" : ""}`}>{children}</main>
//       <footer className="global-footer">{footer}</footer>
//     </div>
//   )
// }

// export default Layout



