var readline = require("readline-sync");

var age = readline.questionInt("Saisir l'âge : ");

if (age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}
