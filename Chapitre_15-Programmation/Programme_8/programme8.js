var tab = [];
var resultat = 0;

for (let i = 0; i <= 3; i++) {
  tab[i] = Math.floor(Math.random() * 21);
  resultat += tab[i];
}
resultat /= tab.length;

console.log("La moyenne est de : " + resultat);
