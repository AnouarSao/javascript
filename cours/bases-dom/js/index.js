//# 1. Selectionner une collection
const listes = document.querySelectorAll("li");

// console.log(listes);

//Modifier le text de l'element à l'index 0
// console.log(listes[0]);
// a. Afficher le text
// console.log(listes[0].innerText);

// a. Modifier le text
listes[0].innerText = "Morgane";
for (let text of listes) {
  // text.innerText = "Morgane";
  text.style.color = "red";
}

//# Selectionner la premièere occurence d'un element
const element1 = document.querySelector("li");

const title = document.querySelector("#html55");
title.style.color = "blue";
title.innerText = "HTML6";
title.addEventListener("click", function () {
  alert("Voici mon text :" + title.innerText);
});

const text1 = document.querySelector("#html5");
text1.innerText = "ES6";
text1.style.color = "green";
text1.style.fontStyle = "italic";

const listeLi = document.querySelectorAll("li");
console.log("Liste LI : ", listeLi);
for (let element of listeLi) {
  element.addEventListener("click", function () {
    alert(element.innerText);
  });
}
const text2 = document.querySelector("#main_title");
text2.innerText = "Parcours JAVA";
// mouseover
text2.addEventListener("mouseover", function () {
  text2.style.color = "red";
});


