// create 500 boxes
// addeventlistener of type mousemove
// change the background color of each box
// change random number

let section = document.querySelector("section");

for (let i = 0; i < 500; i++) {
    var div = document.createElement("div");
    div.className = "box";
    var h3 = document.createElement("h3");
    h3.innerText = Math.floor(Math.random() * 500);
    div.style.backgroundColor = randomcolor();
    div.append(h3);
    section.append(div);
}

function randomcolor() {
    let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let colorlen = 6;
    let color = "#";

    for (let i = 0; i < colorlen; i++) {
        let c = Math.floor(Math.random() * 16);
        color += chars[c];
    }
    return color;
}

let alldiv = document.querySelectorAll("div");
let allh3 = document.querySelectorAll("h3");

section.addEventListener("mousemove", function () {
    alldiv.forEach(element => {
        element.style.backgroundColor = randomcolor();
    });
    allh3.forEach(element => {
        element.innerText = Math.floor(Math.random() * 500);
    })

})