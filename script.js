const heading = document.querySelector('.heading');

const button = document.querySelector('.root');

const list = ["I love You!", "You're the Best", "Your're Handsom", "You're Wonderful"]
const randomList = Math.trunc(Math.random() * list.length)

button.addEventListener('click', ()=>{
    heading.textContent = list[randomList];
})