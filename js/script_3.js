// 2.2.2
let user = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
espace = user - 1 

for (num = 1; num <= user; num ++) { 
	console.log(" ".repeat(espace--) ,"#".repeat(num))
}
/* 
	The repeat() method returns a new string with a specified number of copies of the string it was called on. 
	link to -> https://www.w3schools.com/jsref/jsref_repeat.asp

*/