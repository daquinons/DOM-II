// 1. Scroll event

let nav = document.querySelector('.main-navigation');
let lastScrollTop = 0;
nav.style.opacity = 1;
document.addEventListener("scroll", () => {
   let scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
   if (scrollTop > lastScrollTop){
      if (nav.style.opacity > 0) {
        nav.style.opacity = nav.style.opacity - 0.1;
      }

   } else {
      if (nav.style.opacity < 1) {
        nav.style.opacity = 1;
      }
   }
});


// 2. Mouseover event

let busImage = document.querySelector('.intro img');
busImage.addEventListener('mouseover', (event) => {
  event.target.style.opacity = 0.5;
  setTimeout(function() {
    event.target.style.opacity = 1;
  }, 1000);
}, false);

// 3.  Keydown event

document.addEventListener('keydown', () => {
  document.body.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
})

// 4. Wheel event

let mapImage = document.querySelector('.img-content img');
let rotate = 0;
document.addEventListener('wheel', () => {
  rotate += 45;
  if (rotate > 360) {
    rotate = 0;
  }
  mapImage.setAttribute('style',`transform:rotate(${rotate}deg)`);
})