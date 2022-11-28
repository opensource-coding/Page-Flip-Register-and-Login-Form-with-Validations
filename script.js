const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");

loginBtn.addEventListener("click", flipForward);
registerBtn.addEventListener("click", flipBackward);

const allPages = document.querySelectorAll(".page");
const first = document.getElementById("first");
const second = document.getElementById("second");

function flipForward() {
  if (window.innerWidth < 700) {
    first.style.left = "0";
  } else {
    second.style.transform = "rotateY(-180deg)";
  }
}
function flipBackward() {
  if (window.innerWidth < 700) {
    first.style.left = "100%";
  } else {
    second.style.transform = "rotateY(0)";
  }
}
window.addEventListener("resize", () => {
  if (window.innerWidth < 700) {
    first.style.left = "0";
  } else {
    first.style.left = "50%";
  }
});

// form validation

const forms = document.querySelectorAll("form");
const allInputs = document.querySelectorAll("input");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm(e);
  });
});

function validateForm(e) {
  let form = e.target;
  let inputs = form.querySelectorAll("input");
  let valid = true;

  if (validateEmail(inputs[0].value) == false) {
    valid = false;
    inputs[0].parentElement.classList.add("error");
  }
  if (validatePassword(inputs[1].value) == false) {
    valid = false;
    inputs[1].parentElement.classList.add("error");
  }

  if (form.id === "register") {
    //check for terms and conditions
    if (inputs[2].checked == false) {
      valid = false;
      inputs[2].parentElement.classList.add("error");
    }
  }

  if (valid) {
    alert("Form Submitted");
  }
}

allInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    e.target.parentElement.classList.remove("error");
  });
});

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
function validatePassword(password) {
  password = password.trim();
  if (password.length < 8) {
    return false;
  }
  return true;
}

const eyes = document.querySelectorAll(".eye");

eyes.forEach((eye) => {
  eye.addEventListener("click", (e) => {
    let input = e.target.parentElement.querySelector("input");
    if (input.type === "password") {
      input.type = "text";
      e.target.setAttribute("name", "eye-outline");
    } else {
      input.type = "password";
      e.target.setAttribute("name", "eye-off-outline");
    }
  });
});
