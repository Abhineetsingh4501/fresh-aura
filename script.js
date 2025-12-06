// Updated product data for Fresh Aura (English names, Indian prices)
const products = [
    {
        id: 1,
        name: "Bhringraj Shampoo",
        price: 399.00,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1587840131109-7756e267b2d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Hair Care",
        badge: "BESTSELLER",
        description: "Formulated with Bhringraj and Fenugreek, this shampoo strengthens hair roots, reduces hair fall, and controls dandruff.",
        options: [
            { name: "Volume", values: ["250ml", "500ml"] },
            { name: "Scent", values: ["Sandalwood", "Rose"] }
        ]
    },
    {
        id: 2,
        name: "Niacinamide + Zinc Serum",
        price: 649.00,
        oldPrice: 799.00,
        image: "https://images.unsplash.com/photo-1627918341907-775b871216d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Face Serum",
        badge: "SALE",
        description: "With 5% Niacinamide and Zinc, this serum minimizes pores, reduces acne scars, and improves overall skin texture and tone.",
        options: [
            { name: "Volume", values: ["30ml", "60ml"] }
        ]
    },
    {
        id: 3,
        name: "Salicylic Acid Gentle Face Wash",
        price: 299.00,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Face Wash",
        badge: "NEW",
        description: "A gentle face wash with 2% Salicylic Acid (BHA) that clears acne and blackheads without drying out the skin.",
        options: [
            { name: "Volume", values: ["100ml", "200ml"] }
        ]
    },
    {
        id: 4,
        name: "Ayurvedic Coconut Hair Oil",
        price: 249.00,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Hair Oil",
        badge: null,
        description: "Pure coconut oil enriched with Amla and Brahmi. This oil makes hair thick, strong, and reduces premature greying.",
        options: [
            { name: "Volume", values: ["100ml", "250ml"] }
        ]
    },
    {
        id: 5,
        name: "Sandalwood and Neem Body Wash",
        price: 349.00,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1527477174627-c1d4715f3e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Body Wash",
        badge: null,
        description: "A detoxifying body wash with the coolness of Sandalwood and Neem. Protects skin from germs and locks in moisture.",
        options: [
            { name: "Scent", values: ["Sandal-Neem", "Tulsi-Mint"] }
        ]
    },
    {
        id: 6,
        name: "Anti-Dandruff Hair Serum",
        price: 499.00,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1628172825547-b86e2468307d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Hair Serum",
        badge: "NEW",
        description: "A light serum with Tea Tree Oil and Lemon that effectively controls scalp itchiness and dandruff.",
        options: [
            { name: "Volume", values: ["30ml"] }
        ]
    }
];

// --- Utility Functions for Indian Localization (Kept) ---

function formatPrice(price) {
    return `₹${price.toFixed(2)}`;
}

const CURRENCY_SYMBOL = '₹';

// --- Functions modified for English Labels/Messages ---

// 1. renderProducts: Labels changed to English (Quick View, Add to Cart)
function renderProducts() {
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
        // ... (HTML generation logic remains the same, but using English labels)
        
        let oldPriceHTML = '';
        if (product.oldPrice) {
            oldPriceHTML = `<span class="old-price">${formatPrice(product.oldPrice)}</span>`;
        }
        
        productCard.innerHTML = `
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-img" style="background-image: url('${product.image}')">
                <div class="product-overlay">
                    <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">
                    ${oldPriceHTML}
                    ${formatPrice(product.price)}
                </div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // ... (Event listener setup remains the same)
}


// 2. openProductModal: Labels changed to English (Add to Cart button text)
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // ... (Modal content generation remains the same, using English names/descriptions from 'products' array)

    modalProductContent.innerHTML = `
        <div class="modal-product-img" style="background-image: url('${product.image}')"></div>
        <div class="modal-product-info">
            <h2>${product.name}</h2>
            <div class="modal-product-price">${formatPrice(product.price)}</div>
            <div class="modal-product-description">
                ${product.description}
            </div>
            ${optionsHTML}
            <div class="quantity-selector">
                <button class="quantity-btn" id="decreaseQty">-</button>
                <input type="number" class="quantity-input" id="productQty" value="1" min="1">
                <button class="quantity-btn" id="increaseQty">+</button>
            </div>
            <button class="btn add-to-cart-modal" data-id="${product.id}" style="width: 100%;">Add to Cart</button>
        </div>
    `;
    
    productModal.style.display = 'flex';
    
    // ... (Event listeners remain the same)
}


// 3. updateCartDisplay: Labels changed to English (Empty cart, Remove)
function updateCartDisplay() {
    // ... (totalItems and cartCount logic remains the same)

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #6b7280;">Your cart is empty.</p>';
        cartTotalElement.textContent = `${CURRENCY_SYMBOL}0.00`;
        return;
    }
    
    // ... (cartTotal calculation remains the same)

    cart.forEach(item => {
        // ... (Cart item HTML generation)
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-img" style="background-image: url('${item.image}')"></div>
            <div class="cart-item-info" style="flex-grow: 1;">
                <h4>${item.name}</h4>
                ${optionsDisplay}
                <div class="cart-item-price">${formatPrice(item.price)} × ${item.quantity} = ${formatPrice(item.price * item.quantity)}</div>
                <div class="cart-item-actions">
                    <button class="remove-item" data-key="${item.key}">Remove</button>
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    // ... (Event listeners and cartTotalElement update remain the same)
}


// 4. Checkout and Toast messages are localized
function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    
    showToast('Proceeding to checkout! (This is a demo)');
    // ... (Timeout logic remains the same)
}

function addToCart(productId, quantity = 1, options = {}) {
    // ... (Logic remains the same)
    updateCartDisplay();
    showToast('Product added to cart!'); 
}

// Newsletter subscription update
newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    showToast('Thank you for subscribing to Fresh Aura! You will receive a discount code shortly.');
    this.reset();
});

// ... (All other original JS functions remain the same)
