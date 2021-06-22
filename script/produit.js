
//---------------------------------------------------------------Affichage du produit séléctionné----------------------------

//Récupération chaine de requette URL
let params = new URLSearchParams(location.search);
let id = params.get("id");
console.log(id);





//fetch de la camera en fonction de l'id de la valeur de l'url
fetch ("http://localhost:3000/api/cameras/"+id)

  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
    //Affichage des caractéristiques de la camera 
  .then(function(camera) {
    console.log(camera);
      
    document.getElementById("imagecamera").setAttribute("src",camera.imageUrl);
    document.getElementById("nomcamera").textContent = `${camera.name}`;
    document.getElementById("descriptioncamera").textContent = `${camera.description}`;
    document.getElementById("prixcamera").textContent = `Prix : ${camera.price/100} €`;


      //liste deroulante des objectifs
      var select = document.getElementById("listederoulante");
      for(i in camera.lenses) {
        select.options[select.options.length] = new Option(camera.lenses[i]);
      }
     //-------------------------------------------------------------FIN Affichage du produit séléctionné----------------------------

    //-------------------------------------------------------------Ajout au panier localstorage---------------------------------------


      //Ajout de l'article au click du bouton "ajouter au panier" + actualisation du nombre d'item affiché dans le panier

  //ciblage du bouton Ajouter au panier                                                      
  const boutonPanier = document.querySelector("#boutonpanier");

  //Récupération du produit choisit dans une variable 
  boutonpanier.addEventListener("click", (event)=>{
    event.preventDefault();
    let produitLocalStorage = [];
    if(JSON.parse(localStorage.getItem("produit")) !== null)
    {
      produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
      
    }

    let produitPanier = {
      image: camera.imageUrl,
      nom : camera.name,
      id : camera._id,
      prix : camera.price

    }
    console.log(produitPanier);

    produitLocalStorage.push(produitPanier);
    localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
    console.log(produitLocalStorage);
    //affichage du message de confirmation en HTML
    document.getElementById("confirmationpanier").style.display = "block";

    //Actualisation du nombre d'item dans le panier a chaque click sur "ajouter au panier"
    let notifPanier = localStorage.getItem("produit");
    if(notifPanier !== null){
    notifPanier = JSON.parse(localStorage.getItem("produit"));
    document.querySelector(".header__panier p").innerHTML =`${notifPanier.length} articles`;
    };


    })
  })

    .catch(function(err) {
      document.getElementById("section-produit").innerHTML += `<p>Une erreur est survenue</p>`
    });



  //notification article dans le panier







