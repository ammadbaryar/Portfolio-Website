

// Hamburger menu 
const burger = document.querySelector('.hamburger')
const mobileList = document.querySelector('.mobile-menu')
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileList.classList.toggle('active')
})
const closeMobileMenu = document.querySelector('.close-mobile-menu')
closeMobileMenu.addEventListener('click', () => {
  mobileList.classList.remove('active')
  burger.classList.remove('active')
  let screenWidth = window.innerWidth;
  if(screenWidth == '768px'){
  mobileList.classList.remove('active')
  }
})


// Navbar transition on reloading the website
// document.addEventListener('DOMContentLoaded', () => {
//   var siteLogo = document.querySelector('.logo');

//   siteLogo.style.transform = 'translateX(0px)';
//   siteLogo.style.opacity = '1';

//   var navLists = document.querySelectorAll('.nav-list li');

//   navLists.forEach((navItem) => {
//     navItem.style.transition = '1.5s';
//     navItem.style.opacity = '1';
//   });

// });

// let slideBtn = document.querySelectorAll('.s-button .slider-btn')
// let clients = document.querySelectorAll('.clients')
// let counter = 0;
// slideBtn.forEach((btn) =>{
//   btn.addEventListener("click", () => {
//     slideBtn.forEach(otherBtn =>{
//       if ( otherBtn !== btn){
//         otherBtn.classList.remove('active')
//       }
//     })
//     btn.classList.add('active');
//   })
// })

const slideBtns = document.querySelectorAll('.s-button .slider-btn');
    const clients = document.querySelectorAll('.clients');
    let currentIndex = 0;

    function showTestimonial(index) {
      clients.forEach(client => {
          client.classList.remove('active');
      });

      clients[index].classList.add('active');
      currentIndex = index;
  }

  slideBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
          showTestimonial(index);
      });
  });

  showTestimonial(currentIndex); 