let burgur = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');

console.log(burgur);

burgur.addEventListener('click',()=>{
    navbar.classList.toggle('v-nav');
})
