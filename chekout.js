var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
var rightSide = document.querySelector('.right-side');
var totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

var header = document.getElementById("header");
header.innerHTML = `
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
