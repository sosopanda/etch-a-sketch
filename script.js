const container = document.querySelector("#container");
const res = document.querySelector("#res");
let resValue = 16;

let divs = []
let size = 0;

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

for(let i = 0 ; i < 256 ; i++){
    divs.push(document.createElement("div"));
    divs.at(i).addEventListener("mouseover", function (e) {
        e.target.style.background = getRandomColor();;
    });

    size = 800/(resValue);

    divs.at(i).setAttribute("style","width:"+size+"px; height:"+size+"px");

    container.appendChild(divs.at(i));
}

res.addEventListener("click",() => {

    for(let i = 0 ; i < resValue*resValue ; i++){
        divs.push(document.createElement("div"));
        divs.at(i).remove();
    }
    
    do{

        resValue = prompt("Please introduce a resolution (Max 100): ","64");

    } while(resValue > 100 || resValue < 1)

    for(let i = 0 ; i < resValue*resValue ; i++){
        divs.push(document.createElement("div"));
        divs.at(i).addEventListener("mouseover", function (e) {
            e.target.style.background = getRandomColor();
        });

        size = 800/(resValue);

        divs.at(i).setAttribute("style","width:"+size+"px; height:"+size+"px");

        container.appendChild(divs.at(i));
    }
});