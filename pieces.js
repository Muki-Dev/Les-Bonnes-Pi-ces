// Rècuperation des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

for(let i = 0; i < pieces.length; i++){
// Créez de nouveaux élément dans le DOM
const imageElement = document.createElement("img");
imageElement.src = pieces[i].image;

const nomElement = document.createElement("h2");
nomElement.innerText = pieces[i].nom;

let prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${pieces[i].prix} €`;

let categorieElement = document.createElement("p");
categorieElement.innerText = pieces[i].categorie;

let descriptionElement = document.createElement("p");
descriptionElement.innerText = pieces[i].description;

let disponibiliteElement = document.createElement("p");
disponibiliteElement.innerText = pieces[i].disponibilite;



const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(disponibiliteElement);

//Vérification de données
prixElement.innerText = `Prix: ${pieces[i].prix} € (${pieces[i].prix < 35 ? "€":"€€€"})`
disponibiliteElement.innerText = pieces[i].disponibilite ? "En Stock" : "Rupture de stock";
categorieElement.innerText = pieces[i].categorie ?? "(aucune categorie)";
descriptionElement.innerText = pieces[i].description ?? ("Pas de description pour le moment.")
document.body.appendChild(prixElement,categorieElement,descriptionElement,disponibiliteElement);




}


