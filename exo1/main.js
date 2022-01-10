console.log("test");

// Variables 
let tab = [];
let cpt = 0;

let resultat = document.getElementById("resultat");
let nbrCompte = document.getElementById("nbrCompte");

function ajouter(){
    let name = document.getElementById("name").value
    let firstName = document.getElementById("firstName").value;
    let login = document.getElementById("login").value;
    let mdp = document.getElementById("mdp").value;
    console.log(name);

    //test si champ vide
    if(name != "" && firstName != "" && login != "" && mdp != ""){
        tab.push([name, firstName, login, mdp]);

        resultat.innerHTML += "<p>Nom : "+name+", Prenom : "+ firstName+", Login : "+login+", Mot de passe : "+mdp+"</p>";

        cpt++;
    }

    // compteur de compte
    if (cpt>0){
        nbrCompte.innerHTML = "<p>Il y a "+cpt+" compte utilisateur </p>";
    }
};


// MODAL //
/* Modal */
//Variable qui récupére le modal
let modal = document.getElementById("myModal");
//Récupération du <span> pour fermer le modal
let span = document.getElementsByClassName("close")[0];
//fonction fermeture du modal quand l'utilisateur clic sur le <span> (x)
span.onclick = function() {
    modal.style.display = "none";
}
//fonction qui ouvre le modal
function openModal(e){
    modal.style.display = "block";
    //récupération du paragraphe 
    let btUpdate = document.getElementById("btUpdate");
    //injection du bouton dans le paragraphe
    btUpdate.innerHTML = "<input type='button' value='Modifier' onclick='updateUser("+e+")'></input>";
}
