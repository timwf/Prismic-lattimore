
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
// var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
export const disableScroll = () => {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener('wheel', preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  document.body.classList.add("disabled");
}

// call this to Enable
export const enableScroll = () => {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener('wheel', preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  document.body.classList.remove("disabled");
}




export const getActualViewheight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => { 
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
}


//hoverstate - exit
export const handleMouseHoverExit = () => {

  let cursorText = document.getElementsByClassName('cursor-caption')  
  cursorText[0].classList.remove('active')
  cursorText[0].innerHTML = "";  

  var cursor = document.getElementsByClassName('mouse-cursor')  
  cursor[0].classList.remove('active')    
  cursor[0].classList.remove('left-active')
};

//hoverstate - point left
export const handleMouseHoverLeft = (e) => {

  if (e.target.classList.contains("active")) {
    return
  }
  
  var cursor = document.getElementsByClassName('mouse-cursor')  
  cursor[0].classList.add('left-active')    
};

//hoverstate - point right
export const handleMouseHoverRight = (e, tape) => {

  


  if (tape) {
    let cursorText = document.getElementsByClassName('cursor-caption')  
    cursorText[0].classList.add('active')   
    cursorText[0].innerHTML = tape;
  }

  if (e.target.classList.contains("active")) {
    return
  }

  var cursor = document.getElementsByClassName('mouse-cursor')  
  cursor[0].classList.add('active')    
}





  
