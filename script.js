let burgur = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');

let btn = document.querySelector('.btn-1');
let btn2 = document.querySelector('.btn-2');
let btn3 = document.querySelector('.btn-3');
let btn4 = document.querySelector('.btn-4');

let load = document.getElementById('preloader');

burgur.addEventListener('click',()=>{
    navbar.classList.toggle('v-nav');
})

window.addEventListener('load',()=>{
    load.style.display = "none";
})

window.addEventListener('load',()=>{
    btn.classList.add("button")
})

window.addEventListener('load',()=>{
    btn2.classList.add("button")
})

window.addEventListener('load',()=>{
    btn3.classList.add("button")
})

window.addEventListener('load',()=>{
    btn4.classList.add("button")
})
