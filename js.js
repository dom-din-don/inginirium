
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

