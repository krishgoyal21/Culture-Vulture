function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartList = document.getElementById("cart-list");
    const cartCount = document.getElementById("cart-count");

    cartList.innerHTML = "";
    cartCount.textContent = `${cart.length} item(s) in your bag`;

    let subtotal = 0;

    cart.forEach((item, index) => {
        const totalPrice = (item.price * item.quantity).toFixed(2);
        subtotal += item.price * item.quantity;

        cartList.innerHTML += `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" width="80">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>Size: ${item.size} | Type: ${item.type}</p>
                <div class="price-qty">
                    <span class="price">₹${item.price}</span>
                    <div class="quantity">
                        <button onclick="changeQty(${index}, -1)">-</button>
                        <input type="number" value="${item.quantity}" min="1" readonly>
                        <button onclick="changeQty(${index}, 1)">+</button>
                    </div>
                    <span class="total">₹${totalPrice}</span>
                </div>
            </div>
        </div>
        `;
    });

    document.getElementById("cart-subtotal").textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById("cart-discount").textContent = "₹0.00"; 
    document.getElementById("cart-total").textContent = `₹${subtotal.toFixed(2)}`;
}

function changeQty(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].quantity += change;

    // Remove item if quantity is zero or less
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function checkout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before checkout.");
    } else {
        window.location.href = "/address";  // ✅ Flask route instead of static file
    }
}

loadCart();
