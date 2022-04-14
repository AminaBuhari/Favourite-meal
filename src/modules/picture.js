import image from '../assets/images/pancake.jpg';

const popHeader = document.querySelector('.pop-header');
const iconClose = document.querySelector('.icon-close');
const main = document.querySelector('.pop-main');
// /////////////////// Create dom elements

const createElement = (name = '', className = [], text = '', src = '', alt = '') => {
  const elements = document.createElement(name);
  elements.classList.add(...className);
  elements.textContent = text;
  elements.src = src;
  elements.alt = alt;
  return elements;
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

  popHeader.insertBefore(img, iconClose);
  desc1.append(p1, p2);
  desc2.append(p3, p4);
  aboutCont.append(desc1, desc2);
  comment.append(numComments);
  main.append(foodname, aboutCont, comment);
};

export default displayPopup;