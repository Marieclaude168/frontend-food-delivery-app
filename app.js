let cart = [];
let currentRestaurant = null;
let currentPage = 'home';


const restaurants = {
  'atyab-farouj': {
    name: 'Atyab Farouj',
    description: 'Delicious grilled chicken and Lebanese meals',
    image: 'images/chi1.jpg',
    type: 'chicken',
    rating: '⭐⭐⭐⭐ (4.5)',
    deliveryTime: '25-35 min',
    deliveryFee: '$2.99',
    menu: [
      { id: 1, name: 'Grilled Chicken', description: 'Served with garlic sauce & fries', price: 12.99, image: 'images/chi2.jpeg' },
      { id: 2, name: 'Chicken Sandwich', description: 'Marinated chicken in pita bread', price: 6.99, image: 'images/chi3.jpeg' },
      { id: 3, name: 'Crispy Chicken', description: 'Crispy fried chicken pieces', price: 9.99, image: 'images/chi4.jpeg' },
      { id: 4, name: 'Chicken Shawarma', description: 'Wrapped with pickles and garlic', price: 7.49, image: 'images/chi5.jpeg' },
      { id: 5, name: 'Chicken Wings', description: 'Spicy buffalo wings', price: 8.99, image: 'images/chi6.jpeg' },
      { id: 6, name: 'Family Chicken Meal', description: 'Full roasted chicken with sides', price: 19.99, image: 'images/chi7.jpeg' }
    ]
  },

  'tasty-bees': {
    name: 'Tasty Bees',
    description: 'Fresh juices and sweet delights',
    image: 'images/t1.jpeg',
    type: 'coffee',
    rating: '⭐⭐⭐⭐⭐ (4.8)',
    deliveryTime: '20-30 min',
    deliveryFee: '$2.49',
    menu: [
      { id: 7, name: 'Fresh Orange Juice', description: '100% natural oranges', price: 4.99, image: 'images/t2.jpeg' },
      { id: 8, name: 'Strawberry Smoothie', description: 'Creamy and fresh strawberries', price: 5.99, image: 'images/t3.jpeg' },
      { id: 9, name: 'Iced Coffee', description: 'Cold brew with milk & ice', price: 3.99, image: 'images/t4.jpeg' },
      { id: 10, name: 'Cappuccino', description: 'Classic hot cappuccino', price: 2.99, image: 'images/t5.jpeg' },
      { id: 11, name: 'Mango Juice', description: 'Sweet tropical mango juice', price: 4.49, image: 'images/t6.jpeg' },
      { id: 12, name: 'Milkshake', description: 'Vanilla or chocolate milkshake', price: 5.49, image: 'images/t7.jpeg' }
    ]
  },

  'zaatar-w-zeit': {
    name: 'Zaatar W Zeit',
    description: 'Lebanese wraps and manakish',
    image: 'images/p6.jpeg',
    type: 'lebanese',
    rating: '⭐⭐⭐⭐ (4.3)',
    deliveryTime: '30-40 min',
    deliveryFee: '$3.49',
    menu: [
      { id: 13, name: 'Zaatar Manoushe', description: 'Traditional thyme & olive oil', price: 2.99, image: 'images/z2.jpeg' },
      { id: 14, name: 'Chicken Wrap', description: 'Grilled chicken wrap', price: 5.99, image: 'images/z3.jpeg' },
      { id: 15, name: 'Cheese Manoushe', description: 'Mozzarella and akkawi cheese', price: 3.49, image: 'images/z4.jpeg' },
      { id: 16, name: 'Labneh Wrap', description: 'Healthy labneh with veggies', price: 4.49, image: 'images/z5.jpeg' },
      { id: 17, name: 'Meat Manoushe', description: 'Minced beef with onion & spices', price: 5.49, image: 'images/z6.jpeg' },
      { id: 18, name: 'Halloumi Wrap', description: 'Grilled halloumi cheese wrap', price: 6.49, image: 'images/z7.jpeg' }
    ]
  },

  'pizzanini': {
    name: 'Pizzanini',
    description: 'Home of the giant pizza',
    image: 'images/z1.jpeg',
    type: 'pizza',
    rating: '⭐⭐⭐⭐⭐ (4.7)',
    deliveryTime: '25-35 min',
    deliveryFee: '$3.19',
    menu: [
      { id: 19, name: 'Pepperoni Pizza', description: 'Loaded with pepperoni & cheese', price: 14.99, image: 'images/p2.jpeg' },
      { id: 20, name: 'Veggie Pizza', description: 'Fresh veggies & mozzarella', price: 12.99, image: 'images/p3.jpeg' },
      { id: 21, name: 'Margherita Pizza', description: 'Classic cheese and tomato', price: 10.99, image: 'images/p4.jpeg' },
      { id: 22, name: 'BBQ Chicken Pizza', description: 'BBQ sauce with grilled chicken', price: 13.99, image: 'images/p5.jpeg' },
      { id: 23, name: 'Four Cheese Pizza', description: 'Mozzarella, parmesan, cheddar, feta', price: 15.49, image: 'images/p6.jpeg' },
      { id: 24, name: 'Meat Lovers Pizza', description: 'Pepperoni, sausage, beef, ham', price: 16.99, image: 'images/p7.jpeg' }
    ]
  },

  'bbq-house': {
    name: 'BBQ House',
    description: 'BBQ and grill specials',
    image: 'images/b1.jpeg',
    type: 'burger',
    rating: '⭐⭐⭐⭐ (4.4)',
    deliveryTime: '35-45 min',
    deliveryFee: '$3.99',
    menu: [
      { id: 25, name: 'BBQ Ribs', description: 'Slow cooked ribs with BBQ sauce', price: 19.99, image: 'images/b2.jpeg' },
      { id: 26, name: 'Grilled Steak', description: 'Juicy steak grilled to perfection', price: 24.99, image: 'images/b3.jpeg' },
      { id: 27, name: 'Beef Burger', description: 'Grilled beef patty with toppings', price: 9.99, image: 'images/b4.jpeg' },
      { id: 28, name: 'Chicken Burger', description: 'Crispy fried chicken fillet', price: 8.49, image: 'images/b5.jpeg' },
      { id: 29, name: 'BBQ Hotdog', description: 'Smoky grilled hotdog', price: 7.49, image: 'images/b6.jpeg' },
      { id: 30, name: 'Mixed Grill Platter', description: 'Beef, chicken, and lamb skewers', price: 21.99, image: 'images/b7.jpeg' }
    ]
  },

  'crepe-station': {
    name: 'Crepe Station',
    description: 'Heavenly desserts and sweet delights',
    image: 'images/c1.jpeg',
    type: 'desserts',
    rating: '⭐⭐⭐⭐⭐ (4.8)',
    deliveryTime: '20-30 min',
    deliveryFee: '$2.49',
    menu: [
      { id: 31, name: 'Cheesecake', description: 'Creamy cheesecake with berries', price: 8.99, image: 'images/c2.jpeg' },
      { id: 32, name: 'Ice Cream Sundae', description: '3 scoops + chocolate drizzle', price: 6.99, image: 'images/c3.jpeg' },
      { id: 33, name: 'Chocolate Crepe', description: 'Crepe with nutella & banana', price: 7.99, image: 'images/c4.jpeg' },
      { id: 34, name: 'Waffles', description: 'Golden waffles with syrup', price: 6.49, image: 'images/c5.jpeg' },
      { id: 35, name: 'Tiramisu', description: 'Italian classic dessert', price: 9.49, image: 'images/c6.jpeg' },
      { id: 36, name: 'Brownie', description: 'Chocolate brownie with ice cream', price: 5.99, image: 'images/c7.jpeg' }
    ]
  }
};

// Initialize App
document.addEventListener('DOMContentLoaded', init);

function init() {
  loadRestaurants();
  setupEventListeners();
  updateCartDisplay();
}

// Event Listeners
function setupEventListeners() {
  document.getElementById('cartBtn').addEventListener('click', showCartPage);
  document.getElementById('backBtn').addEventListener('click', showHomePage);
  document.getElementById('cartBackBtn').addEventListener('click', showHomePage);

  document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', () => filterByCategory(category.dataset.type));
  });

  document.getElementById('searchInput').addEventListener('input', handleSearch);
}

// Load Restaurants
function loadRestaurants() {
  const container = document.getElementById('restaurantContainer');
  container.innerHTML = '';
  const restaurantList = Object.entries(restaurants).map(([id, data]) => ({ id, ...data }));
  restaurantList.forEach(r => container.appendChild(createRestaurantCard(r)));
}

// Create Restaurant Card
function createRestaurantCard(restaurant) {
  const card = document.createElement('div');
  card.className = 'restaurant-card';
  card.dataset.type = restaurant.type;
  card.innerHTML = `
    <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-img">
    <div class="restaurant-info">
      <div class="restaurant-name">${restaurant.name}</div>
      <div class="restaurant-rating">${restaurant.rating}</div>
      <div class="restaurant-details">Delivery: ${restaurant.deliveryTime} | ${restaurant.deliveryFee} fee</div>
    </div>`;
  card.addEventListener('click', () => showMenuPage(restaurant.id));
  return card;
}

// Filter by Category
function filterByCategory(type) {
  document.querySelectorAll('.category').forEach(c => c.classList.remove('active'));
  document.querySelector(`[data-type="${type}"]`)?.classList.add('active');
  document.querySelectorAll('.restaurant-card').forEach(card => {
    card.style.display = (type === 'all' || card.dataset.type === type) ? 'block' : 'none';
  });
}

// Search
function handleSearch(e) {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll('.restaurant-card').forEach(card => {
    const name = card.querySelector('.restaurant-name').textContent.toLowerCase();
    card.style.display = name.includes(term) ? 'block' : 'none';
  });
}

// Show Menu
function showMenuPage(id) {
  currentRestaurant = restaurants[id];
  currentPage = 'menu';
  document.getElementById('restaurantTitle').textContent = currentRestaurant.name;
  document.getElementById('restaurantDescription').textContent = currentRestaurant.description;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('menuPage').classList.add('active');
  loadMenuItems();
}

// Load Menu Items
function loadMenuItems() {
  const c = document.getElementById('menuContainer');
  c.innerHTML = '';
  currentRestaurant.menu.forEach(item => c.appendChild(createMenuItem(item)));
}

// Create Menu Item
function createMenuItem(item) {
  const el = document.createElement('div');
  el.className = 'menu-item';
  el.innerHTML = `
    <img src="${item.image}" class="item-image">
    <div class="item-name">${item.name}</div>
    <div class="item-description">${item.description}</div>
    <div class="item-footer">
      <div class="item-price">${item.price.toFixed(2)}</div>
      <button class="add-to-cart-btn" onclick="addToCart(this, ${item.id}, '${item.name}', ${item.price}, '${item.image}')">
        <i class="fas fa-plus"></i> Add to Cart
      </button>
    </div>`;
  return el;
}

// Add to Cart
function addToCart(btn, id, name, price, image) {
  const exist = cart.find(i => i.id === id);
  if (exist) exist.quantity++;
  else cart.push({ id, name, price, image, quantity: 1, restaurant: currentRestaurant.name });
  updateCartDisplay();
  const orig = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-check"></i> Added!';
  setTimeout(() => btn.innerHTML = orig, 800);
}

// Cart badge
function updateCartDisplay() {
  const count = cart.reduce((s, i) => s + i.quantity, 0);
  const el = document.getElementById('cartCount');
  el.textContent = count;
  el.style.display = count > 0 ? 'flex' : 'none';
}

// Show Cart
function showCartPage() {
  currentPage = 'cart';
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('cartPage').classList.add('active');
  loadCartItems();
}

// Load Cart Items
function loadCartItems() {
  const c = document.getElementById('cartContent');
  if (!cart.length) {
    c.innerHTML = `<div class="empty-cart"><i class="fas fa-shopping-cart"></i><p>Your cart is empty</p></div>`;
    return;
  }
  const subtotal = cart.reduce((s,i)=>s+i.price*i.quantity,0);
  const fee = 2.99, tax = subtotal*0.08, total = subtotal+fee+tax;
  c.innerHTML = `
    <div class="cart-items">
      ${cart.map(i=>`
        <div class="cart-item">
          <img src="${i.image}" class="cart-item-image">
          <div class="cart-item-info">
            <div class="cart-item-name">${i.name}</div>
            <div class="cart-item-price">${i.price.toFixed(2)} x ${i.quantity}</div>
          </div>
          <div class="quantity-controls">
            <button onclick="updateQuantity(${i.id},-1)">-</button>
            <span>${i.quantity}</span>
            <button onclick="updateQuantity(${i.id},1)">+</button>
          </div>
          <button onclick="removeFromCart(${i.id})">Remove</button>
        </div>`).join('')}
    </div>
    <div class="cart-summary">
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Delivery: ${fee.toFixed(2)}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p><b>Total: ${total.toFixed(2)}</b></p>
      <button onclick="checkout()">Checkout</button>
    </div>`;
}

// Update qty
function updateQuantity(id, c) {
  const item = cart.find(i=>i.id===id);
  if (!item) return;
  item.quantity += c;
  if (item.quantity<=0) removeFromCart(id);
  updateCartDisplay(); loadCartItems();
}
function removeFromCart(id) {
  cart = cart.filter(i=>i.id!==id);
  updateCartDisplay(); loadCartItems();
}

// Checkout
function checkout() {
  alert('Order placed successfully!');
  cart=[]; updateCartDisplay(); showHomePage();
}

// Home
function showHomePage() {
  currentPage='home';
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('homePage').classList.add('active');
}

