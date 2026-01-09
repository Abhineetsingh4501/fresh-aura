const products = [
    { id: 1, name: "Bhringraj Shampoo", price: 399, oldPrice: 499, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80", description: "Strengthens roots and reduces hair fall with authentic Bhringraj extracts.", options: ["250ml", "500ml"] },
    { id: 2, name: "Niacinamide Serum", price: 649, oldPrice: 799, image: "https://images.unsplash.com/photo-1616782299719-21b93f1d5300?auto=format&fit=crop&w=800&q=80", description: "Minimizes pores and clears skin texture.", options: ["30ml"] },
    { id: 3, name: "Coconut Hair Oil", price: 249, oldPrice: null, image: "https://images.unsplash.com/photo-1579301648937-23b9d62d3a98?auto=format&fit=crop&w=800&q=80", description: "Pure cold-pressed coconut oil for deep conditioning.", options: ["200ml"] },
    { id: 4, name: "Sandalwood Body Wash", price: 349, oldPrice: null, image: "https://images.unsplash.com/photo-1544111308-412e6973e6e8?auto=format&fit=crop&w=800&q=80", description: "Refreshing scent with antibacterial Neem properties.", options: ["300ml"] }
];

let cart = [];

function renderProducts() {
    const container = document.getElementById('productsContainer');
    container.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="product-img" style="background-image: url('${p.image}')">
                <div class="product-overlay">
                    <button class="btn" onclick="openModal(${p.id})">Quick View</button>
                </div>
            </div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <div class="product-price">₹${p.price} ${p.oldPrice ? `<span class="old-price">₹${p.oldPrice}</span>` : ''}</div>
                <button class="add-to-cart" onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function openModal(id) {
    const p = products.find(prod => prod.id === id);
    document.getElementById('modalProductContent').innerHTML = `
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 30px;">
            <img src="${p.image}" style="width:100%; border-radius:10px;">
            <div>
                <h2>${p.name}</h2>
                <p>${p.description}</p>
                <h3 style="color:var(--primary)">₹${p.price}</h3>
                <select style="padding:10px; width:100%; margin: 15px 0;">
                    ${p.options.map(opt => `<option>${opt}</option>`).join('')}
                </select>
                <button class="btn" onclick="addToCart(${p.id}); closeModal();">Add to Cart</button>
            </div>
        </div>
    `;
    document.getElementById('productModal').style.display = 'flex';
}

function addToCart(id) {
    const p = products.find(prod => prod.id === id);
    cart.push(p);
    updateUI();
    showToast(p.name);
}

function updateUI() {
    document.getElementById('cartCount').innerText = cart.length;
    document.getElementById('cartItems').innerHTML = cart.map((item, i) => `
        <div style="display:flex; justify-content:space-between; margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
            <span>${item.name}</span>
            <span>₹${item.price}</span>
        </div>
    `).join('');
    const total = cart.reduce((acc, curr) => acc + curr.price, 0);
    document.getElementById('cartTotal').innerText = `₹${total}`;
}

function showToast(name) {
    const t = document.getElementById('toast');
    document.getElementById('toastMessage').innerText = `${name} added to cart!`;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

// Event Listeners
document.getElementById('cartIcon').onclick = () => document.getElementById('cartSidebar').classList.add('active');
document.getElementById('closeCart').onclick = () => document.getElementById('cartSidebar').classList.remove('active');
document.getElementById('closeModal').onclick = () => document.getElementById('productModal').style.display = 'none';

function closeModal() { document.getElementById('productModal').style.display = 'none'; }

// Init
renderProducts();
