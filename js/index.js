const nav = document.querySelector('nav');

console.log(window.scrollY);
window.addEventListener('scroll', () => {
    console.log(nav);
    if (window.scrollY > 60) {
        nav.style.transition = "all 0.5s";
        nav.style.backgroundColor = "rgb(142, 227, 255)";
        nav.style.boxShadow = "0 3px 5px rgba(4, 4, 4, 0.15)";
        
    } else {
        nav.style.backgroundColor = "transparent";
        nav.style.boxShadow = "none";
    }
})