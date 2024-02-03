// Rècuperation des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
console.log(pieces);

// Créez de nouveaux élément dans le DOM
