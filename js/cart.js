var switchValue = 1;
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

/**================================================= */
/**===================== cart page ============================ */

// Call the function to display stored product information

let shopColumn = document.getElementsByClassName("shopColumn")[0];
let sections = document.getElementsByClassName("sections")[0];
var showPart = document.getElementsByClassName("showPart")[0];
var shopRow = document.createElement("div");

// create product card
function addProduct(){
    // Function to retrieve and display product information from local storage
    // Retrieve the JSON string from local storage
    const productInfoJSON = localStorage.getItem('selectedProduct');

    const productInfo = JSON.parse(productInfoJSON);
    if (productInfoJSON) {
        // Parse the JSON string to an object
        // Display the product information on your webpage
        console.log("Stored Product ID:", productInfo.id);
        console.log("Stored Product Name:", productInfo.name);
        console.log("Stored Product Price:", productInfo.price);
        console.log(productInfo); 
    }   
    
    shopColumn.innerHTML = "";
        var shopRow = document.createElement("div");
        shopRow.setAttribute("class","shopRow");
        shopRow.innerHTML="";
        // shopRow.setAttribute("id",`product${product1.id}`);
        // create new product cell
        
        for(let i = 0 ; i < productInfo.length ; i++){  
                
            var shopCell = document.createElement("div");
            shopCell.setAttribute("class","shopCell");
            // product img div
            var productImg = document.createElement("div");
            productImg.setAttribute("class","productImg");
            // product img in div
            var cellImg = document.createElement("img");
            cellImg.setAttribute("class","cellImg");
            // product price 
            var productPrice = document.createElement("div");
            productPrice.setAttribute("class","productPrice");
            // product name
            var productName = document.createElement("div");
            productName.setAttribute("class","productName");
            // product cart
            var productCart = document.createElement("div");
            productCart.setAttribute("class","productCart");
            // product button
            var productBtn = document.createElement("input");
            productBtn.setAttribute("type","number");
            productBtn.setAttribute("placeholder","1");
            productBtn.setAttribute("class","productBtn");
            
            var totalPrice = document.createElement("div");
            totalPrice.setAttribute("class","totalPrice");

            shopColumn.append(shopRow);
            shopRow.append(shopCell);
            shopCell.append(productImg);
            shopCell.append(productName);
            shopCell.append(productPrice);
            shopCell.append(productCart);
            shopCell.append(totalPrice);
            productCart.append(productBtn);
            
            // img appear in it's div
            productImg.appendChild(cellImg);
        cellImg.src=`..//img/shop page/laptop/${productInfo[i].id}.jpg`;
        
        // product price
        productPrice.innerHTML = productInfo[i].price;

        //product name 
        productName.innerHTML = productInfo[i].name;
        //product button
        function totalSum(){
            totalPrice.innerHTML = productInfo[i].price * productBtn.value ;

        }
        productBtn.addEventListener("keypress",totalSum);
        console.log(totalPrice.innerHTML);
        console.log(productBtn.placeholder);
        console.log(productBtn.placeholder);
        console.log(productBtn.value);
        
        //test
        // Create a click event handler using the productCard function
    }
}

addProduct();


