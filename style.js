// Sélection des éléments
const btnSpecifications = document.getElementById("btn-specifications");
const btnVoirCarte = document.getElementById("btn-voir-carte");
const contenuSpecifications = document.getElementById("contenu-specifications");
const conteneurCarte = document.getElementById("conteneur-carte");

// Afficher les spécifications
btnSpecifications.addEventListener("click", () => {
    contenuSpecifications.classList.remove("hidden");
    conteneurCarte.classList.add("hidden");
});

// Afficher la carte
btnVoirCarte.addEventListener("click", () => {
    contenuSpecifications.classList.add("hidden");
    conteneurCarte.classList.remove("hidden");
});
