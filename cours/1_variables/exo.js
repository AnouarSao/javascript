// 1.Ecrire un programme Javascript qui demande l'âge d'un enfant. Ensuite, il l'informe de sa catégorie :
// « Poussin » de 7 à 9 ans
// « Pupille » de 10 à 11 ans
// « Benjamin » de 12 à 13 ans
// « Minime » de 14 à 15 ans
// « Cadet » 16 à 17 ans
// 2.Ecrire un programme Javascript qui permet à l'utilisateur de définir une adresse email et un mot de passe.
// Ensuite dans un second temps, il sera demandé à l'utilisateur de fournir l'email et le mot de passe via le prompt:
// Si l'email et le mot de passe ne correspondent pas aux valeurs définies, le message "Identifiants incorrect devra
// s'afficher", et l'utilisateur devra recommencer la saisie des valeurs.
// Sinon, le message "Bienvenu dans votre espace client" devra s'afficher.
// Le nombre de fois que l'utilisateur peut saisir des mauvais identifiants est limité à 5, ensuite le programme va
// s'arrêter avec un message disant
// "Vous avez saisi des mauvais identifiants x fois, votre compte est bloqué".
// 3.Ecrire un programme javascript qui demande un nombre compris entre 10 et 20, jusqu'à ce que la réponse convienne.
// En cas de réponse supérieure à 20, on fera apparaître un message : « Plus petit ! », et inversement,
// « Plus grand ! » si le nombre est inférieur à 10.

// Exercice 1.

let age = parseInt(prompt("your age"));

if (age < 7) {
  alert("too small");
} else if (age < 10) {
  alert("poussin");
} else if (age < 12) {
  alert("pupille");
} else if (age < 14) {
  alert("benjamin");
} else if (age < 16) {
  alert("minime");
} else if (age < 18) {
  alert("minime");
} else {
  alert("trop grand");
}

// Exercice 2.

const correctEmail = "correct@mail.com";
const correctMpd = "correctmdp";
let counter = 0;

while (true) {
  let email = prompt("email: ");
  let mdp = prompt("mot de passe: ");

  if (email == correctEmail && mdp == correctMpd) {
    alert("Welcome!");
    break;
  }

  counter++;
  if (counter == 5) {
    alert(`Trop de tentatives incorrectes. Ciao !`);
    break;
  }
  alert(`Mdp ou Email incorrects. Réessayez ---- il vous reste ${5 - counter} tentatives`);
}

// Exercice 3.

while (true) {
  let inputNumber = parseInt(prompt("number between 10 and 20"));
  console.log(inputNumber);

  if (Number.isNaN(inputNumber)) {
    alert("not a valid number");
  } else if (inputNumber < 10) {
    alert("input number is too low");
  } else if (inputNumber > 20) {
    alert("input number is too high");
  } else {
    alert("input number is correct!");
    break;
  }
}