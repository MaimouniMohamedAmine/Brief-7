var form = document.getElementById("form")
var inputs = document.getElementsByTagName("input")
var prix = document.getElementsByClassName("Prix")

function validateForm(e){
    e.preventDefault();
        for(var i=0;i<inputs.length -4; i++){
        if(inputs[i].value == ""){
            inputs[i].nextElementSibling.style.color = "red";
            inputs[i].nextElementSibling.innerHTML = "Ce champ ne peux pas rester vide! ";
    }   
    else{
        inputs[i].nextElementSibling.style.color = "green";
        inputs[i].nextElementSibling.innerHTML = "Champ Valide";
    }
}
        if(inputs[2].value=""){
            inputs[2].nextElementSibling.style.color = "red";
            inputs[2].nextElementSibling.innerHTML = "Ce champ ne peux pas rester vide!";
        }
    if(isNaN(inputs[2].value)){
        inputs[2].nextElementSibling.style.color = "red";
        inputs[2].nextElementSibling.innerHTML = "Ce n'est pas un nombre!";
        if(inputs[2].value!=""){
            inputs[2].nextElementSibling.style.color = "green";
            inputs[2].nextElementSibling.innerHTML = "Champ Valide";
        }
    }
}
form.addEventListener("submit",validateForm)
