
// Script voor de navbar --> Als je scrolt wordt deze sticky

window.addEventListener("scroll", function (){
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});


