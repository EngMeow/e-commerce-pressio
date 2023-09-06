// Logo image link
var logoImg = document.getElementsByClassName("logoPic");
var logoLink = document.getElementsByClassName("linkLogoPic");
// logoImg.parentNode.replaceChild(logoLink, logoImg);

// nav bar menu 
// home anchor


// Function to toggle the bar
function showMenu() {
    var x = document.getElementsByClassName("listMenu")[0];
    
    if (x.style.opacity === "1") {
        x.style.opacity = "0";
        // x.style.display = "none";
        
    } else {
        x.style.opacity = "1";
        // x.style.display = "block";
    }
}

/*=============== shop now and 2 arrows ==============================*/
//change photo


var switchValue = 1;
var sImg = document.getElementById("switchImg");
function fswitching(){
    if( switchValue == 13){
        switchValue = 0;
    };
    switchValue++;
    sImg.src = `../img/main page/main page/${switchValue}.jpg`
    return switchValue ;
}
    
function bswitching(){
    //change photo
    if( switchValue == 1){
        switchValue = 13;
    };
    switchValue--;
    sImg.src = `../img/main page/main page/${switchValue}.jpg`;
    return switchValue ;
}
var i = 0 

// var timerID = setInterval(function change(){
//     fswitching()},4000);

// object.onunload = function(){clearTimeout(timerID);};    


