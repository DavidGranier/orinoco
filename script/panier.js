//for (i in affichagePanier[i].prix){ 
    


//vider le panier
function vider(){
    localStorage.clear();
    window.location.reload()

}


//Affichage des produits dans le panier
let affichagePanier = localStorage.getItem("produit");
console.log(affichagePanier);

if (affichagePanier !== null){
    affichagePanier = JSON.parse(localStorage.getItem("produit"));
    console.log(affichagePanier);
    for (i in affichagePanier){
        document.getElementById("section-panier").innerHTML += `<div class="section-panier__produit">
                                                                    <img class="section-panier__produit__image" src="${affichagePanier[i].image}">
                                                                    <p class="section-panier__produit__titre">${affichagePanier[i].nom}</p>
                                                                    <p class="section-panier__produit__prix">${affichagePanier[i].prix/100} €</p>

                                                                </div>`
    };
    
    document.getElementById("section-panier").innerHTML +=`<div class="section-panier__total">
                                                                <p class="section-panier__total__texte">Total: </p>
                                                            </div>
                                                            <div class="section-panier__clear">
                                                                <button onclick=vider()>Vider le panier</button>
                                                            </div>`;

}

else{
    console.log("Panier vide");
    document.getElementById("section-panier").innerHTML+=`<p class="section-panier__erreur">Vous n'avez pas encore ajouté de produit à votre panier.<br/> <strong><a href="index.html"> Consultez notre cathalogue</a></strong> </p>`;
}