//vider le panier
function vider(){
    localStorage.clear("produit");
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
    //affiche le formulaire si le panier n'est pas vide
    document.querySelector(".section-formulaire").style.display = "block";

}

else{
    console.log("Panier vide");
    document.getElementById("section-panier").innerHTML+=`<div class="section-panier__erreur"><p >Vous n'avez pas encore ajouté de produit à votre panier.<br/> </p><button onclick="window.location.href='index.html'">Consultez notre cathalogue</button></div>`;
}



//-----------------------------------------------------------------------Formulaire



//VALIDATION FORMULAIRE APRES CONTROLE

let contact = [];
const commander = document.getElementById("validerformulaire");

commander.addEventListener("click", (event)=>{
    event.preventDefault();

        //Récupération des valeurs du formulaire
    let inputPrenom = document.getElementById("prenom").value;
    let inputNom = document.getElementById("nom").value;
    let inputEmail = document.getElementById("email").value;
    let inputVille = document.getElementById("ville").value;
    console.log(inputPrenom);


    //Controle des input formulaire

    //controle prénom
    function validPrenom(){
        if(/^[a-zA-ZéèîïÉÈÎÏ][A-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/.test(inputPrenom)){
            console.log("OK");
            document.getElementById("prenomalert").innerHTML = "<i class='fas fa-check'></i>";
            document.getElementById("prenomalert").style.color = "green";
            document.getElementById("prenom").style= "border:solid 2px green; background-color:rgba(0, 128, 0, 0.24);";
            return true;
        }
        else{
            console.log("KO");
            document.getElementById("prenomalert").textContent = "Veuillez saisir votre prénom";
            document.getElementById("prenomalert").style.color = "red";
            document.getElementById("prenom").style= "border:solid 2px red; background-color:rgba(255, 0, 0, 0.288);";
            return false;
        }
    };

    //controle nom
    function validNom(){
        if(/^[a-zA-ZéèîïÉÈÎÏ][A-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/.test(inputNom)){
            console.log("OK");
            document.getElementById("nomalert").innerHTML = "<i class='fas fa-check'></i>";
            document.getElementById("nomalert").style.color = "green";
            document.getElementById("nom").style= "border:solid 2px green; background-color:rgba(0, 128, 0, 0.24);";
            return true;
        }
        else{
            console.log("KO");
            document.getElementById("nomalert").textContent = "Veuillez saisir votre prénom";
            document.getElementById("nomalert").style.color = "red";
            document.getElementById("nom").style= "border:solid 2px red; background-color:rgba(255, 0, 0, 0.288);";
            return false;
        }
    };

    //controle email
    function validEmail(){
        if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail)){
            console.log("OK");
            document.getElementById("emailalert").innerHTML = "<i class='fas fa-check'></i>";
            document.getElementById("emailalert").style.color = "green";
            document.getElementById("email").style= "border:solid 2px green; background-color:rgba(0, 128, 0, 0.24);";
            return true;
        }
        else{
            console.log("KO");
            document.getElementById("emailalert").textContent = "Veuillez saisir votre prénom";
            document.getElementById("emailalert").style.color = "red";
            document.getElementById("email").style= "border:solid 2px red; background-color:rgba(255, 0, 0, 0.288);";
            return false;
        }
    };
    //controle ville
    function validVille(){
        if(/^[a-zA-ZéèîïÉÈÎÏ][A-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/.test(inputVille)){
            console.log("OK");
            document.getElementById("villealert").innerHTML = "<i class='fas fa-check'></i>";
            document.getElementById("villealert").style.color = "green";
            document.getElementById("ville").style= "border:solid 2px green; background-color:rgba(0, 128, 0, 0.24);";
            return true;
        }
        else{
            console.log("KO");
            document.getElementById("villealert").textContent = "Veuillez saisir votre prénom";
            document.getElementById("villealert").style.color = "red";
            document.getElementById("ville").style= "border:solid 2px red; background-color:rgba(255, 0, 0, 0.288);";
            return false;
        }
    };

    //execution si toutes les fonctions sont valide
    if (validPrenom() && validNom() && validEmail() && validVille()){
        //nettoyage du localstorage
        localStorage.removeItem("contact");


        //définition de l'objet contact
        let contact = {
            prenom : document.getElementById("prenom").value,
            nom : document.getElementById("nom").value,
            email : document.getElementById("email").value,
            ville : document.getElementById("ville").value,

        };

        //envoi dans le local storage
        console.log(contact);
        localStorage.setItem("contact", JSON.stringify(contact));

        window.location.href = "commande.html";
    }
    
    
    else{
        alert("Veuillez completer le formulaire");
    };

    

    
});



/*// création de regex pour formulaire
    let NomValid =    /^[a-zA-ZéèîïÉÈÎÏ][A-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/; 
    let PrenomValid = /^[a-zA-ZéèîïÉÈÎÏ][A-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
    let EmailValid =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let VilleValid =  /^[a-zA-ZéèîïÉÈÎÏ][A-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;*/
