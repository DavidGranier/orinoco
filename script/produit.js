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
  //Affichage des caractéristiques de l'id de la camera 
  .then(function(camera) {
    console.log(camera);
    
    document.getElementById("imagecamera").setAttribute("src",camera.imageUrl);





    /* document.getElementById("section-produit").innerHTML += `<div id="section-produit-bloc" class="section-produit-bloc">

                                                                  <div class="section-produit-bloc__image"><img src="${camera.imageUrl}"/></div>
                                                                  
                                                                  <div class="section-produit-bloc__description">
                                                                      <div class="section-produit-bloc__description__model">
                                                                        <p>${camera.name}</p>
                                                                        <span class="section-produit-bloc__description__star">
                                                                          <i class="fas fa-star fa-xs">
                                                                          </i><i class="fas fa-star fa-xs">
                                                                          </i><i class="fas fa-star fa-xs"></i>
                                                                          <i class="fas fa-star fa-xs"></i>
                                                                          <i class="fas fa-star-half-alt fa-xs"></i>
                                                                        </span>
                                                                      </div>
                                                                      <div class="section-produit-bloc__description__texte"><p>${camera.description}</p></div>
                                                                      <form action="">
                                                                        <select id="listederoulante" name="Objectif">
                                                                          
                                                                          <option value="">${camera.lenses[0]}</option>
                                                                          <option value="">${camera.lenses[1]}</option>
                                                                          <option value="">${camera.lenses[2]}</option>
                                                                        </select>
                                                                      </form>
                                                                      <div class="section-produit-bloc__description__prix"><p>Prix : ${camera.price/100}€</p></div>
                                                                      <button id="boutonpanier">Ajouter au panier</button>
                                                                      <p id="confirmationpanier"></p>
                                                                  </div>

                                                                  
                                                                  

                                                              </div>`;*/

//PANIER

//ciblage du bouton Ajouter au panier                                                      
const boutonPanier = document.querySelector("#boutonpanier");

//ciblage paragraphe "ajouté au panier"
const confirmationPanier = document.querySelector("#confirmationpanier");

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



  //local Storage
  /*
let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.log(produitLocalStorage);
*/
  produitLocalStorage.push(produitPanier);
  localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
  console.log(produitLocalStorage);
})
  })
  .catch(function(err) {
    document.getElementById("section-produit").innerHTML += `<p>Une erreur est survenue</p>`
  });








