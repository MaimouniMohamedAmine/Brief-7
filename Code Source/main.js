var form = document.getElementById("form")
var inputs = document.getElementsByTagName("Input")
var prix = document.getElementsByClassName("Prix")

function validateForm(e){
    e.preventDefault()
        for(var i=0;i<inputs.length -4; i++)
        if(inputs[i].value == ""){
            inputs[i].nextElementSibling.style.color = "red";
            inputs[i].nextElementSibling.innerHTML = "Veuillez remplire ce champ ";
    
    }   
    else{
        inputs[i].nextElementSibling.style.color = "green";
        inputs[i].nextElementSibling.innerHTML = "Champ Valide";
    }
    if(isNaN(prix.value)){
        inputs[i].nextElementSibling.style.color = "red";
        inputs[i].nextElementSibling.innerHTML = "Ce n'est pas un nombre!";
    }
    else{
        inputs[i].nextElementSibling.style.color = "green";
        inputs[i].nextElementSibling.innerHTML = "Champ Valide";
    }
}
form.addEventListener("submit",validateForm)
