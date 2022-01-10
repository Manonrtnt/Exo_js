console.log("test");

// Variables 
let tab = [];
let cpt = 0;
// let imgDelete = document.createElement('img'); 
// imgDelete.src = 'delete.png';
// let imgEdit = document.createElement('img');
// imgEdit.src = 'edit.png';

let resultat = document.getElementById("resultat");
// Même resultat que getElement
let nbrCompte = document.querySelector("#nbrCompte");
let error = document.getElementById("error");
let form = document.querySelector("form");

/* Ajouter user */
function add(){
    let name = document.getElementById("name").value
    let firstName = document.getElementById("firstName").value;
    let login = document.getElementById("login").value;
    let mdp = document.getElementById("mdp").value;
    console.log(name);

    //test si champ vide
    if(name != "" && firstName != "" && login != "" && mdp != ""){
        tab.push([name, firstName, login, mdp]);

        resultat.innerHTML += "<p>Nom : "+name+", Prenom : "+ firstName+", Login : "+login+", Mot de passe : "+mdp+ "<img src='delete.png' width='5%'>" + "<img src='edit.png' width='5%'>" + "</p>";

        cpt++;
    } else {
        error.innerHTML = "Veuillez remplir tous les champs avant d'ajouter un utilisateur";
    }

    // compteur de compte
    if (cpt>0){
        nbrCompte.innerHTML = "<p>Il y a "+cpt+" compte utilisateur </p>";
    }
    // Effacer le champ après l'ajout de l'utilisateur. 
    //form.reset();
};

// /* Modal */
// //Variable qui récupére le modal
// let modal = document.getElementById("myModal");
// //Récupération du <span> pour fermer le modal
// let span = document.getElementsByClassName("close")[0];
// //fonction fermeture du modal quand l'utilisateur clic sur le <span> (x)
// span.onclick = function() {
//     modal.style.display = "none";
// }
// //fonction qui ouvre le modal
// function openModal(e){
//     modal.style.display = "block";
//     //récupération du paragraphe 
//     let btUpdate = document.getElementById("btUpdate");
//     //injection du bouton dans le paragraphe
//     btUpdate.innerHTML = "<input type='button' value='Modifier' onclick='updateUser("+e+")'></input>";
// }

/* Supprimer user 
function delete(){

}*/







/*    CORRECTION    */
/*//variable tableau qui va stocker les utilisateurs
let tab = [];
//variable compteur
let cpt = 0;
//récupération des élèments html
let resultat = document.getElementById("resultat");
let nbrCompte = document.getElementById("nbrCompte");
let error = document.getElementById("error");
//fonction qui ajoute un compte et actualise l'interface web
function ajouter(){
    //récupération des valeurs dans les champs de formulaire
    let name = document.querySelector("#name").value;
    let firstName = document.querySelector("#firstName").value;
    let login = document.querySelector("#login").value;
    let mdp = document.querySelector("#mdp").value;
    //test si les 4 champs (name, firstName, login et mdp sont complétés)
    if(name != "" && firstName != "" && login != "" && mdp != ""){
        //insertion des données des champs de formulaire à la suite du tableau (à la fin du tableau)
        tab.push([name, firstName, login, mdp]);
        //affichage des comptes utilisateurs ajoutés (incrémentation de la liste resultat (chaîne string resutat))     
        resultat.innerHTML += "<p>Nom : " + tab[cpt][0] + " Prénom : " + tab[cpt][1] + " Login : " + tab[cpt][2] + " Mot de passe : " + tab[cpt][3]+"</p>";
        //incrémentation du compteur index du tableau
        cpt++;
        //test affichage du nombre de comptes utilisateurs créés
        //si le compteur est égal à 1
        if(cpt == 1){
            nbrCompte.innerHTML = "Il y à : "+ (cpt)+ " compte utilisateur";
        }
        //si le compteur est supérieur à 1
        else{
            nbrCompte.innerHTML = "Il y à : "+ (cpt)+ " comptes utilisateurs";
        }
        //suppression du message d'erreur
        error.innerHTML = "";
    }
    //si les 4 champs ne sont pas remplis affichage d'un message d'erreur
    else{
        error.innerHTML = "Veuillez compléter tous les champs de formulaires !!!";
    }         
}*/