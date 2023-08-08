// Sticky navbar
const topBar = document.querySelector('.top-bar')
const navbar = document.querySelector('.navigation');
const hamburgerMenu = document.querySelector('.hamburger-menu')
let topBarTop = topBar.offsetHeight;

function stickynavbar() {
    if (window.scrollY >= topBarTop) {  
        // console.log('more than 0')  
        navbar.classList.add('sticky');
        hamburgerMenu.classList.add('visible')
  } else {
    // console.log('less than 0')
    navbar.classList.remove('sticky'); 
    hamburgerMenu.classList.remove('visible')   
  }
}

window.addEventListener('scroll', stickynavbar);

hamburgerMenu.addEventListener('click', (e) => {
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active')
    } else {
        navbar.classList.add('active')
    }
})

// window.addEventListener('scroll', () => {
//     document.querySelector('header').querySelector('.visible').classList.remove('visible')
// })