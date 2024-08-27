
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('.button');
    button.addEventListener("click", (event) => {
        const elem = event.target;
        elem.classList.add('click'); 
        setTimeout(function() {
            elem.classList.remove('click'); 
        }, 400);
    });
});

const main_container = document.querySelector('.global__cta');
const blocks = document.querySelectorAll('.global__cta__pic');

const mainW = main_container.offsetWidth;
const mainH = main_container.offsetHeight;

const shakeX = 10;
const shakeY = 20;

let elem = null;
let shakeController = null;

for (elem of blocks) {

  elem.style.left = randomNumber(0, mainW - elem.offsetWidth - shakeX) + 'px';
  elem.style.top = randomNumber(0, mainH - elem.offsetHeight - shakeY) + 'px';

  elem.addEventListener('mouseover', (e) => {
    elem = e.target;
    shakeController = setInterval(shake, 10);
  })

  elem.addEventListener('mouseout', (e) => {
    elem.style.transform = null;
    clearInterval(shakeController);
  })
}

function shake() {
  elem.style.transform = `translate(
    ${randomNumber(-shakeX, shakeX)}px,
    ${randomNumber(-shakeY, shakeY)}px
  )`;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let text = 'и запишем на курсы'
let content = document.querySelector('#content')

for (let i in [...text]) {
  let letter = document.createElement('span')
  letter.textContent = [...text][i]
  if(letter.textContent.match(/\s/)) {
    letter.style.margin = 'auto 3px'
  }
  letter.style.animationDelay = i/10+'s'
  content.appendChild(letter)
}

