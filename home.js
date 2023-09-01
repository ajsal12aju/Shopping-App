var header = document.getElementById("header")

header.innerHTML = `
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
const carousel = document.getElementById('carousel');
const images = carousel.getElementsByTagName('img');
let currentIndex = 0;

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * 100; // 100% width for each image
    carousel.style.transform = `translateX(${offset}%)`;

    if (currentIndex === images.length - 1) {
        setTimeout(() => {
            currentIndex = 0;
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(0%)`;
            setTimeout(() => {
                carousel.style.transition = 'transform 1s ease';
            }, 0);
        }, 1000);
    }
}

setInterval(nextImage, 2000);