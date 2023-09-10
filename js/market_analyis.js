// Add your JavaScript code here

// Example: Market Analytics
const productList = document.getElementById('product-list');
const productDetails = document.getElementById('product-details');

// Simulating product data
const products = [
  { id: 1, name: 'Apples', price: 1.5, demand: 'High' },
  { id: 2, name: 'Tomatoes', price: 2.0, demand: 'Medium' },
  { id: 3, name: 'Corn', price: 0.8, demand: 'High' },
  { id: 4, name: 'Wheat', price: 0.6, demand: 'Medium' },
  { id: 5, name: 'Grapes', price: 2.2, demand: 'High' },
  { id: 6, name: 'Potatoes', price: 1.0, demand: 'Medium' },
  { id: 7, name: 'Carrots', price: 0.9, demand: 'High' },
  { id: 8, name: 'Lettuce', price: 1.2, demand: 'Medium' },
  { id: 9, name: 'Cotton', price: 1.8, demand: 'Low' },
  { id: 10, name: 'Rice', price: 0.7, demand: 'High' },
  // Add more product data
];

// Function to display product list
function displayProductList() {
  productList.innerHTML = products.map(product => `
    <div class="product-item" data-id="${product.id}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <p>Demand: ${product.demand}</p>
    </div>
  `).join('');
}

// Function to display product details
function displayProductDetails(productId) {
  const selectedProduct = products.find(product => product.id === productId);
  if (selectedProduct) {
    productDetails.innerHTML = `
      <h3>${selectedProduct.name}</h3>
      <p>Price: $${selectedProduct.price}</p>
      <p>Demand: ${selectedProduct.demand}</p>
      <!-- Add more details and insights here -->
    `;
  }
}

// Event listener for product selection
productList.addEventListener('click', function(event) {
  const productItem = event.target.closest('.product-item');
  if (productItem) {
    const productId = parseInt(productItem.getAttribute('data-id'));
    displayProductDetails(productId);
  }
});

// Initial display of product list
displayProductList();
