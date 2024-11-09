const email_error = document.querySelector('.error');
const section_signup = document.querySelector('.signup');
const section_success = document.querySelector('.success');
const userEmail = document.querySelector('.success span');

function handleSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('id_email').value;

  if (!email) {
    return;
  }

  if (isValidEmail(email)) {
    email_error.style.visibility = 'hidden';
    section_signup.style.display = 'none';
    userEmail.textContent = email;
    section_success.style.display = 'block';
  } else {
    email_error.style.visibility = 'visible';
  }
}

// Function to check if the email is valid or not
function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}
