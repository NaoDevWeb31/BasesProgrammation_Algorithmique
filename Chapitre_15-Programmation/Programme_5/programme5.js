var readline = require("readline-sync");

var resultat = 1;
var chiffreSaisi = readline.questionInt("Saisir la factorielle à calculer ? ");

for (var cpt = 1; cpt <= chiffreSaisi; cpt++) {
  resultat *= cpt;
}

console.log(
  "Le résultat de la factorielle " + chiffreSaisi + " est : " + resultat
);
