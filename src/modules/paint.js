/* eslint-disable import/extensions */
import { getData } from './config';
import { numberOfLikes, like } from './controller';
import displayPopup from './picture';
import diplayReserve from './reservation.js';

const logo = 'https://static.photocrowd.com/upl/DF/cms.kqBA86TWO9ELumnHrQTg-v2b.jpeg';
const logoContainer = document.querySelector('.logo');
const mainContainer = document.querySelector('.main');
const itemCounter = document.querySelector('.item-counter');

// /////////////////// Create dom elements
const createElement = (
  element = '',
  className = [],
  text = '',
  src = '',
  alt = '',
) => {
  const newElement = document.createElement(element);
  newElement.classList.add(...className);
  newElement.textContent = text;
  newElement.src = src;
  newElement.alt = alt;
  return newElement;
};

// /////////////////// Display Logo
const displayLogo = () => {
  const logoImg = createElement('img', ['logo-img'], '', logo, 'LOGO');
  logoContainer.appendChild(logoImg);
};

// /////////////////// Display number of favorite food
const displayCount = (count) => {
  itemCounter.textContent = count;
};

const displayFood = async () => {
  let count = 0;
  const data = await getData();
  data.forEach(async (e) => {
    const noLikes = await numberOfLikes(e.idCategory);
    const foodCont = createElement('div', ['main__food']);
    const foodImg = createElement(
      'img',
      ['main__food--img'],
      '',
      e.strCategoryThumb,
      'Favorite Food',
    );
    const foodDesc = createElement('div', ['main__food--desc']);
    const desc = createElement('div', ['desc']);
    const descCard = createElement('div', ['card']);
    const descPara = createElement('p', [], e.strCategory);
    const likes = createElement('div', ['likes']);
    const icon = createElement('div', ['icon']);
    const likesPara = createElement('p');
    const numLikes = createElement('span', ['num-likes'], noLikes);
    const spanLikes = createElement('span', [], ' likes');
    const commButton = createElement('button', ['main__food--btn'], 'Comments');
    const resButton = createElement('button', ['main__food--btn', 'res'], 'Reservations');

    desc.appendChild(descPara);
    likesPara.append(numLikes, spanLikes);
    likes.append(icon, likesPara);
    descCard.append(desc, likes);
    foodDesc.append(descCard, commButton, resButton);
    foodCont.append(foodImg, foodDesc);
    mainContainer.appendChild(foodCont);
    count += 1;

    diplayReserve(resButton, e);
    displayPopup(commButton, e);

    displayCount(count);
    like(icon, e.idCategory, numLikes);
  });
};

export {
  displayLogo, displayCount, displayFood, createElement,
};
