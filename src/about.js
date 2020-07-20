export default function about() {
  const aboutSelected = document.getElementById('about');
  aboutSelected.classList.add('menu-item-selected');

  const content = document.getElementById('content');

  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('inner-content');

  const h1 = document.createElement('h1');
  h1.textContent = 'About us';
  aboutContainer.appendChild(h1);

  const aboutText = document.createElement('p');
  aboutText.textContent = `Wasabi's Sushi Bar serves a wide selection of sushi classics, 
                                such as sashimi, nigiri and maki sushi. In addition, our sushi
                                chefs exhibit many modern interpretations and innovations of 
                                sushi dishes in our specialty signature rolls. We take pride 
                                and passion in serving this artistic culinary form. The exclusive 
                                use of high quality and fresh ingredients is our top priority.`;
  aboutText.style.padding = '0 20%';
  aboutContainer.appendChild(aboutText);

  const img = document.createElement('img');
  img.src = 'images/kitchen.jpeg';
  img.classList.add('about-img');
  aboutContainer.appendChild(img);

  content.appendChild(aboutContainer);
}
