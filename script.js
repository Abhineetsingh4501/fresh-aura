// Updated product data for Fresh Aura (English names, Indian prices)
const products = [
    {
        id: 1,
        name: "Bhringraj Shampoo",
        price: 399.00,
        oldPrice: null,
        // FIXED IMAGE URL
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
        // FIXED IMAGE URL
        image: "https://images.unsplash.com/photo-1616782299719-21b93f1d5300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
        // FIXED IMAGE URL
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
        // FIXED IMAGE URL
        image: "https://images.unsplash.com/photo-1579301648937-23b9d62d3a98?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=crop&h=400",
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
        // FIXED IMAGE URL
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
        // FIXED IMAGE URL
        image: "https://images.unsplash.com/photo-1582215888941-bd56a815a510?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=crop&h=400",
        category: "Hair Serum",
        badge: "NEW",
        description: "A light serum with Tea Tree Oil and Lemon that effectively controls scalp itchiness and dandruff.",
        options: [
            { name: "Volume", values: ["30ml"] }
        ]
    }
];

// ... (Rest of the JavaScript functions remain the same)
