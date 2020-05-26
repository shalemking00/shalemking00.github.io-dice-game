var randomNumber1=Math.floor(Math.random()*6+1);
var diceNumber='dice' + randomNumber1 + ".png";
var imgSource="images/"+diceNumber;
var rndmImg=document.querySelectorAll("img")[0].setAttribute("src",imgSource);
var randomNumber2=Math.floor(Math.random()*6+1);
var diceNumber2='dice' + randomNumber2 + ".png";
var imgSource2="images/"+diceNumber2;
var rndmImg2=document.querySelectorAll("img")[1].setAttribute("src",imgSource2);
function title(){
  if(diceNumber===diceNumber2){
    var head1=document.querySelector("h1").innerHTML="It's DRAW !";
    return head1;
  }else if (diceNumber>diceNumber2) {
    var head2=document.querySelector("h1").innerHTML="Player1 Wins 🚩";
    return head2;
  }else{
    return document.querySelector("h1").innerHTML="Player2 Wins 🚩"
  }
}
title();
