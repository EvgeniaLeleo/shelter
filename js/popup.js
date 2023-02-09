/**
 * Popup
 */

const popupCloseBtn = document.createElement('div');
const popupImg = document.createElement('div');
const popupTextContent = document.createElement('div');
const popupHeading = document.createElement('p');
const popupSubheading = document.createElement('p');
const popupText = document.createElement('p');
const popupDetails = document.createElement('ul');
const popupAge = document.createElement('li');
const popupInoculation = document.createElement('li');
const popupDisease = document.createElement('li');
const popupParasites = document.createElement('li');

function showPopup({
  name,
  img,
  type,
  breed,
  description,
  age,
  inoculations,
  diseases,
  parasites,
}) {
  scrollToggle();
  popup.classList.add('popup');
  popupCloseBtn.classList.add('popup__close');
  popupImg.classList.add('popup__img');
  popupTextContent.classList.add('popup__text-content');
  popupHeading.classList.add('popup__heading');
  popupSubheading.classList.add('popup__subheading');
  popupText.classList.add('popup__text');
  popupDetails.classList.add('popup__details');
  popupAge.classList.add('popup__detail');
  popupInoculation.classList.add('popup__detail');
  popupDisease.classList.add('popup__detail');
  popupParasites.classList.add('popup__detail');

  popupCloseBtn.innerHTML =
    '<img src="../../assets/icons/cross-btn.svg" alt="close button" class="">';
  popupImg.style.backgroundImage = `url(${img})`;
  popupHeading.textContent = name;
  popupSubheading.innerHTML = `${type} - ${breed}`;
  popupText.textContent = description;
  popupAge.innerHTML = `<img class="dot" src="../../assets/icons/dot.svg" alt="dot"><strong>Age:</strong>${age}`;
  popupInoculation.innerHTML = `<img class="dot" src="../../assets/icons/dot.svg" alt="dot"><strong>Inoculations:</strong><span>${inoculations.join(
    ', ',
  )}</span>`;
  popupDisease.innerHTML = `<img class="dot" src="../../assets/icons/dot.svg" alt="dot"><strong>Diseases:</strong><span>${diseases.join(
    ', ',
  )}</span>`;
  popupParasites.innerHTML = `<img class="dot" src="../../assets/icons/dot.svg" alt="dot"><strong>Parasites:</strong><span>${parasites.join(
    ', ',
  )}</span>`;

  document.body.appendChild(popup);
  popup.appendChild(popupCloseBtn);
  popup.appendChild(popupImg);
  popup.appendChild(popupTextContent);
  popupTextContent.appendChild(popupHeading);
  popupTextContent.appendChild(popupSubheading);
  popupTextContent.appendChild(popupText);
  popupTextContent.appendChild(popupDetails);
  popupDetails.appendChild(popupAge);
  popupDetails.appendChild(popupInoculation);
  popupDetails.appendChild(popupDisease);
  popupDetails.appendChild(popupParasites);
}

function hidePopup() {
  if (document.querySelector('.popup')) {
    document.body.removeChild(popup);
  }

  scrollToggle();
}

/**
 * When clicking outside the boundaries of the popup, on the darkened area, or on the button with a cross, the popup and the blackout disappear
 */

popupCloseBtn.addEventListener('click', () => {
  shadow.classList.remove('shadow_visible');
  hidePopup();
});

shadow.addEventListener('click', () => {
  hidePopup();
}); //see script.js

/**
 * When hovering the cursor over a darkened area or a button with a cross, i.e. when the hover event occurs, the button gets a hover effect. When hovering over the window (block) of the pop-up, nothing happens
 */

shadow.addEventListener('mouseover', () => {
  popupCloseBtn.style.background = '#fddcc4';
  popupCloseBtn.style.border = '2px solid #fddcc4';
});

shadow.addEventListener('mouseout', () => {
  popupCloseBtn.style.background = 'transparent';
  popupCloseBtn.style.border = '2px solid #f1cdb3';
});

popupCloseBtn.addEventListener('mouseover', () => {
  popupCloseBtn.style.background = '#fddcc4';
  popupCloseBtn.style.border = '2px solid #fddcc4';
  popupCloseBtn.style.cursor = 'pointer';
});

popupCloseBtn.addEventListener('mouseout', () => {
  popupCloseBtn.style.background = 'transparent';
  popupCloseBtn.style.border = '2px solid #f1cdb3';
});

/**
 * When hovering the cursor over the window (block) of the popup, nothing happens.
 */

popupImg.addEventListener('mouseover', () => {
  popupCloseBtn.style.background = 'transparent';
  popupCloseBtn.style.border = '2px solid #f1cdb3';
});

popupTextContent.addEventListener('mouseover', () => {
  popupCloseBtn.style.background = 'transparent';
  popupCloseBtn.style.border = '2px solid #f1cdb3';
});
