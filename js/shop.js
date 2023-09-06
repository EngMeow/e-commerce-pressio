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
/**===================== My Shop ============================ */
let productArr = [];
function product (id,name,price) {
    this.id = id;
    this.name = name;
    this.price = price;
    
}
productArr.push(new product(1,"MacBook pro 2020",1399.00));  
productArr.push(new product(2,"MacBook pro 2021",1499.00));  
productArr.push(new product(3,"MacBook pro 2022",1599.00));  
productArr.push(new product(4,"MacBook pro 2023",1699.00));  
productArr.push(new product(5,"Iphone 13 pro 64GB", 999.00));  
productArr.push(new product(6,"Iphone 13 pro 128GB",1099.00));  
productArr.push(new product(7,"Iphone 13 pro 256GB",1199.00));  
productArr.push(new product(8,"Iphone 13 pro 512GB",1299.00));  
productArr.push(new product(9," Iwatch smart watch ",699));  
productArr.push(new product(10,"Iwatch smart watch ",699));  
productArr.push(new product(11,"Iwatch smart watch ",699));  
productArr.push(new product(12,"Iwatch smart watch ",699));  
productArr.push(new product(13,"Imac apple 24-in 2023",1699.00));  
productArr.push(new product(14,"Imac apple 24-in 2021",1499.00));  
productArr.push(new product(15,"Imac apple 24-in 2020",1399.00));  
productArr.push(new product(16,"Imac apple 24-in 2022",1599.00));
productArr.push(new product(17,"Ipad apple 11-in 2020 ",1499.00));  
productArr.push(new product(18,"Ipad apple 11-in 2021 ",1699.00));  
productArr.push(new product(19,"Ipad apple 11-in 2022 ",1899.00));  
productArr.push(new product(20,"Ipad apple 11-in 2023 ",2099.00));  
productArr.push(new product(21,"airpods apple max",499));  
productArr.push(new product(22,"airpods apple max",499));  
productArr.push(new product(23,"airpods apple max",499));  
productArr.push(new product(24,"airpods apple max",499));   

// console.log(productArr);
let shopColumn = document.getElementsByClassName("shopColumn")[0];
let sections = document.getElementsByClassName("sections")[0];
var showPart = document.getElementsByClassName("showPart")[0];
var shopRow = document.createElement("div");
// create product card
function addProduct(productArr){
    shopColumn.innerHTML = "";
        var shopRow = document.createElement("div");
        shopRow.setAttribute("class","shopRow");
        shopRow.innerHTML="";
        // shopRow.setAttribute("id",`product${product1.id}`);
        // create new product cell
        
        for(let i = 0 ; i < productArr.length ; i++){  
            if( i % 4 == 0){
                console.log("you are correct");
                var shopRow = document.createElement("div");
                shopRow.setAttribute("class","shopRow");
            }     
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
            productBtn.setAttribute("type","button");
            productBtn.setAttribute("value","add to cart");
            productBtn.setAttribute("class","productBtn");

            shopColumn.append(shopRow);
            shopRow.append(shopCell);
            shopCell.append(productImg);
            shopCell.append(productPrice);
            shopCell.append(productName);
            shopCell.append(productCart);
            
            // img appear in it's div
            productImg.appendChild(cellImg);
        cellImg.src=`..//img/shop page/laptop/${productArr[i].id}.jpg`;
        
        // product price
        productPrice.innerHTML = productArr[i].price;

        //product name 
        productName.innerHTML = productArr[i].name;
        //product button
        productCart.append(productBtn);
        productBtn.placeholder = "add to cart";
        
        //test
        // Create a click event handler using the productCard function
        productBtn.addEventListener("click", productCard(productArr[i]));
    }
}
let productCardArr = [];
function productCard(product) {
    return function() {
        // Create an object with product information
        const productInfo = {
            id: product.id,
            name: product.name,
            price: product.price
        };

        // Push the product info object into the array
        productCardArr.push(productInfo);

        // Convert the entire array to a JSON string
        const productCardArrJSON = JSON.stringify(productCardArr);

        // Save the JSON string in local storage
        localStorage.setItem('selectedProduct', productCardArrJSON);

        console.log("Product ID:", product.id);
        console.log("Product Name:", product.name);
        console.log("Product Price:", product.price);

        // Here you can perform actions related to adding the product to the cart
    };
}



addProduct(productArr);


/**=========================== PRICE SORT ======================================== */
// highPrice();
function highPrice(){
    var Descending = [...productArr.sort((a, b) => b.price - a.price)];
    addProduct(Descending);
}

// lowPrice();
function lowPrice(){
    var Ascending = [...productArr.sort((a, b) => a.price - b.price)];
    addProduct(Ascending);
}

const price = document.getElementById('price');

price.addEventListener('change', (event) => {
  const selectedOption = event.target.value;
  if(selectedOption == "high to low"){
    highPrice();
}
else if(selectedOption == "low to high"){
    lowPrice();
}
else if(selectedOption == "choose"){
    addProduct(productArr);
}
console.log('Selected option value:', selectedOption);
});

/**=========================== FILTER SORT ======================================== */
// // type filter

const Type = document.getElementsByClassName('Type')[0];

Type.addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    if(selectedOption == "MacBook"){
        var iphoneFilter = productArr.filter(product => product.name.match("MacBook"));
        addProduct(iphoneFilter);
    }
    else if(selectedOption == "Iphone"){
    var iphoneFilter = productArr.filter(product => product.name.match("Iphone"));
    addProduct(iphoneFilter);
}
else if(selectedOption == "Imac"){
    var iphoneFilter = productArr.filter(product => product.name.match("Imac"));
    addProduct(iphoneFilter);
}
else if(selectedOption == "Iwatch"){
    var iphoneFilter = productArr.filter(product => product.name.match("Iwatch"));
    addProduct(iphoneFilter);
}
else if(selectedOption == "Ipad"){
    var iphoneFilter = productArr.filter(product => product.name.match("Ipad"));
    addProduct(iphoneFilter);
}
else if(selectedOption == "airpods"){
    var iphoneFilter = productArr.filter(product => product.name.match("airpods"));
    addProduct(iphoneFilter);
}
console.log('Selected option value:', selectedOption);
});


// console.log(iphoneFilter);


