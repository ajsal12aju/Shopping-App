var headerpro = document.getElementById("header")
var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

headerpro.innerHTML = `
<div class="logo">
<a href="/">
    <h4><span>SHOPE</span>LANE </h4>
</a>
</div>
<ul class="nav-links">
<li><a href="home.html">HOME</a></li>
<li><a href="">CLOTHINGS</a></li>
<li><a href="">ACCESSORIES</a></li>
</ul>

<div class="icons">
<i class="fa-solid fa-magnifying-glass"></i>
<div class="cart">
    <a href="checkout.html"><i class="fa-solid fa-cart-shopping"> <span id="cart-count">${cartItems.length}</span></i></a>
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

        images.addEventListener("click", function () {
            var currentActive = document.querySelector(".images.active-first");
            if (currentActive) {
                currentActive.classList.remove("active-first");
            }
            this.classList.add("active-first");
            productImage.src = this.src;
        });

        imgdiv.appendChild(images);
    }

    var addToCart = $('<button class="add-btn">Add To Cart</button>');
    addToCart.attr("data-product-id", productData.id);
    addToCart.attr("data-product-name", productData.name);
    addToCart.attr("data-product-price", productData.price);
    addToCart.attr("data-product-image", productData.preview);

    container.appendChild(rightChild);
    rightChild.appendChild(cardTitle);
    rightChild.appendChild(cardBrand);
    rightChild.appendChild(cardPrice);
    rightChild.appendChild(cardDescription);
    rightChild.appendChild(description);
    rightChild.appendChild(product);
    rightChild.appendChild(imgdiv);
    
    rightChild.append(addToCart[0]);

    addToCart.click(addToCartClicked);
}

function addToCartClicked(event) {
    var button = event.target;
    var productId = button.dataset.productId;
    var productName = button.dataset.productName;
    var productPrice = button.dataset.productPrice;
    var productImage = button.dataset.productImage;

    addToCartLocalStorage(productId, productName, productPrice, productImage);
    updateCartCount();
}

function addToCartLocalStorage(productId, name, price, image) {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    var existingItem = cartItems.find(item => item.productId === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        var newItem = {
            productId: productId,
            name: name,
            price: price,
            image: image,
            quantity: 1
        };
        cartItems.push(newItem);
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function updateCartCount() {
    var cartCountSpan = document.getElementById("cart-count");
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var count = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartCountSpan.textContent = count;
}


updateCartCount();


var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
console.log(cartItems)


