const fruits = ["pomme", "banane", "orange"];

// Ecrire un code qui permet de mettre au pluriel les noms des fruits

//#1.Boucle for classique
const fruitsPluriel = [];

for (let i = 0; i < fruits.length; i++) {
  // si i=0, fruits[i] = pomme + s = pommes
  fruitsPluriel.push(fruits[i] + "s");
}

//#2.Boucle for of
const fruitsPluriel2 = [];

for (let fruit of fruits) {
  fruitsPluriel2.push(fruit + "s");
}

//#3. Boucle forEach
const fruitsPluriel3 = [];
fruits.forEach(function (fruit) {
  fruitsPluriel3.push(fruit + "s");
});