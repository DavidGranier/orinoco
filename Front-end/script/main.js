
//Récuperation des produits dans le localStorage
function produitPanier(){
  produitLocalStorage = localStorage.getItem("produit");
  return produitLocalStorage;
};


//Affichage du nombre d'item dans le panier sur toutes les pages
function itemPanier(){
  if(produitPanier() !== null){
    notifPanier = JSON.parse(localStorage.getItem("produit"));
    document.querySelector(".header__panier p").innerHTML =`${notifPanier.length}`;
  };
};
itemPanier();

//Calcul prix total
function calculPrix(){
  let prixTotal = 0;
  let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
  for (let i=0; i < produitLocalStorage.length; i++){
    prixTotal += produitLocalStorage[i].prix;
  };
  return prixTotal;
};

//fonction vider le panier
function vider(){
  localStorage.clear("produit");
  window.location.reload()
}