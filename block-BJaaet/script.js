let input = document.querySelector(`input[type="text"]`);
let rootelm = document.querySelector(".movielist")

let allMovies = [

];

// adding a movies
function handleenter(event) {
    if (event.keyCode === 13) {
        allMovies.push({
            name: event.target.value,
            watched: false,
        });
        createUI();
        input.value = "";

    }


}

// delete a movie
function deletemovie(event) {
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    createUI();
}

input.addEventListener("keyup", handleenter);

// display the movie in ui
function createUI() {
    rootelm.innerHTML = "";
    allMovies.forEach((movie, i) => {
        let li = document.createElement("li");
        let input = document.createElement("input");
        let label = document.createElement("label");
        let span = document.createElement("span");

        input.classList.add("style-checkbox");
        input.id = i;
        input.type = "checkbox";
        input.checked = movie.watched;

        input.addEventListener("click", function (event) {
            let id = event.target.id;
            allMovies[id].watched = !allMovies[id].watched;

        })

        label.for = "1";
        span.innerText = "x";
        label.innerText = movie.name;
        span.setAttribute("data-id", i);

        span.addEventListener("click", deletemovie);

        li.append(input, label, span);
        rootelm.append(li);
    })
}

createUI();

// let ul = document.querySelector(".movielist");

// let input = document.querySelector(".display");

// function handleinput(event) {
//     let li = document.createElement("li");
//     let checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     let span = document.createElement("span");
//     let clearcheck = document.createElement("input");
//     clearcheck.type = "checkbox";
//     clearcheck.classList.add("clear");

//     if (event.keyCode == 13 && input.value) {
//         span.innerText = event.target.value;
//         li.append(checkbox, span, clearcheck);
//         ul.append(li);
//         input.value = "";
//     }
//     clearcheck.addEventListener("click", function (event) {
//         let child = event.target.parentElement
//         child.remove();
//         // let parent = event.target.parentElement.parentElement.removeChild(child)

//     })
// }

// input.addEventListener("keyup", handleinput);