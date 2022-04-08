const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {

    hamburger.classList.remove("active")
    navMenu.classList.remove("active")

}))


const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');



window.addEventListener('load', () => {

    const TL =  gsap.timeline({paused: true});

    TL
    .staggerFrom(note, 1, {top: -50, opacity: 0, ease: "power1.out"}, 0.3)
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, { opacity: 0, ease: "power2.out"}, 0.3, "-=1")
  

    TL.play();

})