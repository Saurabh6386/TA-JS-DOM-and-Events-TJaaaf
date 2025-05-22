let list = document.querySelector(".character-list");
let houses = got.houses;
let displybtn = document.querySelector(".houses");
let input = document.querySelector("input");

function getAllpeople(h=houses){
      let allPeoples = h.reduce((acc, cv) => {
        cv.people.map((p) => {
            acc.push(p)
        })
        return acc;
    }, [])
    return allPeoples
}


//search people by name
input.addEventListener("keyup", (e) => {

    let word = e.target.value;
    let searchResult = getAllpeople().filter((p) => p.name.toUpperCase().includes(word.toUpperCase()))
    createUI(searchResult)

})



// display got buttons
houses.forEach((h) => {
    let bt = document.createElement("button")
    bt.innerText = h.name
    displybtn.append(bt)
})

let btns = document.querySelectorAll("button")


//btn functionality
btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        let filteredhouse = houses.filter((parent) => parent.name.toUpperCase() === event.target.innerText);
        createUI(getAllpeople(filteredhouse));

    })
})


function createUI(data = getAllpeople()) {
      list.innerHTML = "";
    return data.map((child) => {
        console.log(child);
        
            let img = document.createElement("img");
            img.src = child.image;

            let div = document.createElement("div");
            div.classList.add("character-card");

            let h2 = document.createElement("h2");
            h2.innerText = child.name;

            let p = document.createElement("p");
            p.innerText = child.description;

            let a = document.createElement("a");
            a.href = child.wikiLink;
            a.classList.add("know-more");
            a.innerText = "Know More";

            div.append(img, h2, p, a);
            list.append(div);
        
    })
}
createUI();

