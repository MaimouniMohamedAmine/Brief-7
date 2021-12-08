var form = document.getElementById("form")
var inputs = document.getElementsByTagName("input")
var prix = document.getElementsByClassName("Prix")
var type = document.getElementsByName("choix")
var select = document.getElementById("Langues");
var smol = document.getElementById("smol")
// var msg = document.getElementsByTagName("small")

function validateForm(e){
    e.preventDefault();

    // Tester si les champs sont vides
    for(var i=0;i<inputs.length -4; i++){
        if(inputs[i].value == ""){
            inputs[i].nextElementSibling.style.color = "red";
            inputs[i].nextElementSibling.innerHTML = "Ce champ ne peux pas rester vide! ";
        }   
    // else{
    //     inputs[i].nextElementSibling.style.color = "green";
    //     inputs[i].nextElementSibling.innerHTML = "Champ Valide";
    // }
    }
   

    // Tester le champ titre
    if(!isNaN(inputs[0].value)){
        inputs[0].nextElementSibling.style.color = "red";
        inputs[0].nextElementSibling.innerHTML = "Ce n'est pas un titre!";
    }
    else if(isNaN(inputs[0].value) && inputs[0].value.trim().length > 30)
    {
        inputs[0].nextElementSibling.style.color = "red";
        inputs[0].nextElementSibling.innerHTML = "Le titre ne doit pas dépasser 30 caractères";
    }
    else{
        inputs[0].nextElementSibling.style.color = "green";
        inputs[0].nextElementSibling.innerHTML = "Champ valide";
    }
    

    // Tester le champ auteur
    if(!isNaN(inputs[1].value)){
        inputs[1].nextElementSibling.style.color = "red";
        inputs[1].nextElementSibling.innerHTML = "Ce n'est pas un auteur!";
    }
    else if(isNaN(inputs[1].value) && inputs[1].value.trim().length > 30)
    {
        inputs[1].nextElementSibling.style.color = "red";
        inputs[1].nextElementSibling.innerHTML = "Le nom de l'auteur ne doit pas dépasser 30 caractères";
    }
    else{
        inputs[1].nextElementSibling.style.color = "green";
        inputs[1].nextElementSibling.innerHTML = "Champ valide";
    }
    

    // Tester le champ prix
    if(!isNaN(inputs[2].value) && inputs[2].value > 0){
        inputs[2].nextElementSibling.style.color = "green";
        inputs[2].nextElementSibling.innerHTML = "Champ valide";
        // console.log(inputs[2])
        // if(inputs[2].value==""){
        //     inputs[2].nextElementSibling.style.color = "red";
        //     inputs[2].nextElementSibling.innerHTML = "Ce champ ne peux pas rester vide!";
        // }
    }
    else if(!isNaN(inputs[2].value) && inputs[2].value < 0) {
        inputs[2].nextElementSibling.style.color = "red";
        inputs[2].nextElementSibling.innerHTML = "Le prix doit être positif";
    }
    else{
        inputs[2].nextElementSibling.style.color = "red";
        inputs[2].nextElementSibling.innerHTML = "Ceci n'est pas un nombre!";
    }


    // Tester le champ langue
    if(select.value == ""){
        smol.innerHTML = "Sélectionnez une langue";
        select.style.color = "red";
    }
    else{
        select.nextElementSibling.innerHTML = "Champ valide";
        select.style.color = "green"
    }

    // Tester le champ type
    // if(!(type[0].checked || type[1].checked || type[2].checked)){
    // type[i].nextElementSibling.style.color = "red"
    // type[i].nextElementSibling.innerHTML = "Veillez cocher votre type"
    // }

    }


form.addEventListener("submit",validateForm)
