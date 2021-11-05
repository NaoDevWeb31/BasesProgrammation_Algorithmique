var readline = require("readline-sync"); // Faire de la saisie dans le terminal

var chiffre1;
var chiffre2;
var resultat;

chiffre1 = readline.questionInt("Saisir votre chiffre ?");
chiffre2 = readline.questionInt("Saisir votre chiffre ?");

resultat = chiffre1 + chiffre2;

console.log("Le résultat de la somme est : " + resultat);
