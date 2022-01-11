// Récupérer tâche 
// localhost/task/api/task.php?task=1

// Récupérer la liste des tâches entre 2 dates (2022-01-10 et 2022-01-20):
// localhost/task/api/task.php?task=1&deb=’2022-01-10’&end=’2022-01-20’

// Récupérer la liste des catégories :
// http://localhost/task/api/task.php?cat

// Récupérer la liste des comptes utilisateurs :
// http://localhost/task/api/task.php?user

/* Variable */
let listUser = document.getElementById("listUser");
let listTask = document.getElementById("listTask");
let listCat = document.getElementById("listCat");

const urlTask = "http://localhost/task/api/task.php?task=1";
const urlCat = "http://localhost/task/api/task.php?cat";
const urlUser = "http://localhost/task/api/task.php?user";

function displayTask (url){
    
}