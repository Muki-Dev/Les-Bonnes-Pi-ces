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
let descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description;
let disponibiliteElement = document.createElement("p");
disponibiliteElement.innerText = article.disponibilite;



const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(disponibiliteElement);


// Vérification de données
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€":"€€€"})`
disponibiliteElement.innerText = article.disponibilite ? "En Stock" : "Rupture de stock";
categorieElement.innerText = article.categorie ?? "(aucune categorie)";
descriptionElement.innerText = article.description ?? ("Pas de description pour le moment.")
document.body.appendChild(prixElement,categorieElement,descriptionElement,disponibiliteElement);
