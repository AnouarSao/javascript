// 1. Générer les couleurs à partir d'une plage fournie
//    `["green", "red", "rgba(133,122,200)", "#F15025"]`
// 2. Générer les couleurs avec la notation hexadécimale
//    `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]`

const colorList = ["green", "red", "rgba(133,122,200)", "#F15025"];
// const hexaList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const text = document.querySelector("#text");
const btn = document.querySelector("#bretton");

btn.addEventListener("click", function () {

    let changeColor = colorList[0]
    colorList.unshift(colorList.pop());
    text.style.backgroundColor = changeColor;
    
})