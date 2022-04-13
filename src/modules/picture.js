import image from '../assets/images/pancake.jpg';

const popContainer = document.querySelector('.comment-popup');

// /////////////////// Create dom elements

const createElement = (
  element = '',
  className = [],
  text = '',
  src = '',
  alt = '',
  href = '',
  type = '',
  name = '',
  id = '',
  placeholder = '',
  cols = '',
  rows = '',
) => {
  const elements = document.createElement(element);
  elements.classList.add(...className);
  elements.textContent = text;
  elements.src = src;
  elements.alt = alt;
  elements.href = href;
  elements.type = type;
  elements.name = name;
  elements.id = id;
  elements.placeholder = placeholder;
  elements.cols = cols;
  elements.rows = rows;

  return elements;
};

const displayPopup = () => {
  const containerImage = createElement('div', ['container-img']);
  const img = createElement('img', ['pop-img'], '', image, 'pancake');
  const anchor = createElement('a', '', '', '', '', '#');
  const icons = createElement('i', ['fa-solid', 'fa-xmark', 'fa-3x']);
  const firstHeader = createElement('h2', '', 'Menu 3');
  const aboutContainer = createElement(' div', ['about']);
  const descriptionCont = createElement('div', ['description']);
  const paragraphOne = createElement('p', '', 'Food: pancake');
  const paragraphTwo = createElement('p', '', 'Origin: America');
  const desCont = createElement('div', ['des']);
  const paragraphThree = createElement('p', '', 'Calories: 200kcal');
  const paragraphFour = createElement('p', '', 'Toppings: Chocolate Syrup');
  const secondHeader = createElement('h5', '', 'Comments(2)');
  const paragraphFive = createElement(
    'p',
    'date',
    '03/04/2022 Priya: The perfect morning breakfast!',
  );
  const paragraphSix = createElement('p', 'date', '09/04/2022 Alex: I love');
  const thirdHeader = createElement('h5', '', 'Add a comment');
  const form = createElement('form');
  const input = createElement(
    'input',
    '',
    '',
    '',
    '',
    '',
    'text',
    'name',
    'name',
    'Your name',
  );
  const textarea = createElement(
    'textarea',
    '',
    '',
    '',
    '',
    '',
    '',
    'textarea',
    'textarea',
    'Your insights',
    '30',
    '5',
  );
  const button = createElement('button', '', 'comment');

  containerImage.appendChild(img, anchor);
  anchor.appendChild(icons);
  descriptionCont.appendChild(paragraphOne, paragraphTwo);
  desCont.appendChild(paragraphThree, paragraphFour);
  aboutContainer.appendChild(descriptionCont, desCont);
  form.appendChild(input, textarea, button);

  popContainer.append(paragraphOne);
};

export { displayPopup as default };
