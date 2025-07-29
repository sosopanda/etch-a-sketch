const container = document.querySelector("#container");

let divs = []

for(let i = 0 ; i < 256 ; i++){
    divs.push(document.createElement("div"));
    divs.at(i).addEventListener("mouseover", function (e) {
        e.target.style.background = "grey";
    });
    container.appendChild(divs.at(i));
}