//Récupération chaine de requette URL

let params = new URLSearchParams(location.search);
let id = params.get("id");
console.log(id);



fetch ("http://localhost:3000/api/cameras/"+id)

.then(function(res) {
    if (res.ok) {
      return res.json();
      
    }
  })
  .then(function(camera) {
    console.log(camera);
    document.getElementById("section-produit").innerHTML += `<div id="section-produit-bloc" class="section-produit-bloc">

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
                                                                      
                                                                      <button>Ajouter au panier</button>
                                                                  </div>

                                                                  
                                                                  

                                                              </div>`;
  })
  .catch(function(err) {
    document.getElementById("section-produit").innerHTML += `<p>Une erreur est survenue</p>`
  });

