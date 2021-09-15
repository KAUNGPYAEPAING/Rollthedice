
var dicenumber1 = Math.floor(Math.random() * 6) + 1;

document.querySelectorAll('img')[0].setAttribute("src","images/dice" + dicenumber1 + ".png");


var dicenumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelectorAll('img')[1].setAttribute("src","images/dice" + dicenumber2 + ".png");

if(dicenumber1 < dicenumber2){
  document.querySelector('h1').innerText = "Player 2 Win";
}else if (dicenumber1 > dicenumber2){
  document.querySelector('h1').innerText = "Player 1 win";
} else {
    document.querySelector('h1').innerText = "Draw";
}
