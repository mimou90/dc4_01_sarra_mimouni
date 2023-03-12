/*Écrire une fonction qui reçoit un tableau de chiffre en paramètre, qui 
ajoute plus un à la valeur de chaque cellule et qui affiche le tableau 
mis à jour*/

function exo_trois_tableau (tableau) {
    const tableau_deux = tableau.map( nombre => nombre +1);
    console.log(tableau_deux)
    
}