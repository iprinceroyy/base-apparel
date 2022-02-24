const form = document.querySelector(".form");
const myAlert = document.querySelector(".alert");
const email = document.querySelector(".email");

function isValidEmail(userEmail) {
    const regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    regexEmail.test(userEmail);
}

function validateField() {
    const emailValue = email.value;

    if (isValidEmail(emailValue)) {
        myAlert.innerHTML = "";
    } else {
        myAlert.innerHTML = "Please provide a valid email";
        email.classList.add("invalid");
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    validateField();
});