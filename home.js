var header = document.getElementById("header")
var headerpro = document.getElementById("header-pro")
var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
var totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);


header.innerHTML = `
<div class="logo">
<a href="home.html">
    <h4><span>SHOPE</span>LANE </h4>
</a>
</div>
<ul class="nav-links">
<li><a href="#">HOME</a></li>
<li><a href="#clothing-section">CLOTHINGS</a></li>
<li><a href="#accessories-section">ACCESSORIES</a></li>
</ul>

<div class="icons">
<i class="fa-solid fa-magnifying-glass"></i>
<div class="cart">
    <a href="checkout.html"><i class="fa-solid fa-cart-shopping"> <span id="cart-count">${totalQuantity}</span></i></a>
</div>
<i class="fa-solid fa-user"></i>
</div>
</div>
`

var banner = document.getElementsByClassName("banner")[0]; 
banner.innerHTML = `
<div class="car">
<div id="carousel">
    <img src="https://shoplane.netlify.app/img/img4.png" alt="Image 1">
    <img src="https://shoplane.netlify.app/img/img1.png" alt="Image 2">
    <img src="https://shoplane.netlify.app/img/img2.png" alt="Image 3">
    <img src="https://shoplane.netlify.app/img/img3.png" alt="Image 4">
</div>
</div>
<div class="dots">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</div>
`;

const carousel = document.getElementById('carousel');
const images = carousel.getElementsByTagName('img');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showImage(index) {
    currentIndex = index;
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showImage(index);
    });
});

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    updateDots();
}

setInterval(nextImage, 2000);


$(document).ready(function() {
    $.ajax({
        url: 'https://5d76bf96515d1a0014085cf9.mockapi.io/product',
        type: 'GET',
        success: function(response) {
            
            for (var i = 0; i < response.length; i++) {
                var product = response[i];

                var cardElement = document.createElement("div");

                cardElement.setAttribute("data-product-id", product.id); 

                cardElement.onclick = function() {
                    var productId = this.getAttribute("data-product-id");
                    displayProductDetails(productId);
                };
                cardElement.className = "cloth-card";
                var cardImage = document.createElement("img");
                cardImage.className = "card-img";
                var cardContent = document.createElement("div");
                cardContent.className = "card-content";

                var cardDescription = document.createElement("h3");
                cardDescription.className = "card-desc";
                var cardBrand = document.createElement("h4");
                cardBrand.className = "card-brand";
                var cardPrice = document.createElement("h5");
                cardPrice.className = "card-price";

                cardImage.src = product.preview;
                cardDescription.innerText = product.name;
                cardBrand.innerText = product.brand;
                cardPrice.innerText = "Rs " + product.price;

                if (product.isAccessory) {
                  
                    document.getElementById("accessories-section").appendChild(cardElement);
                } else {
                   
                    document.getElementById("clothing-section").appendChild(cardElement);
                }

                cardElement.appendChild(cardImage);
                cardElement.appendChild(cardContent);
                cardContent.appendChild(cardDescription);
                cardContent.appendChild(cardBrand);
                cardContent.appendChild(cardPrice);
            }
        },
        error: function(error) {
            console.log('Error:', error);
        }
    });
});


function displayProductDetails(productId) {
    
    window.location.href = "product.html?id=" + productId;
}

var footer = document.getElementById("footer")
footer.innerHTML = `

<ul class="online-store">
        <li>
            <h3>ONLINE STORE</h3>
        </li>
        <li><a href="">MEN CLOTHING</a></li>
        <li><a href="">WOMEN ACCESSORIES</a></li>
        <li><a href="">MEN ACCESSORIES</a></li>
        <li><a href="">WOMEN CLOTHING</a></li>
    </ul>
    <ul class="online-store">
        <li>
            <h3>HELPFULL LINK</h3>
        </li>
        <li><a href="">HOME</a></li>
        <li><a href="">ABOUT</a></li>
        <li><a href=""> CONTACT</a></li>
    </ul>
    <ul class="online-store">
        <li>
            <h3>PATNERS</h3>
        </li>
        <li><a href="">ADDIDAS</a></li>
        <li><a href="">NIKE</a></li>
        <li><a href="">LEVIES</a></li>
        <li><a href="">US POLO</a></li>
    </ul>
    <ul class="online-store">
        <li>
            <h3>ADDRESS</h3>
        </li>
        <li><a href="">BUILDING 101</a></li>
        <li><a href="">CENTRAL AVENUE</a></li>
        <li><a href="">LA - 902722</a></li>
        <li><a href="">UNITED STATES</a></li>
    </ul>`

