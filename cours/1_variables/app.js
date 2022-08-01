// 1. Déclaration des variables 

// # Calcul de la somme
// var nombre1 = 45;
// var nombre2 = 55;
// var somme = nombre1 + nombre2;
// console.log(somme);
// console.log(`${nombre1} + ${nombre2} = ${somme}`); // 45 + 55 = 100

// # Identité : saisie sans prompt
// var nom = "Sao";
// var prenom = "Anouar";
// var age = 99;
// console.log(`Votre nom est ${prenom} ${nom}, vous avez ${age} ans.`)

// # Identité : saisie avec prompt
// var nom = prompt("Votre nom : ");
// var prenom = prompt("Votre prenom : ");
// var age = prompt("Votre age : ");
// alert(`Votre nom est ${prenom} ${nom}, vous avez ${age} ans.`);


// Exo1
// Déclarer 2 variables,
// Déclarer une varaible qui est égal à la somme des 2 variables
// Afficher un message d'alerte  « Bienvenue sur la page de formulaire »
// La console du navigateur affiche le contenu des variables.
// La console affiche « Le résultat est » + le résultat du calcul.
// alert("Bienvenue sur la page de formulaire");
// var num1 = parseInt(prompt('Enter the first number '));
// var num2 = parseInt(prompt('Enter the second number '));
// var somme = num1 + num2;
// console.log(`${num1} + ${num2} = ${somme}`);
// alert(`Le resultat de la somme est :  ${somme}`);

// Exo2
// 2.Ecrire un programme Javascript qui demande à l'utilisateur d'entrer à partir du clavier:
// La distance parcours(m)
// Le temps(sec)
// Puis calculer la vitesse selon la formule:
// vitesse=distance parcourue/temps
// Puis afficher le résultat dans le format suivant : 345 m/s(utiliser alert et console.log)
var distance = parseFloat(prompt(`Entrer la distance (m): `));
var temps = parseFloat(prompt(`Entrer le temps (s): `));
var vitesse = distance/temps;
console.log(`La vitesse est: ${vitesse} m/s`);
alert(`La vitesse est: ${vitesse} m/s`);
