// exo 4 (omg !!)
/* Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
	Sors une array qui contient le prénom et le nom des entrepreneurs ;
	Quel âge aurait chaque inventeur aujourd'hui ?
	Trie les entrepreneurs par ordre alphabétique du nom de famille.
*/
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// -- FILTRE DANS CETTE LISTE LES ENTREPRENEURS QUI SON NEE DANS LES ANNEES 70 --
console.log("----***---- L'entrepreneurs ne dans les annnes 70 ----***---- ")

/*function estNe(annnes){
	return annnes.year > 1970 && annnes.year < 1980;

}
console.log(entrepreneurs.find(estNe)) */ 


//La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
// link to -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach

entrepreneurs.forEach(entrepreneur => {
	if(entrepreneur.year >= 1970 && entrepreneur.year < 1980)
		console.log(`${entrepreneur.first} ${entrepreneur.last} : ${entrepreneur.year} .`);
});

///////////////////////////////////////////////////////////

// -- SORS UNE ARRAY QUI CONTIENT LE PRENOM ER LE NOM --
console.log("---***--- Le Prenom et le Nom ----****----")
 names = []
entrepreneurs.forEach(entrepreneur => {
	names.push(`${entrepreneur.first} ${entrepreneur.last}`);

});
console.log(names)

////////////////////////////////////////////////////////

//	Quel âge aurait chaque inventeur aujourd'hui ?

console.log("----***--- Aujourd'hui chaque inventeur a : ----***---")

entrepreneurs.forEach(entrepreneur =>{
	let age = 2019 - entrepreneur.year
	console.log( `${entrepreneur.last} a ${age} .`)
});


///////////////////////////////////////////////////////

console.log("----***--- Trie les entrepreneurs par ordre alphabétique du nom de famille. -----***---")

lastName = []
entrepreneurs.forEach(entrepreneur =>{
	lastName.push(`${entrepreneur.last}`);

});

// link to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

console.log(lastName.sort())





















	