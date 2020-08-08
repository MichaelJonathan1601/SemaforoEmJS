let semaf = document.getElementById ( 'semaf');
let turnRed = document.getElementById ('turnRed');
let turnYellow = document.getElementById ('turnYellow');
let turnGreen = document.getElementById ('turnGreen');
let turnAutomatic = document.getElementById ('turnAutomatic');

function redOn () {
    semaf.src = "./img/vermelho.png";
}
function yellowOn () {
    semaf.src ="./img/amarelo.png";
}
function greenOn () {
    semaf.src = "./img/verde.png";
}


let images = ["./img/vermelho.png","./img/amarelo.png","./img/verde.png"];
let index=0;

function automatic()
{
  semaf.setAttribute("src", images[index]);
  index++;
  if(index >= images.length)
  {
    index=0;
  }
}

setInterval(automatic, 1000);

turnRed.addEventListener ( 'click', redOn);
turnYellow.addEventListener ('click', yellowOn);
turnGreen.addEventListener ('click', greenOn);
turnAutomatic.addEventListener ('click', automatic);