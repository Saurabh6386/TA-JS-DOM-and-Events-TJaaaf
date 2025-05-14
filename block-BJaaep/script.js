// Without Event Deligation
let container = document.querySelector(".container")
let div = document.querySelector(".wrapper")
let FirstBox = document.createElement("ul")
FirstBox.classList.add("boxes")

for (let i = 1; i <= 12; i++) {
    let smallBox = document.createElement("li", i)
    smallBox.classList.add("box")

    smallBox.addEventListener("click", function () {
        smallBox.innerText = i
        setTimeout(function () {
            smallBox.innerText = ""
        }, 5000)
    })
    FirstBox.append(smallBox)
}
div.append(FirstBox)
container.append(div)


// With Event Deligation
let boxes2 = document.querySelector(".boxes")
for (let i = 1; i <= 12; i++) {
    var li = document.createElement("li", i)
    li.classList.add("box")
    boxes2.append(li)
    li.setAttribute("id", i)
}

boxes2.addEventListener("click", function (event) {
    let text = event.target.id;
    event.target.innerText = text;
    setTimeout(function () {
        event.target.innerText = ""
    }, 5000)
})