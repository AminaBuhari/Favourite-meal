import image from './assets/images/pancake.jpg';

const imageContainer = document.querySelector('.container-img');

// /////////////////// Create dom elements
const createElement = (element = '', className = [], text = '', src = '', alt = '') => {
  const imageElement = document.createElement(element);
  imageElement.classList.add(...className);
  imageElement.textContent = text;
  imageElement.src = src;
  imageElement.alt = alt;
  return imageElement;
};

const displayImage = () => {
  const img = createElement('img', ['pop-img'], '', image, 'pancake');
  imageContainer.appendChild(img);
};

export { displayImage as default };