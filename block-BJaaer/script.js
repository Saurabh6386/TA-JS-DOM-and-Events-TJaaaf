
let form = document.querySelector("form");

let userinfo = {};

function display() {
    let name = document.querySelector(".hello")
    let email = document.querySelector(".email")
    let love = document.querySelector(".love")
    let color = document.querySelector(".color")
    let rate = document.querySelector(".rating")
    let genre = document.querySelector(".book")
    let terms = document.querySelector(".condition")

    name.innerText = userinfo.name
    email.innerText = userinfo.email
    love.innerText = userinfo.choice
    color.innerText = userinfo.color
    rate.innerText = userinfo.rating
    genre.innerText = userinfo.genre
    terms.innerText = userinfo.terms
}

function handlesubmit(event) {
    event.preventDefault();
    userinfo.name = form.elements.name.value;
    userinfo.email = form.elements.email.value;
    userinfo.choice = form.elements.choice.value;
    userinfo.color = form.elements.color.value;
    userinfo.rating = form.elements.rating.value;
    userinfo.genre = form.elements.drone.value;
    userinfo.terms = form.elements.terms.checked;

    display();
    page.style.display = "";
}

form.addEventListener("submit", handlesubmit);

let page = document.querySelector(".page");
let close = document.querySelector(".close");
close.addEventListener("click", function () {
    page.style.display = "none";
})