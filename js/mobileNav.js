const mobileAnchors = document.querySelector('.nav-mobile__anchors');
const burgerBtn = document.querySelector('.burger-icon');
const xIcon = document.querySelector('.fa-times');
const barsIcon = document.querySelector('.fa-bars');
const anchorList = document.querySelectorAll('a.nav-mobile__item');

const handleNav = () => {
    mobileAnchors.classList.toggle('active-menu');
    burgerBtn.classList.toggle('active-menu');
    xIcon.classList.toggle('hide');
    barsIcon.classList.toggle('hide');
} 

anchorList.forEach(singleA => {
    singleA.addEventListener('click', handleNav);
});
burgerBtn.addEventListener('click', handleNav);