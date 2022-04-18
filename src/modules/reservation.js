import { reservations, getReservations, postReservations, getComments } from './config';
import { createElement } from './paint';

const container = document.querySelector('.container');
const pop = document.querySelector('.popup-reservation');
const imgCont = document.querySelector('.img-container');
const main = document.querySelector('.pop-res');
const close = document.querySelector('.icon-close-res');

const closePopup = (btn) => {
  btn.addEventListener('click', () => {
    container.classList.remove('hide');
    pop.classList.add('hide')
  });
};

const countComment = (data) => data.length;

const addReservations = (e, foodname, aboutCont, comment, commentGroup, numComments) => {
    form.addEventListener ('submit', (event) => {
        event.preventDefault();
        const name = form.elememts.name.value;
        const dateStart = form.elements.date.value;
        const dateEnd = form.elememts.end.value;
        reservations.username = name;
        reservations.date_start = dateStart;
        reservations.date_end = dateEnd;
        postReservations(reservations);
        const user = createElement('p', ['user'], `${name}`);
        const startDate = createElement('p', ['comm'], `${dateStart}-`);
        const endDate = createElement('p', ['comm'], `${dateEnd}`)
        const commrap = createElement('div', ['commrap']);
       
        commrap.append(user, startDate, endDate);
        commentGroup.appendChild(commrap);
        numComments.textContent = Number(numComments.textContent) + 1;
        main.append(foodname, aboutCont, comment, commentGroup);
        form.elements.name.value = '';
        form.elements.textarea.value = '';

    })

};

const displayReserve = async (btn, e) => {
  btn.addEventListener('click', async () => {
       container.classList.add('hide');
       pop.classList.remove('hide');
        pop.classList.add('show');

      main.innerHTML = '';
      imgCont.innerHTML = '';
      const imag = createElement('img', ['pop-img'], '', e.strCategoryThumb, 'Picture');
      const data = await getReservations(e.idCategory)
      const numberOfReservations = countComment(data);
      const commentGroup = createElement('div', ['comment-group']);
      const foodname = createElement('h2', ['food-name'], e.strCategory);
      const comment = createElement('h2', ['comment'], 'Reservations');
      const aboutCont = createElement('div', ['about']);
      const desc1 = createElement('div', ['desc1']);
      const desc2 = createElement('div', ['desc2']);
      const p1 = createElement('p', '', `Food: ${e.strCategory}`);
      const p2 = createElement('p', '', 'Origin: America');
      const p3 = createElement('p', '', 'Calories: 200kcal');
      const p4 = createElement('p', '', 'Toppings: Chocolate syrup');
      const numComments = createElement('span', ['comment-counter'], numberOfComments);

        imgCont.append(imag);
        desc1.append(p1, p2);
        desc2.append(p3, p4);
        aboutCont.append(desc1, desc2);
        comment.append(numComments);
        closePopup(close);

        main.append(foodname, aboutCont, comment);
    });
};

export { displayReserve as default };