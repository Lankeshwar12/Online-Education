let menuBtn = document.querySelector('menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-solid-times');
    navbar.classList.toggle('active');
}