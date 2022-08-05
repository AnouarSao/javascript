// On vous donne une chaîne de caractères et un nombre entier K comme arguments.
// Divisez la chaîne de caractères en un tableau de chaînes de caractères, où chaque élément n'a pas plus de K caractères. 
// Retournez le tableau résultant.
// La chaîne en argument sera toujours d'au moins K caractères.

// Exigences
// Doit retourner un tableau de chaînes de caractères

// Exemple #1
// votreFonction("aabbbcccd", 3)
// > ["aab", "bbc", "ccd"]

// Exemple #2
// votreFonction("abcdefgh", 5)
// > ["abcde","fgh"]


function slip (text,entireK)
{
    const k = parseInt(entireK);

    const table = [];
    
    for(let i = 0; i <= text.length - 1; i = i + k)
    {
        table.push(text.slice(i,i + k));
    }
    
    console.log(table);
}