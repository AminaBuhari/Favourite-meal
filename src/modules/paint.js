/* eslint-disable import/extensions */
import logo from '../assets/images/fast-food.jpg';
import { getComments, getData } from './config';
import { numberOfLikes, like } from './controller';
import { displayComment, displayPopup } from './picture';

const logoContainer = document.querySelector('.logo');
const mainContainer = document.querySelector('.main');
const itemCounter = document.querySelector('.item-counter');


// /////////////////// Create dom elements
const createElement = (element = '', className = [], text = '', src = '', alt = '') => {
  const newElement = document.createElement(element);
  newElement.classList.add(...className);
  newElement.textContent = text;
  newElement.src = src;
  newElement.alt = alt;
  return newElement;
};

const displayLogo = () => {
  const logoImg = createElement('img', ['logo-img'], '', logo, 'LOGO');
  logoContainer.appendChild(logoImg);
};

const displayCount = (count) => {
  itemCounter.textContent = count;
};



const displayFood = async () => {
  let count = 0;
  const data = await getData();
  data.forEach(async (e) => {
    const noLikes = await numberOfLikes(e.idCategory);
    const foodCont = createElement('div', ['main__food']);
    const foodImg = createElement('img', ['main__food--img'], '', e.strCategoryThumb, 'Favorite Food');
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

    desc.appendChild(descPara);
    likesPara.append(numLikes, spanLikes);
    likes.append(icon, likesPara);
    descCard.append(desc, likes);
    foodDesc.append(descCard, commButton);
    foodCont.append(foodImg, foodDesc);
    mainContainer.appendChild(foodCont);
    count += 1;
    
    displayPopup(e.idCategory, e.strCategoryThumb, e.strCategory)
    displayCount(count);
    displayComment(commButton, e.idCategory, e.strCategoryThumb, e.strCategory);

    like(icon, e.idCategory, numLikes);
  });
};

export { displayLogo, displayCount, displayFood };