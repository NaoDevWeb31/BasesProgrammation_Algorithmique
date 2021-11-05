var moyenne1 = moyenne(2, 5, 10);
var moyenne2 = (3, 100, 50);

console.log("La première moyenne est de : " + moyenne1);
console.log("La seconde moyenne est de : " + moyenne2);

function moyenne(a, b, c) {
  var resultat = a + b + c;
  resultat /= 3;
  return resultat;
  //   console.log("La moyenne est de : " + resultat);
}
