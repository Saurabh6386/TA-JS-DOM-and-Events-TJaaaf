/*
#### Practice Form Validation

Rules for form validation:

1. Username can't be less than 4 characters
2. Name can't be numbers
3. Email must contain the symbol `@`
4. Email must be at least 6 characters
5. Phone numbers can only be a number
6. Length of phone number can't be less than 7
8. Password and confirm password must be same.

Messages for error:

1. `__` can't be less than `__` characters (replace `__` with field name)
2. You can't use number in the name field
3. Not a valid email
4. Phone number can only contain numbers

Once the form is valid it should alert `User Added Successfully!`
*/

let form = document.querySelector("form");

function doesNumber(str) {
    return str.split(``).some((elm) => Number(elm))
}

function isOnlyNumbers(input) {
    const str = String(input);
    const numbersOnlyRegex = /^[0-9]+$/;
    return numbersOnlyRegex.test(str);
}

function usernameerror(username) {

    if (username.value.length < 4) {
        username.nextElementSibling.innerText = "Username can't be less than 4 characters";
    } else if (doesNumber(username.value)) {
        username.nextElementSibling.innerText = "Username can't be numbers";
    } else {
        username.nextElementSibling.innerText = "";
    }
}

function nameerror(name) {
    if (doesNumber(name.value)) {
        name.nextElementSibling.innerText = "You can't use number in the name field"
    } else {
        name.nextElementSibling.innerText = ""
    }
}

function emailerror(mail) {
    if (!(mail.value.includes("@"))) {
        mail.nextElementSibling.innerText = "Not a valid email"
    } else if (mail.value.length < 6) {
        mail.nextElementSibling.innerText = "Not a valid email"
    } else {
        mail.nextElementSibling.innerText = "";
    }
}
function contacterror(num) {
    if (!isOnlyNumbers(num.value)) {
        num.nextElementSibling.innerText = "Phone number can only contain numbers"
    } else if (num.value.length < 8) {
        num.nextElementSibling.innerText = "Length of phone number can't be less than 8"
    } else {
        num.nextElementSibling.innerText = "";
    }
}
function passworderror(pass, confirmpass) {
    if (pass.value !== confirmpass.value) {
        confirmpass.nextElementSibling.innerText = "Password and confirm password must be same";
    } else {
        confirmpass.nextElementSibling.innerText = "";
    }
}

function handle(event) {
    event.preventDefault();
    usernameerror(event.target.elements.username);
    nameerror(event.target.elements.name);
    emailerror(event.target.elements.email);
    contacterror(event.target.elements.contact);
    passworderror(event.target.elements.password, event.target.elements.confirmpassword);

    let check = event.target.elements;

    if (check.username.nextElementSibling.innerText == '' && check.name.nextElementSibling.innerText == '' && check.email.nextElementSibling.innerText == '' && check.contact.nextElementSibling.innerText == '' && check.confirmpassword.nextElementSibling.innerText == '') {
        alert("User Added Successfully!");
    }
}

form.addEventListener("submit", handle);

