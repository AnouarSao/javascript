// On vous donne un tableau d’entiers et un entier k qui représente le nombre de rotation que doit subir le tableau.

// Retourner le nouveau tableau après la rotation à droite.

// Exigences
// Doit retourner un nouveau tableau

// Exemple #1
// votreFonction([1, 2, 3, 4, 5], 3 )
// > [3,4,5,1,2]

// Exemple #2
// votreFonction([1, 2, 3, 4], 1)
// > [ 4,1,2,3 ]


function rotationTable(tableau,nbreDeRotations){
    const rotatedArray=[...tableau];
    let compteur=0;
    while(compteur<nbreDeRotations){
        let derniereValeur=rotatedArray.pop();
        rotatedArray.unshift(derniereValeur);
        compteur++;
    }
    return rotatedArray;
}
console.log(rotationTable([1,2,3,4],1))