// Get references to the button and the contact div
const formButton = document.querySelector('.form-button');
const closeButton = document.querySelector('button');
const contactDiv = document.querySelector('.contact');

// Add a click event listener to the button
formButton.addEventListener('click', () => {
    // Move the contact div to the bottom of the page
    contactDiv.style.position = 'absolute';
    contactDiv.style.bottom = '0px';
});

closeButton.addEventListener('click', () => {
    // Move the contact div to the bottom of the page
    contactDiv.style.position = 'absolute';
    contactDiv.style.bottom = '-450px';
});