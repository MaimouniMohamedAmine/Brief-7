let btn = document.getElementById('btn'); 
let output = document.getElementById("outputtext");
let nombre = parseInt((Math.random() * 100)+1);
let tentatives = 0;
let endGame = document.getElementById('input');
let tnt = document.getElementById("tnt")

btn.addEventListener( 'click', function theProcess(){
    tentatives++;

    let input = Number(document.getElementById('userInput').value);
    if (input === nombre){ 
        if(tentatives == 1 || tentatives == 2){
            output.innerHTML = "Bravo, vous etes un Génie !!!";
            endGame.style.display="none";
        }
        else {
            output.innerHTML = "Félicitations, vous avez gagné après "+(tentatives-1)+"  tentatives";
            endGame.style.display="none";
        } 
    }
    else if (input < nombre){
        tnt.innerHTML = 10 - tentatives;
        output.innerHTML =  "C'est raté !! Essayez d'augmenter la prochaine fois";
    }
    else if(input > nombre){
        tnt.innerHTML = 10 - tentatives;
            output.innerHTML =  "C'est raté !! Essayez de baisser la prochaine fois";
    }
    if(tentatives == 10){
        endGame.style.display="none"
    }
});
