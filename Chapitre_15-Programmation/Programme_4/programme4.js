var readline = require("readline-sync");

var mois = parseInt(readline.question("Quel mois de l'année voulez-vous ? (en chiffre) : ")
);

switch (mois) {
  case 1:
    console.log("Janvier");
    break;
  case 2:
    console.log("Février");
    break;
  case 3:
    console.log("Mars");
    break;
  case 4:
    console.log("Avril");
    break;
  case 5:
    console.log("Mai");
    break;
  case 6:
    console.log("Juin");
    break;
  case 7:
    console.log("Juillet");
    break;
  case 8:
    console.log("Août");
    break;
  case 9:
    console.log("Septembre");
    break;
  case 10:
    console.log("Octobre");
    break;
  case 11:
    console.log("Novembre");
    break;
  case 12:
    console.log("Décembre");
    break;

  default:
    console.log("Je n'ai pas compris");
    break;
}
