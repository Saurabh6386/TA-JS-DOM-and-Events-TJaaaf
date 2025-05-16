let btn = document.querySelectorAll("button")
let screen = document.querySelector(".screen")
let initialvalue = 0;
screen.innerText = initialvalue;

function handlebtnclick(event) {
    if (event.target.classList.contains("equal")) {
        screen.innerText = eval(screen.innerText);
        return;
    }
    if (event.target.classList.contains("clear")) {
        screen.innerText = initialvalue;
        return;
    }
    if (screen.innerText == 0) {
        screen.innerText = event.target.innerText;
    } else {
        screen.innerText += event.target.innerText;
    }
}

btn.forEach(button => {
    button.addEventListener("click", handlebtnclick);
})