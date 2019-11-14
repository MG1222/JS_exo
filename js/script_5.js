// exo 2.3.2
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Prejuges', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forets de Siberie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("-----***---- Est-ce que tous les livres ont ete au moins empruntes une fois ? ----***---")
books.forEach(book => {
	if(book.rented > 1 )console.log("OUI"); 
	else console.log("NON")
});
/////////////////////////////////////////////////

console.log("----***--- Quel est livre le plus emprunte ---***---?")
// on a cree un n.array rnd ou les livres sont trie via methode  sort() https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort)
// // On crée un fonction qui prend deux arguments a, b 
let rnd = books.sort(function (a, b) {
  return a.rented - b.rented;
});

console.log(rnd[rnd.length - 1].title);
//////////
console.log("---***--Quel est le livre le moins emprunte ? ----***---");
console.log(rnd[0].title);
///////////////////////////////////////////////////////
console.log("---***---Trouve le livre avec l'ID: 873495 ;---***---");
// on a creer une function livres avec 1 arg. livre qui est egal a 87..
// link to https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find
function livres(livre) {
	return livre.id === 873495;
}
console.log(books.find(livres))
///////////////////////////////////////////////////
console.log("---***---Supprime le livre avec l'ID: 133712 ; ---***---")
const y = books.findIndex(book => {
	return book.id === 133712

})
console.log(books.splice(y, 1))
console.log(books)
////////////////////////////////////

console.log("----***----Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).---***---")
let bks = books.sort(function (a, b) {
	return a.title.localeCompare(b.title)
	//localeCompare() permet de trier un tableau sans tenir compte de la casse :
});
console.log(bks);














