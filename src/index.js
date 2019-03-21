import { initMap } from './js/ymaps';

window.onload = initMap();

const map = document.querySelector('#map');

// addEventListener('click', )



const listPoints = [
  {
    name: 'Иван',
    last_name: 'Иванов',
  },
  {
    name: 'Олег',
    last_name: 'Иванов',
  },
  {
    name: 'Денис',
    last_name: 'Иванов',
  },
  {
    name: 'Иван',
    last_name: 'Иванов',
  },
  {
    name: 'Олег',
    last_name: 'Иванов',
  },
  {
    name: 'Денис',
    last_name: 'Иванов',
  },
  {
    name: 'Иван',
    last_name: 'Иванов',
  },
  {
    name: 'Олег',
    last_name: 'Иванов',
  },
  {
    name: 'Денис',
    last_name: 'Иванов',
  },
  {
    name: 'Оля',
    last_name: 'Иванов',
  }
];

map.innerHTML = render({listPoints});