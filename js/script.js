const form = document.querySelector("#form");
const myAlert = document.querySelector(".alert");
const email = document.querySelector(".email");

function isValidEmail(userEmail) {
    const regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regexEmail.test(userEmail);
}

function validateField() {
    const emailValue = email.value;
    console.log(email);

    if (isValidEmail(emailValue)) {
        myAlert.innerText = "";
        myAlert.classList.remove("invalid");
    } else {
        myAlert.innerText = "Please provide a valid email";
        email.classList.add("invalid");
    }
}

form.addEventListener("submit", (event) => {
    validateField();
    event.preventDefault();
});