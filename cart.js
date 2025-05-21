// Cart data structure
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const cartContainer = document.getElementById('produitAchetes');
const cartSummary = document.getElementById('cartSummary');
const subtotalElement = document.getElementById('subtotal');
const shippingElement = document.getElementById('shipping');
const totalElement = document.getElementById('total');
const paymentForm = document.getElementById('paymentForm');

// Constants
const SHIPPING_COST = 5.00;

// Initialize cart
function initializeCart() {
    if (cart.length === 0) {
        showEmptyCart();
    } else {
        renderCart();
        updateSummary();
    }
    setupEventListeners();
    setupPaymentListeners();
}

// Setup event listeners
function setupEventListeners() {
    cartContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('removeBtn')) {
            const bookBuy = e.target.closest('.bookBuy');
            const index = Array.from(cartContainer.querySelectorAll('.bookBuy')).indexOf(bookBuy);
            if (index !== -1) {
                removeItem(index);
            }
        }
    });

    cartContainer.addEventListener('change', function(e) {
        if (e.target.tagName === 'SELECT') {
            const bookBuy = e.target.closest('.bookBuy');
            const index = Array.from(cartContainer.querySelectorAll('.bookBuy')).indexOf(bookBuy);
            if (index !== -1) {
                updateQuantity(index, e.target.value);
            }
        }
    });
}

// Setup payment method listeners
function setupPaymentListeners() {
    document.querySelectorAll('input[name="payment"]').forEach(function(el) {
        el.addEventListener('change', function() {
            const edahabiaDetails = document.getElementById('edahabiaDetails');
            const codDetails = document.getElementById('codDetails');
            
            edahabiaDetails.style.display = this.value === 'edahabia' ? 'block' : 'none';
            codDetails.style.display = this.value === 'cod' ? 'block' : 'none';
            
            // Update form validation
            const edahabiaInputs = edahabiaDetails.querySelectorAll('input');
            const codInputs = codDetails.querySelectorAll('input, select, textarea');
            
            edahabiaInputs.forEach(input => input.required = this.value === 'edahabia');
            codInputs.forEach(input => input.required = this.value === 'cod');
        });
    });
}

// Show empty cart message
function showEmptyCart() {
    cartContainer.innerHTML = `
        <h1>Your Shopping Cart</h1>
        <div class="empty-cart-message">
            <p>Your cart is empty</p>
            <a href="/" class="continue-shopping">Continue Shopping</a>
        </div>
    `;
    cartSummary.style.display = 'none';
}

// Render cart items
function renderCart() {
    const cartItemsHTML = cart.map((item, index) => `
        <div class="bookBuy" data-id="${item.id}">
            <div class="buybookImg">
                <img src="${item.image}" alt="${item.title} Cover" />
            </div>
            <div id="buybookInformations">
                <div class="buybookInfo">
                    <h4 class="buybooktitle">${item.title}</h4>
                    <h5 class="buybookauteur">By ${item.author}</h5>
                </div>
                <div class="buybookprice">€${item.price.toFixed(2)}</div>
                <div class="buybookquantCont">
                    <select aria-label="Quantité">
                        ${Array.from({length: 5}, (_, i) => 
                            `<option value="${i + 1}" ${item.quantity === i + 1 ? 'selected' : ''}>${i + 1}</option>`
                        ).join('')}
                    </select>
                </div>
                <div class="itemTotal">€${(item.price * item.quantity).toFixed(2)}</div>
                <button class="removeBtn">Remove</button>
            </div>
        </div>
    `).join('');

    cartContainer.innerHTML = `
        <h1>Your Shopping Cart</h1>
        ${cartItemsHTML}
    `;
}

// Update item quantity
function updateQuantity(index, newQuantity) {
    cart[index].quantity = parseInt(newQuantity);
    saveCart();
    renderCart();
    updateSummary();
}

// Remove item from cart
function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    if (cart.length === 0) {
        showEmptyCart();
    } else {
        renderCart();
        updateSummary();
    }
}

// Update cart summary
function updateSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + SHIPPING_COST;

    subtotalElement.textContent = `€${subtotal.toFixed(2)}`;
    shippingElement.textContent = `€${SHIPPING_COST.toFixed(2)}`;
    totalElement.textContent = `€${total.toFixed(2)}`;
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Form validation and submission
paymentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const selectedPayment = document.querySelector('input[name="payment"]:checked').value;
    let isValid = true;
    
    if (selectedPayment === 'edahabia') {
        const cardNumber = document.querySelector('#edahabiaDetails input').value;
        if (!validateEdahabiaCard(cardNumber)) {
            alert('Please enter a valid Edahabia card number');
            isValid = false;
        }
    } else if (selectedPayment === 'cod') {
        const phone = document.querySelector('#codDetails input[type="tel"]').value;
        const wilaya = document.querySelector('#wilaya').value;
        const address = document.querySelector('#codDetails textarea').value;

        if (!validateCODDetails(phone, wilaya, address)) {
            alert('Please enter valid phone number, select a wilaya, and provide a detailed address');
            isValid = false;
        }
    }

    if (isValid) {
        processPayment(selectedPayment);
    }
});

// Validate Edahabia card
function validateEdahabiaCard(cardNumber) {
    const cardNumberRegex = /^\d{16}$/;
    return cardNumberRegex.test(cardNumber);
}

// Validate COD details
function validateCODDetails(phone, wilaya, address) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone) && 
           wilaya !== '' && 
           address.trim().length > 0;
}

// Process payment
function processPayment(paymentMethod) {
    // Simulate payment processing
    let message = `Processing ${paymentMethod} payment...`;
    if (paymentMethod === 'cod') {
        const phone = document.querySelector('#codDetails input[type="tel"]').value;
        const wilaya = document.querySelector('#wilaya').value;
        const address = document.querySelector('#codDetails textarea').value;
        message += `\nDelivery to: ${wilaya}\n${address}\nPhone: ${phone}`;
    } else if (paymentMethod === 'edahabia') {
        const cardNumber = document.querySelector('#edahabiaDetails input').value;
        message += `\nEdahabia Card: ${cardNumber}`;
    }
    alert(message);
    
    // Clear cart after successful payment
    cart = [];
    saveCart();
    showEmptyCart();
    
    // Redirect to confirmation page
    setTimeout(() => {
        window.location.href = '/confirmation.html';
    }, 2000);
}

// Initialize cart when page loads
document.addEventListener('DOMContentLoaded', initializeCart);

// Example function to add item to cart (can be called from other pages)
function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }
    
    saveCart();
    renderCart();
    updateSummary();
}
