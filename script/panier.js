 
    


//vider le panier
function vider(){
    localStorage.clear();
    window.location.reload()
}

//retirer le produit
function enlever(){
    localStorage.removeItem("produit[i]");
    window.location.reload();
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
                                                                    <p onclick=enlever() class="section-panier__produit__supprimer"><i  class="fas fa-times fa-xs"></i></p>

                                                                </div>`
    };

        //calcul prix total

    //Recuperation du prix de chaque article dans le panier
    let prixTotal = [];
    for (let i=0; i < affichagePanier.length; i++){
        let prixTotalPanier = affichagePanier[i].prix;
        prixTotal.push(prixTotalPanier);

    };
    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    prixTotal =prixTotal.reduce(reducer);
    console.log(prixTotal);
    
    document.getElementById("section-panier").innerHTML +=`<div class="section-panier__total">
                                                                <p class="section-panier__total__texte">Total: ${prixTotal/100} € </p>
                                                
                                                                <button>Commander</button>
                                                            </div>
                                                            
                                                            <div class="section-panier__clear">
                                                                <button onclick=vider()>Vider le panier</button>
                                                            </div>`;

}

else{
    console.log("Panier vide");
    document.getElementById("section-panier").innerHTML+=`<div class="section-panier__erreur"><p >Vous n'avez pas encore ajouté de produit à votre panier.<br/> </p><button onclick="window.location.href='index.html'">Consultez notre cathalogue</button></div>`;
}


