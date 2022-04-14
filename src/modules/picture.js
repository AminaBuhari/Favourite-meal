import { comments, postComments, getComments } from './config.js';

const container = document.querySelector('.container');
const popWindow = document.querySelector('.popup-window');
const popHeader = document.querySelector('.pop-header');
const iconClose = document.querySelector('.icon-close');
const main = document.querySelector('.pop-main');
const close = document.querySelector('.icon-close');
const form = document.getElementById('form');
// /////////////////// Create dom elements

const createElement = (
  name = '',
  className = [],
  text = '',
  src = '',
  alt = '',
) => {
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

// "comment": "This is nice!",
//         "creation_date": "2021-01-10",
//         "username": "John"

const displayPopup = async (id, image, titlefood) => {
  const data = await getComments(id);
  data.forEach((e) => {
    const img = createElement('img', ['pop-img'], '', image, 'Picture');
    const foodname = createElement('h2', ['food-name'], titlefood);
    const comment = createElement('h2', ['comment'], 'Comments');
    const numComments = createElement('span', '', data.length);
    const aboutCont = createElement('div', ['about']);
    const desc1 = createElement('div', ['desc1']);
    const desc2 = createElement('div', ['desc2']);
    const p1 = createElement('p', '', 'Food: pancake');
    const p2 = createElement('p', '', 'Origin: America');
    const p3 = createElement('p', '', 'Calories: 200kcal');
    const p4 = createElement('p', '', 'Toppings: Chocolate syrup');
    const date = createElement('p', ['date'], e.creation_date);
    const user = createElement('p', ['user'], e.username);
    const comm = createElement('p', ['comm'], e.comment);
    const commrap = createElement('div', ['commrap']);

    popHeader.insertBefore(img, iconClose);
    commrap.append(date, user, comm);
    desc1.append(p1, p2);
    desc2.append(p3, p4);
    aboutCont.append(desc1, desc2);
    comment.append(numComments);
    main.append(foodname, aboutCont, comment, commrap);
    closePopup(close);
  });
};

// /////////////////// Display Comment
const displayComment = (btn, id, image, name) => {
  btn.addEventListener('click', () => {
    container.classList.add('hide');
    popWindow.classList.remove('hide');
    popWindow.classList.add('show');
    displayPopup(id, image, name)
    form.addEventListener('submit', (event) => {
      const name = form.elements.name.value;
      const textComment = form.elements.textarea.value;
      comments.username = name;
      comments.comment = textComment;
      comments.item_id = id;
      postComments(comments);
      form.elements.name.value = '';
      form.elements.textarea.value = '';
      event.preventDefault();
    });
  });
};

export { displayPopup, displayComment };
