let technos = [
  "Less",
  "Reactjs & Redux",
  "React Query",
  "Redux Saga",
  "Redux ToolKit",
  "Svelte",
  " Vue.js",
  "Angular",
];

// Liste des elements avec id = #liste

const liste = document.querySelector("#liste");

// Bouton ajouter avec class = .ajouter

const ajouter = document.querySelector(".ajouter");
let counter = 0;

ajouter.addEventListener("click", function () {
  if (counter < elementsToAdd.length) {
    liste.innerHTML += `<li>${technos[counter]}</li>`;
    counter++;
  }
  return;
});


// Bouton vider avec class = .vider

const vider = document.querySelector(".vider");

vider.addEventListener("click", function () {
  liste.innerHTML = "";
  counter = 0;
});





// let counter = 0;
// const add = document.querySelector(".ajouter");
// console.log(add.innerHTML);
// const empty = document.querySelector(".vider");

// let list = document.querySelector("#liste");
// let originalList = list.innerHTML;

// add.addEventListener("click", function (e) {
//   if (counter === elementsToAdd.length) {
//     return;
//   }
//   list.innerHTML += `<li>${elementsToAdd[counter]}</li>`;
//   counter++;
//   console.log(counter);
// });

// empty.addEventListener("click", function () {
//   list.innerHTML = originalList;
//   counter = 0;
// });
