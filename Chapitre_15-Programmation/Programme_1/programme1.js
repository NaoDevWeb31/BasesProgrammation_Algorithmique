var chiffre1;
var chiffre2;
var resultat;

chiffre1 = Math.floor(Math.random() * 21); // aléatoire en 0 et 20
chiffre2 = Math.floor(Math.random() * 21);

console.log("Mon premier chiffre est : " + chiffre1);
console.log("Mon second chiffre est : " + chiffre2);

resultat = chiffre1 - chiffre2;

console.log(resultat);
