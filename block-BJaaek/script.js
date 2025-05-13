let click = document.querySelector(".banner");
let move = document.querySelector(".banner2");
let box1 = document.querySelector(".first")
let box2 = document.querySelector(".second")

function randomcolorgenerator() {
    var chars = "0123456789abcdef";
    var colorlen = 6;
    var color = "";

    for (let i = 0; i < colorlen; i++) {
        var randomcolor = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomcolor, randomcolor + 1);
    }
    return `#` + `${color}`
}

click.addEventListener("click", function () {
    let color = randomcolorgenerator();
    box1.style.backgroundColor = color;
})

move.addEventListener("mousemove", function () {
    let color = randomcolorgenerator();
    box2.style.backgroundColor = color;
})