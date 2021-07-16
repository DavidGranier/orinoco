//-------------------Envoi de la commande au serveur------------------
//recupère les id produit
let produit = JSON.parse(localStorage.getItem("produit"));
//retour a l'index.html si produit est null
if(produit===null){
    window.location.href ="./index.html"; 
}
let produitId = [];
for(let i =0; i<produit.length; i++){
     produitId.push(produit[i]._id);  
}
//recupère contact
let contact = JSON.parse(localStorage.getItem("contact"));
//retour a l'index.html si contact est null
if (contact === null){
    window.location.href ="./index.html"; 
}
let commande = {
     contact : contact,
     products : produitId,
};
 // envoi au serveur
fetch("http://localhost:3000/api/cameras/order", {
    method: 'POST',            
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(commande) // conversion en JSON des données requis par le serveur 
})
.then(res => { res.json()
    //Récupération de la réponse de l'API pour générer le bon de commande
    .then(function(json) {
        let orderId = json.orderId;
        let productsRes = json.products;
        let contactRes = json.contact;
        console.log(orderId);
        console.log(productsRes);
        console.log(contactRes);

    //Recuperation du prix de chaque article dans la reponse du serveur
    
    document.getElementById("section-commande").innerHTML =
    `<p class="section-commande__validcommande">Merci ${contactRes.firstName} ${contactRes.lastName}! Votre commande n°<strong>${orderId}</strong> d'un montant de <strong>${calculPrix()/100}€</strong> à bien été prise en compte</p><img class="section-commande__img" src="./colis.jpg" alt="colis">`;
    //vide le panier automatiquement après la réponse du serveur
    localStorage.clear();

     });
 })
 .catch(error => { // enregistrement si erreur lors de l'envoi de données
      alert(error);
 });