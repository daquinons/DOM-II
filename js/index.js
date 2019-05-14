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

let mapImage = document.querySelectorAll('.img-content img')[0];
let rotate = 0;
document.addEventListener('wheel', () => {
  rotate += 45;
  if (rotate > 360) {
    rotate = 0;
  }
  mapImage.setAttribute('style',`transform:rotate(${rotate}deg)`);
})

// 5. Dragstart event

let veniceImage = document.querySelectorAll('.img-content img')[1];
veniceImage.addEventListener('dragstart', () => {
  veniceImage.style.visibility = 'hidden';
})

// 6. Doubleclick event

let veniceImageContainer = document.querySelectorAll('.img-content')[1];
veniceImageContainer.addEventListener('dblclick', () => {
  veniceImage.style.visibility = 'visible';
})

// 7. Click event

let thaiBoatImage = document.querySelector('.content-destination img');
let rotateSecond = 0;
thaiBoatImage.addEventListener('click', () => {
  rotateSecond += 22.5;
  if (rotateSecond > 360) {
    rotateSecond = 0;
  }

  thaiBoatImage.setAttribute('style',`transform:rotate(${rotateSecond}deg)`);
})

// 8. Mouseup event

function getSelectionText() {
  let text = "";
  let selection = window.getSelection();
  if (selection) {
      text = window.getSelection().toString();
      console.log(window.getSelection());
  } else if (document.selection && document.selection.type != "Control") {
      text = document.selection.createRange().text;
  }
  return text;
}

document.body.addEventListener('mouseup', () => {
  let selectedText = getSelectionText();
  if (selectedText.length > 0) {
    alert('Selected text: ' + selectedText);
  }
})

// 9. Load event

window.addEventListener('load', () => {
  let logo = document.querySelector('.logo-heading');
  logo.style.color = 'red';
})

// 10. Keyup event

document.addEventListener('keyup', () => {
  let buttons = document.querySelectorAll('.btn');
  buttons.forEach((button) => button.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16));
})