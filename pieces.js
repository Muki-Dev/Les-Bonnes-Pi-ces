// Rècuperation des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

// Créez de nouveaux élément dans le DOM
const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} €`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie;
console.log(categorieElement.innerText);
