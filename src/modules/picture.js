import image from '../assets/images/pancake.jpg';

const container = document.querySelector('.container');
const popWindow = document.querySelector('.popup-window');
const popHeader = document.querySelector('.pop-header');
const iconClose = document.querySelector('.icon-close');
const main = document.querySelector('.pop-main');
const close = document.querySelector('.icon-close')
// /////////////////// Create dom elements

const createElement = (name = '', className = [], text = '', src = '', alt = '') => {
  const elements = document.createElement(name);
  elements.classList.add(...className);
  elements.textContent = text;
  elements.src = src;
  elements.alt = alt;
  return elements;
};

const closePopup = (btn) => {
  btn.addEventListener('click', () => {
    container.classList.remove('hide');
    popWindow.classList.add('hide');
  });
};


const displayPopup = () => {
  const img = createElement('img', ['pop-img'], '', image, 'Picture');
  const foodname = createElement('h2', ['food-name'], 'Menu 3');
  const comment = createElement('h2', ['comment'], 'Comments');
  const numComments = createElement('span');
  const aboutCont = createElement('div', ['about']);
  const desc1 = createElement('div', ['desc1']);
  const desc2 = createElement('div', ['desc2']);
  const p1 = createElement('p', '', 'Food: pancake');
  const p2 = createElement('p', '', 'Origin: America');
  const p3 = createElement('p', '', 'Calories: 200kcal');
  const p4 = createElement('p', '', 'Toppings: Chocolate syrup');
  const p5 = createElement('p', '', '09/06/2022 Ali:- I love food');
  const p6 = createElement('p', '', '09/02/2022 Basit:- Food is good');
   
  popHeader.insertBefore(img, iconClose);
  desc1.append(p1, p2);
  desc2.append(p3, p4);
  aboutCont.append(desc1, desc2);
  comment.append(numComments);
  main.append(foodname, aboutCont, comment, p5, p6);

 closePopup(close);
};

export default displayPopup;