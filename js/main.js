// ============ SHOW MENU ============
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

// ====== MENU SHOW ======
// Kiểm tra biến có tồn tại không?
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// ====== MENNU HIDDEN ======
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// ============ REMOVE MENU MOBILE ============
const navLink = document.querySelectorAll('.nav__link');
console.log(navLink.length);

function linkAction() {
  const navMenu = document.getElementById('nav-menu');

  // Khi click vào một nav - link.menu tự động ẩn đi
  navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

// ========= HOME SWIPER ===========
let homeSwiper = new Swiper('.home-swiper', {
  spaceBetween: 30,
  loop: 'true',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// ============== CHANGE BACKGROUND HEADER =============
function scrollHeader() {
  const header = document.getElementById('header');
  // Khi scroll hơn 50 đơn vị chiều cao thì thêm class  scroll-header vào header-tag
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

// =============== NEW SWIPER =================
let newSwiper = new Swiper('.new-swiper', {
  centeredSlides: false,
  slidesPerView: 'auto',
  spaceBetween: 16,
  loop: 'true',
});

// ============= SCROLL SECTIONS ACTIVE LINK ===========
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

// ================= SHOW SCROLL UP ===============
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // Khi scroll hơn 460 đơn vị chiều cao, thêm class show-scroll vào tag
  if (this.scrollY >= 460) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp);

// ================== SCROLL REVEAL ANIMATION ==============
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal('.home-swiper, .new-swiper, .newsletter__container');
sr.reveal('.category__data, .trick__content, .footer__container', {
  interval: 100,
});
sr.reveal('.about__data, .discount__img', { origin: 'left' });
sr.reveal('.about__img, .discount__data', { origin: 'right' });
