const url = "http://localhost:3000/api/cameras/";

class Camera{
  constructor(jsonCamera){
    jsonCamera && Object.assign(this, jsonCamera);
  }
}



fetch(url)
//appel de l'api

  .then( res => res.json())

  .then( jsonListCamera => {
    
    for(let jsonCamera of jsonListCamera){
        
      let camera = new Camera(jsonCamera);

      console.log(camera);

      document.getElementById("produit").innerHTML += ` <div class="produit-un" id= ${camera._id} onclick=window.location.href="produit.html?id=${camera._id}">

                                                              <div class="produit-un__photo">
                                                                <img src=${camera.imageUrl} alt="photo du produit"/>
                                                              </div>

                                                              <div class="produit-un__description">
                                                                <h3>${camera.name}</h2>
                                                                <p>${camera.description}</p>
                                                                <p>${camera.price/100}€</p>
                                                              </div>
                                                              
                                                          </div>`;
    }
      
    console.log(jsonListCamera);
      

  })

    


  .catch (function(err){
    console.log("Une erreur est survenue");
    document.getElementById("produit").innerHTML += "<p>Le serveur ne répond pas, impossible d'afficher les articles.</p>";
  });






console.log("FIN SCRIPT");











