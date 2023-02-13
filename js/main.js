const form = document.getElementById(`form`);
const email = document.getElementById(`email`);

form.addEventListener(`submit`, (e) => {
  // prevent page reload
  e.preventDefault();

  // shows error if email is invalid
  if (!validateEmail(email.value)) {
    form.classList.add(`error`);
  } else {
    form.classList.remove(`error`);
    email.value = ``;
    showMessage();
  }
});

//  removes error once user starts typing
email.addEventListener(`keypress`, () => {
  form.classList.remove(`error`);
});

// email validation regex

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// show message after submition
function showMessage() {
  document.body.innerHTML = `
  <style>
    h1 {
      color: var(--dark-blue);
      font-size: 5rem;
      text-align:center;
    }
    h1 span {
      font-size:2rem;
      color:var(--gray)
    }
  </style>
  <main><h1>Thank You!<br><span>You will get notified as soon as we launch!</span></h1></main>
  `;
}
