'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// selecting elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');
console.log(allSection);

document.getElementById('.section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//creating and inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies to improve functionality and analytics.';
message.innerHTML =
  'We use cookies to improve functionality and analytics<button class="btn btn--close-cookie">Got it! </button>';

//header.prepend(message);
//header.append(message);
//header.append(message.cloneNode(true));

//header.before(message);
header.after(message);

// delete element

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

//////////////////////////////////////////////////

// style
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// non standard

console.log(logo.designer);
console.log(logo.getAttribute('designer'));
console.log(logo.setAttribute('company', 'Bankist'));

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));
// data attribute
console.log(logo.dataset.versionNumber);

// class
logo.classList.add('y', 'z');
logo.classList.remove('y', 'z');
logo.classList.toggle('y');
logo.classList.contains('y');

//dont use
logo.className = 'jonas';

////////////////////////////////////////////////////

// scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const S1coords = section1.getBoundingClientRect();
  console.log(S1coords);

  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  //console.log(
  //'height/width viewport',
  //document.documentElement.clientHeight,
  //document.documentElement.clientWidth
  //);
  // scrolling

  //window.scrollTo({
  //left: S1coords.left + window.pageXOffset,
  //top: S1coords.top + window.pageYOffset,

  //});

  // window.scrollTo({
  // left: S1coords.left + window.pageXOffset,
  //top: S1coords.top + window.pageYOffset,
  //behavior: 'smooth',
  //});

  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////////////////

// types of events and event handlers

//const h1 = document.querySelector('h1');
//h1.addEventListener('mouseenter', function (e) {
//alert('addEventListener: You are reading the heading');
//});

const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventListener: You are reading the heading');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//h1.onmouseenter = function (e) {
//alert('onmouseenter: You are reading the heading');
//};
