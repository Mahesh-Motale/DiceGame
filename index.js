// changing first image
let random_number1 = Math.floor(Math.random()*6)+1;

let random_image1 = "images/dice" + random_number1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", random_image1);


// changing second image
let random_number2 = Math.floor(Math.random()*6)+1;

let random_image2 = "images/dice" + random_number2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",random_image2);


// changing the text
if(random_number1>random_number2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Winn !!!";
}
else if(random_number2>random_number1){
    document.querySelector("h1").innerHTML = "Player 2 Winn !!! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw !!!";
}


// Refresh page
function refresh_page(){
    window.location.reload();
}

