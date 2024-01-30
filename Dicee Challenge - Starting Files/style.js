var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "images/" + "dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6) +1;
var randomImageSource2 = "images/" + "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);