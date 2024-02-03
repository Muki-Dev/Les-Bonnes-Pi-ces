// Rècuperation des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

// Créez de nouveaux élément dans le DOM
const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
let prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} €`;
let categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie;

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);

// Vérification de données
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€":"€€€"})`

categorieElement.innerText = article.categorie ?? "(aucune categorie)";

document.body.appendChild(prixElement,categorieElement);
