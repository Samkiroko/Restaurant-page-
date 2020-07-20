export default function header() {
  const content = document.getElementById('content');

  const header = document.createElement('div');
  header.classList.add('header');

  const logo = document.createElement('div');
  logo.classList.add('logo');
  header.appendChild(logo);

  const bounce = document.createElement('div');
  bounce.classList.add('bounce');

  const arrowDown = document.createElement('p');
  arrowDown.classList.add('arrowDown');
  bounce.appendChild(arrowDown);

  header.appendChild(bounce);

  content.appendChild(header);

  const nav = document.createElement('nav');

  const menu = document.createElement('ul');
  menu.classList.add('menu');

  const li1 = document.createElement('li');
  li1.classList.add('menu-item');
  li1.id = 'about';
  li1.textContent = 'About';
  menu.appendChild(li1);

  const li2 = document.createElement('li');
  li2.classList.add('menu-item');
  li2.id = 'menu';
  li2.textContent = 'Menu';
  menu.appendChild(li2);

  const li3 = document.createElement('li');
  li3.classList.add('menu-item');
  li3.id = 'location';
  li3.textContent = 'Map';
  menu.appendChild(li3);

  nav.appendChild(menu);

  content.appendChild(nav);
}
