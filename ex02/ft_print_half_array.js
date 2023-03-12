/*  Écrire une fonction qui affiche dans la console de développement une 
case sur deux d’un tableau de reçu en paramètre
*/

function exo_deux_tableau (tableau) {
    for (let a = 0; a < tableau.length; a += 2) {
        console.log(tableau[a]);
    }
}
