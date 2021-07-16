//---------------------Affichage du nombre d'item dans le panier sur toutes les pages----------
function itemPanier(){
  let notifPanier = localStorage.getItem("produit");  
  if(notifPanier !== null){
    notifPanier = JSON.parse(localStorage.getItem("produit"));
    document.querySelector(".header__panier p").innerHTML =`${notifPanier.length}`;
  };
};
itemPanier();

//Calcul prix total
/*function calculPrix(){
  let prixTotal = 0;
  let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
  console.log(produitLocalStorage);
          for (let i=0; i < produitLocalStorage.length; i++){
              prixTotal += produitLocalStorage[i].prix;
          };
          return prixTotal;
}*/

function calculPrix(){
  let prixTotal = 0;
  let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
          for (let i=0; i < produitLocalStorage.length; i++){
              prixTotal += produitLocalStorage[i].prix;
          };
          return prixTotal;
}