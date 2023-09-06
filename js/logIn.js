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

/**=============================================
 * ================ log in =====================
 */

// 2- email validation
function inputMail(){
    var mail = document.getElementById("logInEmail");
    let mailCheck =/^[A-z0-9.]*@(gmail).com/ig;

    if(mailCheck.test(mail) && mail.value){
        mail.style.border="yellowgreen 2px solid";
        console.log("vaild mail");
    }
    else {
        mail.style.border="red 2px solid"; 
        console.log("enter a valid email");
    }
}

// 3- password validation
function inputPass(){
    
    var pass = document.getElementById("logInPassword");
    let passCheck = /^[A-Z+a-z+0-9+]{8,}/ig;
    // console.log(passCheck.test(pass));
    
    
    if(passCheck.test(pass) && pass.value) {
        pass.style.border="yellowgreen 2px solid"; 
        console.log("vaild password");
    }
    else{
        pass.style.border="red 2px solid"; 
        console.log("enter a valid password");
    }
}


