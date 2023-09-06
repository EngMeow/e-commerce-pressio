var switchValue = 1;
// Logo image link
var logoImg = document.getElementsByClassName("logoPic");
var logoLink = document.getElementsByClassName("linkLogoPic");
logoImg.parentNode.replaceChild(logoLink, logoImg);

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