var headerpro = document.getElementById("header")
headerpro.innerHTML = `
<div class="logo">
<a href="/">
    <h4><span>SHOPE</span>LANE </h4>
</a>
</div>
<ul class="nav-links">
<li><a href="">HOME</a></li>
<li><a href="">CLOTHINGS</a></li>
<li><a href="">ACCESSORIES</a></li>
</ul>

<div class="icons">
<i class="fa-solid fa-magnifying-glass"></i>
<div class="cart">
    <a href=""><i class="fa-solid fa-cart-shopping"> <span id="cart-count">0</span></i></a>
</div>
<i class="fa-solid fa-user"></i>
</div>
</div>

`
$(document).ready(function() {
 
    var queryParams = new URLSearchParams(window.location.search);
    var productId = queryParams.get("id");

   
    $.ajax({
        url: 'https://5d76bf96515d1a0014085cf9.mockapi.io/product/' + productId,
        type: 'GET',
        success: function(productData) {
           
            displayProductDetails(productData);
        },
        error: function(error) {
            console.log('Error:', error);
        }
    });
});

function displayProductDetails(productData) {
    
    var container = document.getElementById("container");

    var leftChild = document.createElement("div");
    leftChild.className = "left";
    var productImage = document.createElement("img");
    productImage.className = "perant-img";
    productImage.src = productData.preview;
    leftChild.appendChild(productImage);
    container.appendChild(leftChild);

    var rightChild = document.createElement("div");
    rightChild.className = "right";

    var cardTitle = document.createElement("h1");
    cardTitle.className = "title";
    var cardBrand = document.createElement("h4");
    cardBrand.className = "brand";
    var cardPrice = document.createElement("h3");
    cardPrice.className = "card-price";
    var cardDescription = document.createElement("h4");
    cardDescription.className = "card-price";
    var description = document.createElement("p");
    description.className = "description";
    var product = document.createElement("h4");
    product.className = "card-price";

    cardTitle.innerText = productData.name;
    cardBrand.innerText = productData.brand;
    cardPrice.innerText = "Rs " + productData.price;
    cardDescription.innerText = "Description";
    description.innerText = productData.description;
    product.innerText = "Product";

    var imgdiv = document.createElement("div");
    imgdiv.className = "imgdiv";

    for (var i = 0; i < productData.photos.length; i++) {
        var images = document.createElement("img");
        images.className = "images";
        images.src = productData.photos[i];

        if (i === 0) {
            images.classList.add("active-first"); 
        }

        images.addEventListener("click", function() {
            var currentActive = document.querySelector(".images.active-first");
            if (currentActive) {
                currentActive.classList.remove("active-first");
            }
            this.classList.add("active-first");
            productImage.src = this.src;
        });

        imgdiv.appendChild(images);
    }

    container.appendChild(rightChild);
    rightChild.appendChild(cardTitle);
    rightChild.appendChild(cardBrand);
    rightChild.appendChild(cardPrice);
    rightChild.appendChild(cardDescription);
    rightChild.appendChild(description);
    rightChild.appendChild(product);
    rightChild.appendChild(imgdiv);

 

}

   



