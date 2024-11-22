const nav = document.querySelector('nav');
const pills = document.querySelectorAll('.pillName');
const cardPills = document.querySelectorAll('.card-body .badge-pill');
const closePills = document.querySelectorAll('.badge-pill .close');
const reset = document.querySelector('#reset .badge-pill');
const cards = document.querySelectorAll('.card');
const toggler = document.querySelector('.navbar-toggler');

window.addEventListener('scroll', () => {
    if(window.innerWidth > 992) {
        if (window.scrollY > 60) {
            nav.style.transition = "all 0.5s";
            nav.style.backgroundColor = "rgb(142, 227, 255)";
            nav.style.boxShadow = "0 3px 5px rgba(4, 4, 4, 0.15)";
            
        } else {
            nav.style.backgroundColor = "transparent";
            nav.style.boxShadow = "none";
        }
    }
});

/* SVG Animations */
cards.forEach(function (card) {
    card.addEventListener('mouseover', () => {
        card.children[0].children[1].classList.add('animate__animated', 'animate__bounce', 'animate__fast', 'animate__repeat-2');
    });
});

cards.forEach(function (card) {
    card.addEventListener('mouseleave', () => {
        card.children[0].children[1].classList.remove('animate__animated', 'animate__bounce', 'animate__fast', 'animate__repeat-2');
    });
});


/* Listen to the pills filter button */
pills.forEach(function (pill) {
    pill.addEventListener('click', (e) => {
        cardPills.forEach(function (cardPill) {
            if(e.target.innerHTML != cardPill.innerHTML) {
                cardPill.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove('d-none');
                e.target.parentNode.style.backgroundColor = ""; 
            } 
        });
    });
});

closePills.forEach(function (close) {
    close.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.style.backgroundColor = "#6c757d";
        e.target.parentNode.parentNode.style.transition = "all 0.5s";

        cardPills.forEach(function (cardPill) {
            if(e.target.parentNode.previousElementSibling.previousElementSibling.innerHTML === cardPill.innerHTML)
                cardPill.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('d-none');
        });
    });
});

reset.addEventListener('click', () => {
    cardPills.forEach(function (cardPill) {
        cardPill.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove('d-none');
        
        closePills.forEach(function (close) {
                close.parentNode.style.backgroundColor = "";
                });
        });
});

toggler.addEventListener('click', () => {
    nav.style.transition = "all 0.5s";
    nav.style.backgroundColor = "rgb(142, 227, 255)";
    nav.style.boxShadow = "0 3px 5px rgba(4, 4, 4, 0.15)";
});