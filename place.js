var header = document.getElementById('header');

var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

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
            <a href="checkout.html">
                <i class="fa-solid fa-cart-shopping">
                    <span id="cart-count">${cartItems.length}</span>
                </i>
            </a>
        </div>
        <i class="fa-solid fa-user"></i>
    </div>
</div>`;

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