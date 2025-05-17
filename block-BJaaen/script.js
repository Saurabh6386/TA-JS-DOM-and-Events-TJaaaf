let data = [
    {
        name: "rock",
        beats: "scissor"
    },
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "scissor",
        beats: "paper"
    },
];

let userselect, computerselect;

let user = document.querySelector(".user-icons");
let computer = document.querySelector(".computer-icons");
let result = document.querySelector(".result");
result.innerText = "";

function random() {
    return Math.floor(Math.random() * 3);
}

let reset = document.querySelector(".reset");

let initialcount = 0;
let usercount = document.querySelector(".userwinscount");
let computercount = document.querySelector(".computerwinscount");
usercount.innerText = initialcount;
computercount.innerText = initialcount;

data.forEach(x => {
    let li = document.createElement("li");
    li.classList.add(`${x.name}`);
    li.innerText = `${x.name}`
    user.append(li);

    li.addEventListener("click", function () {
        userselect = x;
        computerselect = data[random()];

        if (userselect.beats === computerselect.name) {
            result.innerText = "User win";
            usercount.innerText = Number(usercount.innerText) + 1;

        } else if (userselect.name === computerselect.name) {
            result.innerText = "Its a tie";
        } else {
            result.innerText = "Computer win";
            computercount.innerText = Number(computercount.innerText) + 1;
        }
    })
})

reset.addEventListener("click", function (){
    userselect = "";
    computerselect = "";
    usercount.innerText = initialcount;
    computercount.innerText = initialcount;
})

data.forEach(x => {
    let li = document.createElement("li");
    li.classList.add(`${x.name}`);
    li.innerText = `${x.name}`
    computer.append(li);
})

