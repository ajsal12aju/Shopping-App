var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
var rightSide = document.querySelector('.right-side');
var totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

var header = document.getElementById("header");
header.innerHTML = `
<div class="logo">
    <a href="home.html">
        <h4><span>SHOPE</span>LANE </h4>
    </a>
</div>
<ul class="nav-links">
    <li><a href="home.html">HOME</a></li>
    <li><a href="home.html">CLOTHINGS</a></li>
    <li><a href="home.html">ACCESSORIES</a></li>
</ul>

<div class="icons">
    <i class="fa-solid fa-magnifying-glass"></i>
    <div class="cart">
        <a href="checkout.html"><i class="fa-solid fa-cart-shopping"> <span id="cart-count">${totalQuantity}</span></i></a>
    </div>
    <i class="fa-solid fa-user"></i>
</div>
</div>
`;

var total = document.getElementById('total');
var price = 0;

rightSide.innerHTML = `
    <div class="total-amount">
        <h2>Total amount</h2>   
        <p>Total Amount: Rs <span id="total-price"></span></p>
        <a href="place.html"><button id="place-order">Place Order</button></a>
    </div>
`;

total.innerHTML = `
    <p>Total Items : <span id="number-of-items">${totalQuantity}</span></p>
`;

var checkout = document.getElementById('cart-container');


for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    price += item.price * item.quantity;

    var quantity =+ item.quantity

    checkout.innerHTML += `
        <div class="left-side">
            <div class="cart-items">
                <div class="item">
                    <img src=${item.image}>
                    <div class="detail">
                        <h3>${item.name}</h3>
                          <p>${item.quantity}</p>
                        <p> Rs  ${item.price * item.quantity}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}


document.getElementById("total-price").textContent = ` ${price}`;

document.addEventListener("DOMContentLoaded", function () {
    var placeOrderButton = document.getElementById("place-order");
    placeOrderButton.addEventListener("click", function () {
        localStorage.removeItem("cartItems");
    });
});

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