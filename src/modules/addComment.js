
const pop = document.querySelector('.popup-window');

function toggler() {
  pop.classList.toggle('.popup-window-active');
}

document.querySelector('main__food--btn').addEventListener('click', toggler)
