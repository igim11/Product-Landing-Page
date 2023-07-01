let message = document.getElementById('thank-you-message');

let thankYou = function(event) {
  event.preventDefault();
  message.textContent = 'Thank you for registering!'
}

let form = document.getElementById('form');
form.addEventListener('submit', thankYou);