import { comments, getComments, postComments } from './config.js';

const container = document.querySelector('.container');
const popWindow = document.querySelector('.popup-window');
const imgCont = document.querySelector('.img-cont');
const main = document.querySelector('.pop-main');
const close = document.querySelector('.icon-close');
const form = document.getElementById('form');
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

const addComment = (e, foodname, aboutCont, comment, commentGroup, numComments) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.elements.name.value;
    const textComment = form.elements.textarea.value;
    comments.username = name;
    comments.comment = textComment;
    comments.item_id = e.idCategory;
    postComments(comments);
    const today = new Date();
    const dateFormat = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const date = createElement('p', ['date'], dateFormat);
    const user = createElement('p', ['user'], `${name}:`);
    const comm = createElement('p', ['comm'], textComment);
    const commrap = createElement('div', ['commrap']);

    commrap.append(date, user, comm);
    commentGroup.appendChild(commrap);
    numComments.textContent = Number(numComments.textContent) + 1;
    main.append(foodname, aboutCont, comment, commentGroup);
    form.elements.name.value = '';
    form.elements.textarea.value = '';
  });
};

const displayPopup = async (btn, e) => {
  btn.addEventListener('click', async () => {
    container.classList.add('hide');
    popWindow.classList.remove('hide');
    popWindow.classList.add('show');
    main.innerHTML = '';
    imgCont.innerHTML = '';
    const img = createElement('img', ['pop-img'], '', e.strCategoryThumb, 'Picture');
    const data = await getComments(e.idCategory);
    const commentGroup = createElement('div', ['comment-group']);
    const foodname = createElement('h2', ['food-name'], e.strCategory);
    const comment = createElement('h2', ['comment'], 'Comments ');
    const aboutCont = createElement('div', ['about']);
    const desc1 = createElement('div', ['desc1']);
    const desc2 = createElement('div', ['desc2']);
    const p1 = createElement('p', '', `Food: ${e.strCategory}`);
    const p2 = createElement('p', '', 'Origin: America');
    const p3 = createElement('p', '', 'Calories: 200kcal');
    const p4 = createElement('p', '', 'Toppings: Chocolate syrup');
    const numComments = createElement('span', ['comment-counter'], data.length);

    imgCont.appendChild(img);
    desc1.append(p1, p2);
    desc2.append(p3, p4);
    aboutCont.append(desc1, desc2);
    comment.append(numComments);
    closePopup(close);
    data.forEach((ele) => {
      const commrap = createElement('div', ['commrap']);
      const date = createElement('p', ['date'], ele.creation_date);
      const user = createElement('p', ['user'], `${ele.username}:`);
      const comm = createElement('p', ['comm'], ele.comment);
      commrap.append(date, user, comm);
      commentGroup.append(commrap);
    });
    main.append(foodname, aboutCont, comment, commentGroup);
    addComment(e, foodname, aboutCont, comment, commentGroup, numComments);
  });
};

export { displayPopup as default };
