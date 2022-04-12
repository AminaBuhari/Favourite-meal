import logo from '../assets/images/fast-food.jpg';

const logoContainer = document.querySelector('.logo');

// /////////////////// Create dom elements
const createElement = (element = '', className = '', text = '', src = '', alt = '') => {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  newElement.textContent = text;
  newElement.src = src;
  newElement.alt = alt;
  return newElement;
};

const displayLogo = () => {
  const logoImg = createElement('img', ['logo-img'], '', logo, 'LOGO');
  logoContainer.appendChild(logoImg);
};

export default displayLogo;