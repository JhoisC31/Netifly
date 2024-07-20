const Colors = ["red","yellow","blue","#CD5C5C","#C70039","#40E0D0","#FFC300","#900C3F","#40E080"];

const colotLetter = document.getElementById("colorLetter");
const button = document.querySelector("button");

button.addEventListener("click", function(){
    let aleatorio = Math.floor(Math.random() * Colors.length);

    document.body.style.backgroundColor = Colors[aleatorio];
    colotLetter.textContent = Colors[aleatorio];
})