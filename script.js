const products = [
    {
        id: 1, 
        name: "Bhringraj Growth Shampoo", 
        price: 499, 
        image: "https://images.unsplash.com/photo-1631730359585-38a4935ccbb2?auto=format&fit=crop&q=80&w=800",
        desc: "Strengthens hair from root to tip with ancient Bhringraj extracts."
    },
    {
        id: 2, 
        name: "Saffron Skin Glow Serum", 
        price: 899, 
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
        desc: "Kashmiri Saffron and 24k Gold flakes for an instant radiance."
    },
    {
        id: 3, 
        name: "Neem & Tulsi Cleanser", 
        price: 349, 
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800",
        desc: "Purifying herbal face wash to protect against environmental toxins."
    },
    {
        id: 4, 
        name: "Hibiscus Hair Mask", 
        price: 599, 
        image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
        desc: "Deep conditioning mask using crushed hibiscus and coconut milk."
    },
    {
        id: 5, 
        name: "Sandalwood Body Butter", 
        price: 749, 
        image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800",
        desc: "Moisturizing cream infused with pure Sandalwood oil for velvet skin."
    },
    {
        id: 6, 
        name: "Organic Coconut Hair Oil", 
        price: 299, 
        image: "https://images.unsplash.com/photo-1527477174627-c1d4715f3e9c?auto=format&fit=crop&q=80&w=800",
        desc: "Pure, cold-pressed coconut oil for daily hair strength and shine."
    }
];

// Re-run the initialization
function initProducts() {
    const container = document.getElementById('productsContainer');
    if(!container) return;
    
    container.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="product-img" style="background-image: url('${p.image}')"></div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <p class="product-price">₹${p.price}</p>
                <button class="btn" onclick="openQuickView(${p.id})" style="width:100%; margin-bottom:10px; background:#f0f0f0; color:#333">Quick View</button>
                <button class="add-to-cart" onclick="addToCart(${p.id})" style="border:2px solid var(--primary); background:none; width:100%; padding:10px; font-weight:700; cursor:pointer; border-radius:50px; transition: 0.3s;">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

initProducts();
