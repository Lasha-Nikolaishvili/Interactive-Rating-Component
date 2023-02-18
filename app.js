const feedBackBtns = document.querySelectorAll('.c-btn');
const sections = document.querySelectorAll('section');
const subBtn = document.querySelector('.c-sub-btn');
const feedBackPointSpan = document.querySelector('.feed-back-point');
let feedBackPoint;

subBtn.addEventListener('click', () => {
    if(feedBackPoint !== undefined) {
        sections[0].classList.remove('d-flex');
        sections[0].classList.add('d-none');
        sections[1].classList.remove('d-none');
        sections[1].classList.add('d-flex');
        feedBackPointSpan.innerHTML = feedBackPoint;    
    }
}) 

for(let i=0; i<feedBackBtns.length; i++) {
    feedBackBtns[i].addEventListener('click', () => {
        feedBackPoint = feedBackBtns[i].innerHTML;
    })
}

