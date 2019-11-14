// 2.4.2
let input = prompt("Yo, je suis l'acneBot. Ca roule ?");

if (input[input.length - 1] === "?") {
  console.log("Ouais Ouais...");
}
else if (input == "") {
  console.log("t'es en PLS ?");
} 
else if (input === input.toUpperCase()) {
  console.log("Pwa, calme-toi...");
 }
else if (input.includes("Fortnite")) {
  console.log("on s' fait une partie soum-soum ?");
}
else {
  console.log("balek.");
}