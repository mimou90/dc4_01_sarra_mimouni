/*
Écrire une fonction qui affiche l’alphabet en majuscule, une string
contenant l’alphabet en minuscule sera passée en paramètre la
fonction. Chaque lettre devra être stockée dans une cellule du
tableau.
*/

function exo_un_alphabet (alphabet) {
    var alphabet_miniscule = "abcdefghijklmnopqrstuvwxyz";
    var alphabet_majuscule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var tableau = [];
    for (var a = 0; a < alphabet.length; a++) {
        var lettre = alphabet [a];
        var index = alphabet_miniscule.indexOf(lettre);
        var lettre_majuscule = alphabet_majuscule[index];
        tableau.push(lettre_majuscule);
    }
    console.log(tableau);
}