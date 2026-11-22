const restaurantWhatsApp = "923001234567";


const foods = [
    // BIRYANI
    { id: 1, name: "BK Special Biryani", category: "Biryani", price: 700, description: "Quarter chicken piece, raita, salad and shami", image: "burger.jpg" },
    { id: 2, name: "Single Piece Biryani", category: "Biryani", price: 350, description: "Biryani with chicken piece", image: "burger.jpg" },
    { id: 3, name: "Double Piece Biryani", category: "Biryani", price: 450, description: "Biryani with two chicken pieces", image: "burger.jpg" },
    { id: 4, name: "Plain Rice", category: "Biryani", price: 250, description: "Plain rice", image: "burger.jpg" },

    // DEALS
    { id: 5, name: "Super Deal", category: "Deals", price: 600, description: "Double piece biryani, raita, salad, 500ml cold drink", image: "burger.jpg" },
    { id: 6, name: "Wow Deal", category: "Deals", price: 500, description: "Single piece biryani, raita, salad, 500ml cold drink", image: "burger.jpg" },
    { id: 7, name: "Family Deal", category: "Deals", price: 1800, description: "4 single piece biryanis, 1.5L cold drink, 4 raita, 2 salads", image: "burger.jpg" },

    // SAJJI & SHAWAYA
    { id: 8, name: "Sajji", category: "Sajji & Shawaya", price: 800, description: "Q/H/F sizes available; starting price", image: "burger.jpg" },
    { id: 9, name: "Shawaya Chicken", category: "Sajji & Shawaya", price: 600, description: "Q/H/F sizes available; starting price", image: "burger.jpg" },
    { id: 10, name: "Sajji Rice", category: "Sajji & Shawaya", price: 300, description: "Rice served with sajji", image: "burger.jpg" },
    { id: 11, name: "Sajji Chargha Full", category: "Sajji & Shawaya", price: 1500, description: "Full chargha", image: "burger.jpg" },
    { id: 12, name: "Sajji Chargha Half", category: "Sajji & Shawaya", price: 800, description: "Half chargha", image: "burger.jpg" },
    { id: 13, name: "Sajji Chargha Quarter", category: "Sajji & Shawaya", price: 500, description: "Quarter chargha", image: "burger.jpg" },

    // BROAST
    { id: 14, name: "Spicy Injected Broast", category: "Brosto", price: 700, description: "Q/H/F options; fries, bun and sauce included", image: "burger.jpg" },
    { id: 15, name: "Fried Chicken", category: "Brosto", price: 700, description: "Q/H/F options listed on menu", image: "burger.jpg" },
    { id: 16, name: "Zinger Burger", category: "Brosto", price: 450, description: "Zinger burger", image: "burger.jpg" },
    { id: 17, name: "Chicken Wrap", category: "Brosto", price: 490, description: "Chicken wrap", image: "burger.jpg" },
    { id: 18, name: "Fried Wings 8 Pieces", category: "Brosto", price: 700, description: "8 pieces fried wings", image: "burger.jpg" },
    { id: 19, name: "Krunch Burger", category: "Brosto", price: 300, description: "Krunch burger", image: "burger.jpg" },
    { id: 20, name: "Club Sandwich", category: "Brosto", price: 450, description: "Club sandwich", image: "burger.jpg" },
    { id: 21, name: "Chicken Sandwich", category: "Brosto", price: 450, description: "Chicken sandwich", image: "burger.jpg" },
    { id: 22, name: "Chicken Cheese Sandwich", category: "Brosto", price: 550, description: "Chicken and cheese sandwich", image: "burger.jpg" },

    // DAAL CHAWAL
    { id: 23, name: "Daal Chawal Plate", category: "Daal Chawal", price: 280, description: "Daal chawal plate", image: "burger.jpg" },

    // ROLLS & WRAPS
    { id: 24, name: "Paratha Roll", category: "Rolls & Wraps", price: 350, description: "Paratha roll", image: "burger.jpg" },
    { id: 25, name: "Shata Roll", category: "Rolls & Wraps", price: 550, description: "Roll", image: "burger.jpg" },
    { id: 26, name: "Wehshi Roll", category: "Rolls & Wraps", price: 700, description: "Roll", image: "burger.jpg" },
    { id: 27, name: "Malai Roll", category: "Rolls & Wraps", price: 450, description: "Malai roll", image: "burger.jpg" },
    { id: 28, name: "Garlic Roll", category: "Rolls & Wraps", price: 500, description: "Garlic roll", image: "burger.jpg" },
    { id: 29, name: "Mayo Roll", category: "Rolls & Wraps", price: 400, description: "Mayo roll", image: "burger.jpg" },
    { id: 30, name: "Kabab Roll", category: "Rolls & Wraps", price: 350, description: "Kabab roll", image: "burger.jpg" },
    { id: 31, name: "Tikka Cheese Roll", category: "Rolls & Wraps", price: 450, description: "Tikka and cheese roll", image: "burger.jpg" },
    { id: 32, name: "Malai Cheese Roll", category: "Rolls & Wraps", price: 550, description: "Malai and cheese roll", image: "burger.jpg" },
    { id: 33, name: "Dhamaka Roll", category: "Rolls & Wraps", price: 500, description: "Special roll", image: "burger.jpg" },
    { id: 34, name: "Pataka Roll", category: "Rolls & Wraps", price: 500, description: "Special roll", image: "burger.jpg" },
    { id: 35, name: "Jumbo Roll", category: "Rolls & Wraps", price: 700, description: "Jumbo roll", image: "burger.jpg" },
    { id: 36, name: "Zinger Roll", category: "Rolls & Wraps", price: 400, description: "Zinger roll", image: "burger.jpg" },
    { id: 37, name: "Arabian Roll", category: "Rolls & Wraps", price: 350, description: "Arabian roll", image: "burger.jpg" },
    { id: 38, name: "Chapata Roll", category: "Rolls & Wraps", price: 350, description: "Chapata roll", image: "burger.jpg" },

    // KARACHI BBQ
    { id: 39, name: "Leg Piece", category: "Karachi BBQ", price: 400, description: "BBQ leg piece", image: "burger.jpg" },
    { id: 40, name: "Chest Piece", category: "Karachi BBQ", price: 450, description: "BBQ chest piece", image: "burger.jpg" },
    { id: 41, name: "Malai Botti 5 Pieces", category: "Karachi BBQ", price: 400, description: "5 pieces", image: "burger.jpg" },
    { id: 42, name: "Tikka Botti 4 Pieces", category: "Karachi BBQ", price: 250, description: "4 pieces", image: "burger.jpg" },
    { id: 43, name: "Tikka Boneless 5 Pieces", category: "Karachi BBQ", price: 400, description: "5 pieces", image: "burger.jpg" },
    { id: 44, name: "Nablat 5 Pieces", category: "Karachi BBQ", price: 300, description: "5 pieces", image: "burger.jpg" },
    { id: 45, name: "Kastori Botti", category: "Karachi BBQ", price: 400, description: "BBQ botti", image: "burger.jpg" },
    { id: 46, name: "Chicken Kabab", category: "Karachi BBQ", price: 170, description: "Chicken kabab", image: "burger.jpg" },
    { id: 47, name: "Chicken Cheese Kabab", category: "Karachi BBQ", price: 250, description: "Chicken cheese kabab", image: "burger.jpg" },
    { id: 48, name: "Pizza Kabab", category: "Karachi BBQ", price: 300, description: "Pizza kabab", image: "burger.jpg" },
    { id: 49, name: "Beef Kabab", category: "Karachi BBQ", price: 200, description: "Beef kabab", image: "burger.jpg" },

    // CHATKHARA TAWA PIECE
    { id: 50, name: "Chatkhara Leg", category: "Chatkhara Tawa Piece", price: 800, description: "Tawa leg", image: "burger.jpg" },
    { id: 51, name: "Chatkhara Chest", category: "Chatkhara Tawa Piece", price: 800, description: "Tawa chest", image: "burger.jpg" },
    { id: 52, name: "Malai Tawa Leg", category: "Chatkhara Tawa Piece", price: 900, description: "Malai tawa leg", image: "burger.jpg" },
    { id: 53, name: "Malai Tawa Chest", category: "Chatkhara Tawa Piece", price: 900, description: "Malai tawa chest", image: "burger.jpg" },
    { id: 54, name: "Extra Gravy", category: "Chatkhara Tawa Piece", price: 150, description: "Extra gravy", image: "burger.jpg" },

    // PARATHA
    { id: 55, name: "Chicken Paratha", category: "Paratha", price: 390, description: "Chicken paratha", image: "burger.jpg" },
    { id: 56, name: "Chicken Cheese Paratha", category: "Paratha", price: 490, description: "Chicken cheese paratha", image: "burger.jpg" },
    { id: 57, name: "Chicken Anda Paratha", category: "Paratha", price: 490, description: "Chicken egg paratha", image: "burger.jpg" },
    { id: 58, name: "Beef Paratha", category: "Paratha", price: 700, description: "Beef paratha", image: "burger.jpg" },
    { id: 59, name: "Beef Cheese Paratha", category: "Paratha", price: 800, description: "Beef cheese paratha", image: "burger.jpg" },
    { id: 60, name: "Plain Paratha", category: "Paratha", price: 120, description: "Plain paratha", image: "burger.jpg" },
    { id: 61, name: "Plain Cheese Paratha", category: "Paratha", price: 250, description: "Plain cheese paratha", image: "burger.jpg" },
    { id: 62, name: "Tikka Cheese Paratha", category: "Paratha", price: 490, description: "Tikka cheese paratha", image: "burger.jpg" },

    // KABAB MASALA
    { id: 63, name: "Kabab Masala 3 Pieces", category: "Kabab Masala", price: 800, description: "3 pieces", image: "burger.jpg" },
    { id: 64, name: "Kabab Masala 6 Pieces", category: "Kabab Masala", price: 1500, description: "6 pieces", image: "burger.jpg" },
    { id: 65, name: "Kabab Masala 9 Pieces", category: "Kabab Masala", price: 2200, description: "9 pieces", image: "burger.jpg" },

    // KARAHI
    { id: 66, name: "Chicken Karahi", category: "Karahi", price: 700, description: "Q/H/F sizes; starting price", image: "burger.jpg" },
    { id: 67, name: "Chicken White Karahi", category: "Karahi", price: 800, description: "Q/H/F sizes; starting price", image: "burger.jpg" },
    { id: 68, name: "Chicken Makhni Karahi", category: "Karahi", price: 800, description: "Q/H/F sizes; starting price", image: "burger.jpg" },
    { id: 69, name: "Chicken Achari Karahi", category: "Karahi", price: 700, description: "Q/H/F sizes; starting price", image: "burger.jpg" },

    // HANDI
    { id: 70, name: "Afghani Handi", category: "Handi", price: 800, description: "Q/H/F sizes; starting price", image: "burger.jpg" },
    { id: 71, name: "Achari Handi", category: "Handi", price: 800, description: "Q/H/F sizes; starting price", image: "burger.jpg" },
    { id: 72, name: "Malai Handi", category: "Handi", price: 800, description: "Q/H/F sizes; starting price", image: "burger.jpg" },
    { id: 73, name: "Badami Handi", category: "Handi", price: 900, description: "Q/H/F sizes; starting price", image: "burger.jpg" },
    { id: 74, name: "Tikka Masala Handi", category: "Handi", price: 800, description: "Q/H/F sizes; starting price", image: "burger.jpg" },

    // STEAM PIECE
    { id: 75, name: "Quarter Chargha", category: "Steam Piece", price: 400, description: "Quarter chargha", image: "burger.jpg" },
    { id: 76, name: "Half Chargha", category: "Steam Piece", price: 800, description: "Half chargha", image: "burger.jpg" },
    { id: 77, name: "Full Chargha", category: "Steam Piece", price: 1500, description: "Full chargha", image: "burger.jpg" },

    // TAWA QEEMA
    { id: 78, name: "Chicken Qeema", category: "Tawa Qeema", price: 700, description: "Q/H/F sizes; starting price", image: "burger.jpg" },

    // TANDOOR
    { id: 79, name: "Half Roghani Naan", category: "Tandoor", price: 50, description: "Half Roghani naan", image: "burger.jpg" },
    { id: 80, name: "Full Roghani Naan", category: "Tandoor", price: 90, description: "Full Roghani naan", image: "burger.jpg" },
    { id: 81, name: "Garlic Naan", category: "Tandoor", price: 90, description: "Garlic naan", image: "burger.jpg" },
    { id: 82, name: "Kalvanji Naan", category: "Tandoor", price: 90, description: "Kalvanji naan", image: "burger.jpg" },
    { id: 83, name: "Chicken Naan", category: "Tandoor", price: 300, description: "Chicken naan", image: "burger.jpg" },
    { id: 84, name: "Chicken Cheese Naan", category: "Tandoor", price: 450, description: "Chicken cheese naan", image: "burger.jpg" },
    { id: 85, name: "Special Cheese Naan", category: "Tandoor", price: 300, description: "Special cheese naan", image: "burger.jpg" },
    { id: 86, name: "Beef Naan", category: "Tandoor", price: 400, description: "Beef naan", image: "burger.jpg" },
    { id: 87, name: "Beef Cheese Naan", category: "Tandoor", price: 550, description: "Beef cheese naan", image: "burger.jpg" },

    // BEVERAGES
    { id: 88, name: "Regular Drink", category: "Beverages", price: 60, description: "Regular drink", image: "burger.jpg" },
    { id: 89, name: "345ml Drink", category: "Beverages", price: 90, description: "345ml", image: "burger.jpg" },
    { id: 90, name: "Half Liter Drink", category: "Beverages", price: 120, description: "500ml", image: "burger.jpg" },
    { id: 91, name: "1.5 Liter Drink", category: "Beverages", price: 220, description: "1.5L", image: "burger.jpg" },
    { id: 92, name: "Small Water", category: "Beverages", price: 50, description: "Small water bottle", image: "burger.jpg" },
    { id: 93, name: "Large Water", category: "Beverages", price: 100, description: "Large water bottle", image: "burger.jpg" },

    // SIDES
    { id: 94, name: "Raita", category: "Sides", price: 60, description: "Raita", image: "burger.jpg" },
    { id: 95, name: "Salad", category: "Sides", price: 70, description: "Fresh salad", image: "burger.jpg" },
    { id: 96, name: "Shami Kabab", category: "Sides", price: 50, description: "Shami kabab", image: "burger.jpg" },
    { id: 97, name: "Cheese Slice", category: "Sides", price: 60, description: "Cheese slice", image: "burger.jpg" }
];


let cart = [];
let selectedCategory = "All";

function renderCategories() {
    const categories = [
        "All",
        ...new Set(foods.map(food => food.category))
    ];

    document.getElementById("categories").innerHTML =
        categories.map(category => `
            <button
                class="category-btn ${category === selectedCategory ? "active" : ""}"
                onclick="filterCategory('${category}')">
                ${category}
            </button>
        `).join("");
}

function renderMenu() {
    const filteredFoods = selectedCategory === "All"
        ? foods
        : foods.filter(food => food.category === selectedCategory);

    document.getElementById("menu").innerHTML =
        filteredFoods.map(food => `
            <div class="food-card">

                <img src="${food.image}" alt="${food.name}">

                <div class="food-info">
                    <h3>${food.name}</h3>

                    <p>${food.description}</p>

                    <div class="food-bottom">
                        <span class="price">
                            Rs. ${food.price}
                        </span>

                        <button
                            class="add-btn"
                            onclick="addToCart(${food.id})">
                            + Add
                        </button>
                    </div>
                </div>

            </div>
        `).join("");
}

function filterCategory(category) {
    selectedCategory = category;

    renderCategories();
    renderMenu();
}

function addToCart(id) {
    const food = foods.find(item => item.id === id);

    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...food,
            quantity: 1
        });
    }

    updateCart();
}

function updateCart() {
    const totalQuantity = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    document.getElementById("cart-count").innerText = totalQuantity;

    const cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <strong>${item.name}</strong>

            <p>
                Rs. ${item.price} × ${item.quantity}
            </p>

            <button onclick="changeQuantity(${item.id}, -1)">−</button>
            <button onclick="changeQuantity(${item.id}, 1)">+</button>
        </div>
    `).join("");

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    document.getElementById("cart-total").innerText =
        `Total: Rs. ${total}`;
}

function changeQuantity(id, change) {
    const item = cart.find(item => item.id === id);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== id);
    }

    updateCart();
}

function openCart() {
    document.getElementById("cart-modal").style.display = "flex";
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const customerName =
        document.getElementById("customer-name").value;

    const tableNumber =
        document.getElementById("table-number").value;

    if (!customerName || !tableNumber) {
        alert("Please enter your name and table number.");
        return;
    }

    let message = `New Restaurant Order\n`;
    message += `Name: ${customerName}\n`;
    message += `Table: ${tableNumber}\n\n`;

    cart.forEach(item => {
        message += `${item.name} x ${item.quantity}`;
        message += ` = Rs. ${item.price * item.quantity}\n`;
    });

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    message += `\nTotal: Rs. ${total}`;

    const url =
        `https://wa.me/${restaurantWhatsApp}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}

renderCategories();
renderMenu();
updateCart();