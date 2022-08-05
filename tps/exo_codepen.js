// // E1
// const users = [
//   { noms: "Jojo Jack", age: 21 },
//   { noms: "Paul-Jules", age: 45 },
//   { noms: "Pierre Zozor", age: 67 },
//   { noms: "Gilbert Toto", age: 39 },
//   { noms: "Simon Pierre", age: 35 },
//   { noms: "Andres Iniesta", age: 70 },
// ];

// // 1 - Avoir un tableau des users dont l'age varie entre 20-40
// const tableauAge = users.filter(function (user) {
//   return user.age >= 20 && user.age <= 40;
// });

// console.log(tableauAge);

// // 2 - Recuprerer le user dont noms est Pierre Zozor
// const findPierre = users.find(function (user) {
//   return user.noms === "Pierre Zozor";
// });

// console.log(findPierre);

// // 3 - Recupere un tableau ne contenant que les noms des utilisateurs
// const tableauNoms = users.map(function ({ noms }) {
//   return noms;
// });

// console.log(tableauNoms);

// E2
const users = [
  {
    id: 1,
    sexe: "M",
    nom: "Lisangola",
    prenom: "Bondjali",
    nationalite: "Allemande",
  },
  {
    id: 2,
    sexe: "M",
    nom: "Alain",
    prenom: "Stanislas",
    nationalite: "Bresilienne",
  },
  { id: 3, 
    sexe: "M", 
    nom: "Kavov", 
    prenom: "Joseph", 
    nationalite: "Russe" },
  {
    id: 4,
    sexe: "M",
    nom: "Jean",
    prenom: "Jonathan",
    nationalite: "Francaise",
  },
  {
    id: 5,
    sexe: "F",
    nom: "Lisangola",
    prenom: "Alain",
    nationalite: "Italienne",
  },
  {
    id: 6,
    sexe: "F",
    nom: "Sakura",
    prenom: "Josephine",
    nationalite: "Bresilienne",
  },
  {
    id: 7,
    sexe: "M",
    nom: "Le Blanc",
    prenom: "Axel",
    nationalite: "Italienne",
  },
  {
    id: 8,
    sexe: "M",
    nom: "Alison",
    prenom: "Murdoch",
    nationalite: "Somalienne",
  },
  { id: 9, 
    sexe: "F", 
    nom: "Zarosky", 
    prenom: "Semia", 
    nationalite: "Russe" },
  {
    id: 10,
    sexe: "F",
    nom: "Ali",
    prenom: "Laurene",
    nationalite: "Algerienne",
  },
];

// 1 - Trouver le nombre des Algeriens dans notre collection
const tableauAlgeriens = users.filter(function (user) {
    return user.nationalite.startsWith('Alger');
}).length;

console.log(tableauAlgeriens);

//2 - Trouver toutes les personnes dont les prenoms se terminent par a
const tableauNomA = users.filter(function (user) {
    return user.prenom.endsWith('a');
});

console.log(tableauNomA);

//3 - Avoir la liste tous toutes les noms
const tableauNomss = users.map(function ({nom}) {
    return nom;
});

console.log(tableauNomss);

//4 - La liste de tous les hommes russes
const tableauHommesRusses = users.filter(function (user) {
    return user.sexe === 'M' && user.nationalite === 'Russe';
});

console.log(tableauHommesRusses);

//5 - La liste de toutes les personnes dont les noms commencent par K et qui sont des femmes
const tableauFemmesK = users.filter(function (user) {
    return user.sexe === 'F' && user.nom.startsWith('K');
});

console.log(tableauFemmesK);

//5 - La liste de tous les hommes dont les noms commencent par M
const tableauHommesM = users.filter(function (user) {
    return user.sexe === 'M' && user.nom.startsWith('M');
});

console.log(tableauHommesM);

// Utiliser uniquement les nouvelles méthodes de ES6


// # Ludo with Arrow
let result_2_1 = users.filter((user) => user.nationalite.startsWith("Alger")).length;

let result_2_2 = users.filter((user) => user.prenom.endsWith('a'));

let result_2_3 = users.map(({nom}) => nom);

let result_2_4 = users.filter((user) => (user.nationalite.toLowerCase()==='russe' && user.sexe==='M'));

let result_2_5 = users.filter((user) => (user.nom.toLowerCase().startsWith('k') && user.sexe==='F'));

let result_2_6 = users.filter((user) => (user.nom.toLowerCase().startsWith('m') && user.sexe==='M'));

console.log(result_2_1);
console.log(result_2_2);
console.log(result_2_3);
console.log(result_2_4);
console.log(result_2_5);
console.log(result_2_6);
