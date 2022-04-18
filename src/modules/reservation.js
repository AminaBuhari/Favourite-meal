import { reservations, getReservations, postReservations } from './config';
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

const addReservations = () => {
    form.addEventListener ('submit', (event) => {
     event.preventDefault();
     const name = form.elememts.name.value;
     const dateStart = form.elements.date.value;
     const dateEnd = form.elememts.end.value;
     reservations.username = name;
     reservations.date_start = dateStart;
     reservations.date_end = dateEnd;
     postReservations(reservations);
     


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
      const foodname = createElement('h2', ['food-name'], e.strCategory);
      const comment = createElement('h2', ['comment'], 'Reservations');
      const aboutCont = createElement('div', ['about']);
      const desc1 = createElement('div', ['desc1']);
      const desc2 = createElement('div', ['desc2']);
      const p1 = createElement('p', '', `Food: ${e.strCategory}`);
      const p2 = createElement('p', '', 'Origin: America');
      const p3 = createElement('p', '', 'Calories: 200kcal');
      const p4 = createElement('p', '', 'Toppings: Chocolate syrup');

        imgCont.append(imag);
        desc1.append(p1, p2);
        desc2.append(p3, p4);
        aboutCont.append(desc1, desc2);
        closePopup(close);

        main.append(foodname, aboutCont, comment);
    });
};

export { displayReserve as default };