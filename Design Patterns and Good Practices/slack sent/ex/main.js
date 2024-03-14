const createComponent = (tag, parentElement, text, classes) => {

};
// complex
// Done
const createCard = (imgPath, cardTitle, cardDescription, buttonText, parentElement) => {
  // card
  const card = document.createElement('div');
  // img
  createImage(imgPath, card);
  // card-body
  const cardBody = document.createElement('div');
  // title
  const cardTitleWrapper = document.createElement('h1');
  const cardTitleElement = document.createTextNode(cardTitle);
  // description
  const cardDescWrapper = document.createElement('p');
  const cardDescElement = document.createTextNode(cardDescription);


  // CSS classes
  card.classList.add('card');
  cardBody.classList.add('card-body');


  // appends
  card.appendChild(cardBody);
  cardBody.appendChild(cardTitleWrapper);
  cardBody.appendChild(cardDescWrapper);
  cardTitleWrapper.appendChild(cardTitleElement);
  cardDescWrapper.appendChild(cardDescElement);
  // button
  createButton(buttonText, cardBody);

  parentElement.appendChild(card);
};


// primitive
// Done
const createButton = (buttonText, parentElement) => {
  const button = document.createElement('button');
  const buttonTextElement = document.createTextNode(buttonText);

  button.classList.add('btn');
  button.classList.add('theme-primary');

  button.appendChild(buttonTextElement);

  parentElement.appendChild(button);
};

// primitive
// Done
const createWrapper = (elementName, parentElement) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add(elementName+'-wrapper');
  parentElement.appendChild(wrapper);
};

// complex
const createCards = (parentElement) => {
  createWrapper('card', parentElement);
  createCard('Ex1.jpg', 'hello', 'Lorem ipsum', 'Test Button', document.querySelector('.card-wrapper'));
  createCard('Ex1.jpg', 'hello', 'Lorem ipsum', 'Test Button', document.querySelector('.card-wrapper'));
  createCard('Ex1.jpg', 'hello', 'Lorem ipsum', 'Test Button', document.querySelector('.card-wrapper'));
  createCard('Ex1.jpg', 'hello', 'Lorem ipsum', 'Test Button', document.querySelector('.card-wrapper'));
};

// primitive
const createButtons = (parentElement) => {
  createWrapper('button', parentElement);
  createButton('Sunt in wrapper', document.querySelector('.button-wrapper'));
  createButton('Sunt in wrapper', document.querySelector('.button-wrapper'));
  createButton('Sunt in wrapper', document.querySelector('.button-wrapper'));
  createButton('Sunt in wrapper', document.querySelector('.button-wrapper'));
  createButton('Sunt in wrapper', document.querySelector('.button-wrapper'));
};

// primitive
const createListElement = (elementText, parentElement, menu)=>{
  const listsItems = document.createElement('li');

  const listText = document.createTextNode(elementText);
  if (menu) {
    const link = document.createElement('a');
    link.href = '#';
    link.appendChild(listText);
    listsItems.appendChild(link);
  } else {
    listsItems.appendChild(listText);
  }

  listsItems.classList.add('list-design');

  parentElement.appendChild(listsItems);
};

// complex
const createList = (Elements, parentElement, menu)=>{
  const lists = document.createElement('ul');
  for (let i=0; i<=Elements.length-1; i++) {
    createListElement(Elements[i], lists, menu);
  }

  parentElement.appendChild(lists);
};

// complex
// Done
const createAlert = ( alertText, typeofAlert, parentElement) =>{
  alerta = document.createElement('div');

  const TextAlert = document.createTextNode(alertText);
  alerta.appendChild(TextAlert);

  alerta.classList.add('alert');
  alerta.classList.add(typeofAlert);

  parentElement.appendChild(alerta);
};

// complex
const createBadge = (typeofHeader, titleText, badgeText, parentElement) => {
  const title = document.createElement('h'+typeofHeader);
  const textForTitle = document.createTextNode(titleText);
  const badge = document.createElement('span');
  const textForBadge = document.createTextNode(badgeText);


  title.appendChild(textForTitle);
  title.appendChild(badge);
  badge.appendChild(textForBadge);

  badge.classList.add('badge');
  badge.classList.add('bg-secondary');

  parentElement.appendChild(title);
};

// primitiv
// Done
const createImage = (imgPath, parentElement) => {
  const image = document.createElement('img');
  image.src = imgPath;
  parentElement.appendChild(image);
};


// complex
// Creem navbar
const createNavbar = (logoPath, parentElement) => {
  const navbar = document.createElement('nav');
  const homeLink = document.createElement('a');
  homeLink.href = '#';

  // createLogo
  // <nav><a><img></a></nav>
  createImage(logoPath, homeLink);

  // createMenu
  const menuItems = ['Home', 'About', 'Contact', 'Shop'];


  navbar.classList.add('navbar-theme');

  // <nav><a></a></nav>
  navbar.appendChild(homeLink);
  createList(menuItems, navbar, 1);
  // createHamburgerMenu
  createButton('', navbar);
  parentElement.appendChild(navbar);
};


const createFooter = (imgPath, parentElement) => {
  // list
  // butoane
  // wrapper
  // imagine(logo)
};
/*
<body> => document.body
=> appendChild(element, document.body) => <body> <element>
=> appendChild(imagine, element) => <body> <element> <imagine> </element> </body>
</element> </body>
</body>

*/

// generator pagina
// Ne creem pagina web
const createPage = () => {
  const textSomething = ['text1', 'text2', 'text3', 'text4', 'text5'];
  createNavbar('Ex1.jpg', document.body);
  createCards(document.body);
  createButtons(document.body);
  createWrapper('second-card', document.body);
  createCard('Ex1.jpg', 'hello', 'lorem ipsum', 'Test button', document.querySelector('.second-card-wrapper'));
  createList(textSomething, document.body, 0);

  createAlert( 'This is an alert', 'alert-primary', document.body);
  createAlert('This is an alert', 'alert-secondary', document.body);
  createAlert('This is an alert', 'alert-danger', document.body);
  createAlert('This is an alert', 'alert-success', document.body);

  createBadge(1, 'this is a badge', 'new', document.body);
  createBadge(3, 'this is a smaller badge', 'new', document.body);
};


/*
Navbar
Cards
Buttons
Footer
Badge
List
*/

// site
document.body.onload = createPage();
