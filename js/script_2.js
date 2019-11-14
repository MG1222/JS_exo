// exo 2.2.1
let num = prompt("De quel nombre veux-tu calculer la factorielle ?")
let result = 1 
for (let counter = 1; counter <= num; counter ++) {
	result *= counter;
}

console.log(`Le resultat est : ${result}`) 
/*
function factorial (n){
  if (n==0 || n==1){
    return 1;
  }
  return factorial(n-1)*n;
} */






















































/*// EXERICE 2

// On demande à l'utilisateur de quel nombre il veut calculer la factorielle
let number = prompt("De quel nombre voulez-vous calculer la factorielle ?");

// On part d'une valeur de base à 1 pour le résultat (pour ne pas multiplier par 0),
// qu'on modifiera avec la boucle.
let result = 1

// A chaque passage de boucle, on multiplie la variable resultat par le compteur en cours et
// actualise sa valeur. On incrémente également le compteur de 1.
// Si le compteur atteint le nombre entré par l'utilisateur, c'est la fin de la boucle.
for(let counter = 1; counter <= number; counter++ ) {
	result *= counter;
}

// On affiche le résultat dans la console.
console.log(`La factorielle de ${number} est : ${result}.`) */