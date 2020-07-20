export default function location() {
  const locationSelected = document.getElementById('location');
  locationSelected.classList.add('menu-item-selected');

  const content = document.getElementById('content');

  const locationContainer = document.createElement('div');
  locationContainer.classList.add('inner-content');

  const h1 = document.createElement('h1');
  h1.textContent = 'Find us on the map!';
  locationContainer.appendChild(h1);

  const map = document.createElement('div');
  map.id = 'map';
  map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.129669844545!2d-94.1660027847306!3d36.06594118010639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c96ed98726d917%3A0xd48b5b4c4cd62b42!2s313%20W%20Dickson%20St%20%23105%2C%20Fayetteville%2C%20AR%2072701!5e0!3m2!1sen!2sus!4v1569348521761!5m2!1sen!2sus" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>';
  locationContainer.appendChild(map);

  const h3 = document.createElement('h3');
  h3.textContent = 'Hours';
  locationContainer.appendChild(h3);

  const MTWR = document.createElement('p');
  MTWR.textContent = 'Monday - Thursday: 11:30am - 9pm';
  locationContainer.appendChild(MTWR);

  const FS = document.createElement('p');
  FS.textContent = 'Friday - Saturday: 11:30am - 10pm';
  locationContainer.appendChild(FS);

  const U = document.createElement('p');
  U.textContent = 'Sunday: 12pm - 9pm';
  locationContainer.appendChild(U);

  content.appendChild(locationContainer);
}