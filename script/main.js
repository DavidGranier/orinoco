let notifPanier = localStorage.getItem("produit");


  if(notifPanier !== null){
  notifPanier = JSON.parse(localStorage.getItem("produit"));
  document.querySelector(".header__panier p").innerHTML =`${notifPanier.length} articles`;
  };

















