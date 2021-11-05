var tab = [10, 12, 14, 18];
var resultat = 0;

// for (let i = 0; i <= 3; i++) {
//   tab[i] = Math.floor(Math.random() * 21);
// }
resultat = moyenne(tab);
console.log("La moyenne est de : " + resultat);

function moyenne(monTableau) {
  var moyenne = 0;
  for (let cpt = 0; cpt < monTableau.length; cpt++) {
    moyenne += monTableau[cpt];
  }
  moyenne /= monTableau.length;
  return moyenne;
}
