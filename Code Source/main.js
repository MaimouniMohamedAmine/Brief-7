var check = document.getElementsByClassName("check")
var form = document.getElementById("form");
var inputs = document.getElementsByTagName("input");
var prix = document.getElementsByClassName("prix");
var select = document.getElementById("Langues");
var small = document.getElementById("small");
var smol = document.getElementById("smol");
var type = document.getElementsByName("choix");
var table = document.getElementById("table");
var titre = document.getElementById("titre");


function validateForm(e){
    
    e.preventDefault();
    var validationErrors = 0;
    

    // Tester si les champs sont vides
    for(var i=0;i<4; i++){
        if(inputs[i].value == ""){
            validationErrors++;
            inputs[i].nextElementSibling.style.color = "red";
            inputs[i].nextElementSibling.innerHTML = "Ce champ ne peux pas rester vide!";
        }   
    else{
        inputs[i].nextElementSibling.style.color = "green";
        inputs[i].nextElementSibling.innerHTML = "Champ Valide";
    }
    }

    // Tester le champ titre
    if(inputs[0].value != ""){
        if(!isNaN(inputs[0].value)){
            validationErrors++;
            inputs[0].nextElementSibling.style.color = "red";
            inputs[0].nextElementSibling.innerHTML = "Ce n'est pas un titre!";
        }
        else if(!isNaN(inputs[0].value) && inputs[0].value.trim().length > 30)
        {
            inputs[0].nextElementSibling.style.color = "red";
            validationErrors++;
            inputs[0].nextElementSibling.innerHTML = "Le titre ne doit pas dépasser 30 caractères";
        }
        else{
            inputs[0].nextElementSibling.style.color = "green";
            inputs[0].nextElementSibling.innerHTML = "Champ valide";
        }
    }

    // Tester le champ auteur
    if(inputs[1].value != ""){
        if(!isNaN(inputs[1].value)){
            validationErrors++;
            inputs[1].nextElementSibling.style.color = "red";
            inputs[1].nextElementSibling.innerHTML = "Ce n'est pas un auteur!";
        }
        else if(isNaN(inputs[1].value) && inputs[1].value.trim().length > 30)
        {
            validationErrors++;
            inputs[1].nextElementSibling.style.color = "red";
            inputs[1].nextElementSibling.innerHTML = "Le nom de l'auteur ne doit pas dépasser 30 caractères";
        }
        else{
            inputs[1].nextElementSibling.style.color = "green";
            inputs[1].nextElementSibling.innerHTML = "Champ valide";
        }
    }
    

    // Tester le champ prix
    if(inputs[2].value != ""){
        if(!isNaN(inputs[2].value) && inputs[2].value > 0){
            inputs[2].nextElementSibling.style.color = "green";
            inputs[2].nextElementSibling.innerHTML = "Champ valide";
        }
        else if(isNaN(inputs[2].value) && inputs[2].value < 0) {
            validationErrors++;
            inputs[2].nextElementSibling.style.color = "red";
            inputs[2].nextElementSibling.innerHTML = "Le prix doit être positif";
        }
        else{
            inputs[2].nextElementSibling.style.color = "red";
            validationErrors++;
            inputs[2].nextElementSibling.innerHTML = "Ceci n'est pas un nombre!";
        }
    }    
    
    // Tester le champ langue
        if(select.value == ""){
            validationErrors++;
            select.nextElementSibling.innerHTML = "Sélectionnez une langue";
            select.nextElementSibling.style.color = "red";
        }
        else{
            select.nextElementSibling.innerHTML = "Champ valide";
            select.nextElementSibling.style.color = "green";
        }
        //Tester le champ type
        if(!(type[0].checked || type[1].checked || type[2].checked)){
            validationErrors++;
            small.style.color = "red"
            small.innerHTML = "Veuillez cocher votre type"
        }
        else{
            small.style.color = "green"
            small.innerHTML = "Champ valide"
        }

        ///////////-Tableau/insertCell-///////////////

        
        if(validationErrors==0){
            var newRow = table.insertRow(-1);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);
            var cell6 = newRow.insertCell(5);
            
            
            var cellType="";

                for(i=0;i<type.length;i++)
                {
                    if(check[i].checked)
                    {
                        cellType = check[i].value;
                    }
                }
                
                cell1.innerHTML = inputs[0].value;
                cell2.innerHTML = inputs[1].value;
                cell3.innerHTML = inputs[2].value;
                cell4.innerHTML = inputs[3].value;
                cell5.innerHTML = select.options[select.selectedIndex].value;
                cell6.innerHTML = cellType;
                newRow.insertCell(6).innerHTML = "<input onClick='Edit(this)' type='button' value='Modifier'><input type='button' value='Supprimer' onClick = 'Delete(this)'>";
                                                 //`<a onClick="onEdit(this)">Edit</a>
                                                 //<a onClick="onDelete(this)">Delete</a>`;                      
                
                
                
            
    
        }
    }
    
        function Delete(td){
            if (confirm('Vous êtes sûre de supprimer cette entrée?')) {
            row = td.parentElement.parentElement;
            document.getElementById("table").deleteRow(row.rowIndex);

        }}

        // Edit function;
        function Edit(r){
            var i = r.parentNode.parentNode.rowIndex;
            var row = table.rows[i];
            if(r.value == "Modifier"){
                inputs[0].value = row.cells[0].innerHTML;
                inputs[1].value = row.cells[1].innerHTML;
                inputs[2].value = row.cells[2].innerHTML;
                inputs[3].value = row.cells[3].innerHTML;
                
                // Language
                if(row.cells[4].innerHTML == "Anglais"){
                    select.selectedIndex = 1;
                }
                else if(row.cells[4].innerHTML == "Anglais"){
                    select.selectedIndex = 2;
                }
                else{
                    select.selectedIndex = 3;
                }

                // Type
                for(var i=0;i<type.length;i++){
                    if(row.cells[5].innerHTML==type[i].value){
                        type[i].checked = true;
                    }
                }
                r.value="Sauvegarder"
                document.getElementById("Soumettre").setAttribute("disabled","true");
            }
            else{
                row.cells[0].innerHTML = document.getElementById("titre").value;
                row.cells[1].innerHTML = document.getElementById("auteur").value;
                row.cells[2].innerHTML = document.getElementById("prix").value;
                row.cells[3].innerHTML = document.getElementById("date").value;
                row.cells[4].innerHTML = document.getElementById("Langues").value;
                for(var i=0;i<type.length;i++){
                    if(type[i].checked){
                        row.cells[5] = type[i].value;
                    }
                }
                r.value = "Modifier";
                document.getElementById("Soumettre").removeAttribute("disabled")
                inputs[0].value=""
                inputs[1].value=""
                inputs[2].value=""
                inputs[3].value=""
                inputs[4].value=""
                inputs[5].value=""
            }     }    
        document.getElementsByTagName("form")[0].addEventListener("submit", validateForm);
            // couldn't get it to work with the previous version
            //I had to call the form with its TagName instead of its Id 
            //Zoubair helped me to get it back   
