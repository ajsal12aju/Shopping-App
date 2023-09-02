var header = document.getElementById('header');

var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

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
            <a href="checkout.html">
                <i class="fa-solid fa-cart-shopping">
                    <span id="cart-count">${cartItems.length}</span>
                </i>
            </a>
        </div>
        <i class="fa-solid fa-user"></i>
    </div>
</div>`;
