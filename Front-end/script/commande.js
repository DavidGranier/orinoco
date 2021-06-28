/*//Récupération du localStorage
let contact = JSON.parse(localStorage.getItem("contact"));
let produit = JSON.parse(localStorage.getItem("produit"));

//recup juste les id
let products = [];
for(let i =0; i<produit.length; i++){
    products.push(produit[i]._id);
    
}

console.log(products);


let commande = {
    
    contact,
    products
      
};

console.log(commande);

//Redirection vers panier.html si le formulaire contact est vide
if(contact === null){
    window.location.href="panier.html";
}

//Post de l'objet contact et tableau produit
fetch("http://localhost:3000/api/cameras/order",{
    method : "POST",
    body : commande,
    headers : {
        "Accept": "application/json",
        "Content-Type" : "application/json",
    },
});*/

