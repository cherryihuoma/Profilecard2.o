function updateTime() {
  const timeElement = document.getElementById("user-time");
  timeElement.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000); // updates every second

const form = document.getElementById('contactForm');
const successMsg = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  let isValid = true;

  // Reset previous errors
  document.querySelectorAll('.error').forEach(err => err.textContent = '');
  successMsg.textContent = '';

  // Name validation
  if (name.value.trim() === '') {
    document.getElementById('error-name').textContent = 'Full name is required.';
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.trim() === '') {
    document.getElementById('error-email').textContent = 'Email is required.';
    isValid = false;
  } else if (!email.value.match(emailPattern)) {
    document.getElementById('error-email').textContent = 'Enter a valid email.';
    isValid = false;
  }

  // Subject validation
  if (subject.value.trim() === '') {
    document.getElementById('error-subject').textContent = 'Subject is required.';
    isValid = false;
  }

  // Message validation
  if (message.value.trim().length < 10) {
    document.getElementById('error-message').textContent = 'Message must be at least 10 characters.';
    isValid = false;
  }

  // Success message
  if (isValid) {
    successMsg.textContent = 'Message sent successfully! 💌';
    form.reset();
  }
});
