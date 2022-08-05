// On vous donne en argument un tableau d'entiers non négatifs. 
// Retournez le premier élément trouvé dans le tableau dont l'indice est égal à sa valeur.
// Exigences
// Doit retourner un seul entier
// S'il y a plusieurs entiers trouvés, doit retourner uniquement la première occurrence.

// Exemple #1
// votreFonction([10, 20, 11, 12, 4])
// > 4

// Exemple #2
// votreFonction([2, 1, 11, 12, 4])
// > 1

// 1 et 4 sont 2 résultats possibles, mais on retourne 1 parce que c’est la première occurrence .


const tableauDepart = [5, 9, 11, 6, 1, 5, 24, 7, 2];

const indexEgalValeur = tableauDepart.find(function(entier) {
    return tableauDepart.indexOf(entier) === entier;
})

console.log(indexEgalValeur);