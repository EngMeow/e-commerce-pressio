/* =====================
===== nav bar =========*/

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

/* =====================
===== contact us checked =========*/
document.forms[0].submit() 
function contactMassege(){
    var contactName = document.getElementsByClassName("contact")[0].value;
    var contactEmail = document.getElementsByClassName("contact")[1];
    var contactNumber = document.getElementsByClassName("contact")[2].value;
    var contactMessage = document.getElementsByClassName("contact")[3].value;
    var contactBtn = document.getElementsByClassName("contact")[4];
    contactName?(contactEmail.validity.valid?(contactNumber?(contactMessage?
        (alert("We recieved your message and will contact you as soon as possible"))
        :alert("Please , fill out your message . Thx "))
        :alert("Please , fill out your phone number . Thx "))
        :alert("Please , fill out your e-mail to get your message . Thx "))
        :alert("Please , fill out your information to get your message . Thx ");
}
