//récupération de l'ID de commande dans l'URL
let params = new URLSearchParams(location.search);
let id = params.get("id");
console.log(id);


//vide le panier automatiquement après la validation de la commande

if(id !== null){
    localStorage.clear();
    document.getElementById("section-commande").innerHTML = `<p>Votre commande n°<strong>${id}</strong> à bien été envoyée</p>`;
}

else{
    window.location.href ="./index.html";


}