// Change main image when thumbnail is clicked
function changeImage(src) {
    document.getElementById("mainImage").src = src;

    // Update active thumbnail
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach((thumb) => thumb.classList.remove("active"));
    event.currentTarget.classList.add("active");
}

// Quantity controls
document.querySelector(".minus").addEventListener("click", function () {
    const quantityInput = document.querySelector(".quantity-input");
    if (quantityInput.value > 1) {
        quantityInput.value--;
    }
});

document.querySelector(".plus").addEventListener("click", function () {
    const quantityInput = document.querySelector(".quantity-input");
    if (quantityInput.value < 5) {
        quantityInput.value++;
    }
});

// Color selection
const colorOptions = document.querySelectorAll(".color-option");
colorOptions.forEach((option) => {
    option.addEventListener("click", function () {
        colorOptions.forEach((opt) => opt.classList.remove("active"));
        this.classList.add("active");
    });
});

// Tab functionality
function openTab(tabName) {
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach((content) => content.classList.remove("active"));

    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => tab.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Cart functionality
let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

function addToCart() {
    const product = {
        id: "prod123",
        name: "Premium Wireless Headphones",
        price: 199.99,
        color: document.querySelector(".color-option.active").classList[1],
        quantity: parseInt(document.querySelector(".quantity-input").value),
        image: "https://via.placeholder.com/100x100?text=Headphones",
    };

    // Check if product already in cart
    const existingItem = cart.find(
        (item) => item.id === product.id && item.color === product.color
    );

    if (existingItem) {
        existingItem.quantity += product.quantity;
    } else {
        cart.push(product);
    }

    // Save to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    // Show success message
    alert(
        `${product.quantity} ${product.name} (${product.color}) added to cart!`
    );
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector(".cart-count").textContent = count;
}
