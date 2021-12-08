var form = document.getElementById("form")
var inputs = document.getElementsByTagName("input")
var prix = document.getElementsByClassName("Prix")
var type = document.getElementsByClassName("type")
var msg = document.getElementsByTagName("small")
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
   
        if(!isNaN(inputs[2].value)){
            inputs[2].nextElementSibling.style.color = "green";
            inputs[2].nextElementSibling.innerHTML = "Champ Valide";
            console.log(inputs[2])
            if(inputs[2].value==""){
                inputs[2].nextElementSibling.style.color = "red";
                inputs[2].nextElementSibling.innerHTML = "Ce champ ne peux pas rester vide!";
            }
        }
        else{
            inputs[2].nextElementSibling.style.color = "red";
            inputs[2].nextElementSibling.innerHTML = "Ceci n'est pas un nombre!";
        }
         if(!isNaN(inputs[1].value)){
            inputs[1].nextElementSibling.style.color = "red";
            inputs[1].nextElementSibling.innerHTML = "Ce n'est pas un auteur!";
         }
         else{
            inputs[1].nextElementSibling.style.color = "green";
            inputs[1].nextElementSibling.innerHTML = "Champ Valide";
         }
         if(!(type[0].checked || type[1].checked || type[2].checked)){
            msg[-1].nextElementSibling.style.color = "red";
            msg[-1].nextElementSibling.innerHTML = "Ce n'est pas un auteur!";
         }

        }


form.addEventListener("submit",validateForm)
