/* eslint-disable import/extensions */
import logo from '../assets/images/fast-food.jpg';
import { getData } from './config';
import numberOfLikes from './controller';

const logoContainer = document.querySelector('.logo');
const mainContainer = document.querySelector('.main');

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

const displayFood = async () => {
  const data = await getData().then((res) => res.categories);
  data.forEach(async (e) => {
    const foodCont = createElement('div', ['main__food']);
    const foodImg = createElement('img', ['main__food--img'], '', e.strCategoryThumb, 'Favorite Food');
    const foodDesc = createElement('div', ['main__food--desc']);
    const desc = createElement('div', ['desc']);
    const descCard = createElement('div', ['card']);
    const descPara = createElement('p', [], e.strCategory);
    const likes = createElement('div', ['likes']);
    const icon = createElement('i', ['icon', 'fa', 'fa-thin', 'fa-heart']);
    const likesPara = createElement('p');
    const numLikes = createElement('span', ['num-likes'], await numberOfLikes(e.idCategory));
    const spanLikes = createElement('span', [], ' likes');
    const commButton = createElement('button', ['main__food--btn'], 'Comments');

    desc.appendChild(descPara);
    likesPara.append(numLikes, spanLikes);
    likes.append(icon, likesPara);
    descCard.append(desc, likes);
    foodDesc.append(descCard, commButton);
    foodCont.append(foodImg, foodDesc);
    mainContainer.appendChild(foodCont);
  });
};

export { displayLogo, displayFood };