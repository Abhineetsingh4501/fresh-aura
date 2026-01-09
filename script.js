const products = [
    {
        id: 1, 
        name: "Bhringraj Growth Shampoo", 
        price: 499, 
        image: "https://images.unsplash.com/photo-1552046122-03184de85e08?auto=format&fit=crop&q=80&w=800",
        desc: "Hand-pressed Bhringraj leaves mixed with organic Aloe Vera for deep root nourishment."
    },
    {
        id: 2, 
        name: "Saffron Skin Glow Serum", 
        price: 899, 
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
        desc: "Kashmiri Saffron and 24k Gold flakes for an instant, natural radiance."
    },
    {
        id: 3, 
        name: "Neem Detox Body Wash", 
        price: 349, 
        image: "https://images.unsplash.com/photo-1601049676518-d820512b3240?auto=format&fit=crop&q=80&w=800",
        desc: "Purifying Neem and Holy Basil (Tulsi) to protect and cleanse your skin."
    },
    {
        id: 4, 
        name: "Hibiscus Hair Mask", 
        price: 599, 
        image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
        desc: "Intensive repair mask that restores shine using crushed hibiscus petals."
    }
];

let cart = [];

// Render Product Grid
function initProducts() {
    const container = document.getElementById('productsContainer');
    container.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="product-img" style="background-image: url('${p.image}')"></div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <p class="product-price">₹${p.price}</p>
                <button class="btn" onclick="openQuickView(${p.id})" style="width:100%; margin-bottom:10px; background:#eee; color:#333">Quick View</button>
                <button class="add-to-cart" onclick="addToCart(${p.id})" style="border:2px solid var(--primary); background:none; width:100%; padding:10px; font-weight:700; cursor:pointer; border-radius:50px;">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Quick View Modal
function openQuickView(id) {
    const p = products.find(prod => prod.id === id);
    const modal = document.getElementById('productModal');
    document.getElementById('modalProductContent').innerHTML = `
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:40px;">
            <img src="${p.image}" style="width:100%; border-radius:20px;">
            <div>
                <h2 style="font-family:'Playfair Display'; font-size:32px;">${p.name}</h2>
                <p style="margin:20px 0; color:#666;">${p.desc}</p>
                <p style="font-size:24px; font-weight:700; color:var(--primary)">₹${p.price}</p>
                <button class="btn" onclick="addToCart(${p.id}); closeModal();" style="margin-top:30px; width:100%;">Add to Bag</button>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
}

// Cart Logic
function addToCart(id) {
    const p = products.find(prod => prod.id === id);
    cart.push(p);
    updateCartUI();
    showToast(`${p.name} added!`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    cartCount.innerText = cart.length;
    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div>
                <strong style="display:block;">${item.name}</strong>
                <span>₹${item.price}</span>
            </div>
            <button class="remove-item" onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.innerText = `₹${total}`;
}

// UI Toggles
function showToast(msg) {
    const t = document.getElementById('toast');
    document.getElementById('toastMessage').innerText = msg;
    t.style.display = 'block';
    setTimeout(() => t.style.display = 'none', 3000);
}

document.getElementById('cartIcon').onclick = () => document.getElementById('cartSidebar').classList.add('active');
document.getElementById('closeCart').onclick = () => document.getElementById('cartSidebar').classList.remove('active');
document.getElementById('closeModal').onclick = closeModal;

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Initialize
initProducts();
