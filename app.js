const hero = document.querySelector('.hero')
const mobileNav = document.getElementById('mobileNav')
const mobileNavContainer = document.querySelector('.mobileNavContainer')
const hamburger = document.getElementById('hamburger')
mobileNav.addEventListener('click', () => {
    mobileNavContainer.classList.toggle('active')
    if(mobileNavContainer.classList.contains('active')) {
        hamburger.src = './images/icon-close.svg'
        hero.style.opacity = 0.5;
    } else {
        hamburger.src = './images/icon-hamburger.svg'
        hero.style.opacity = 1;
    }
})

