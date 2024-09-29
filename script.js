// Define the product data
const products = [
    { name: "Laptop", category: "Electronics", price: 1500 },
    { name: "Smartphone", category: "Electronics", price: 800 },
    { name: "T-shirt", category: "Clothing", price: 25 },
    { name: "Jeans", category: "Clothing", price: 50 },
    { name: "Tablet", category: "Electronics", price: 400 },
    { name: "Jacket", category: "Clothing", price: 100 }
];

// Function to dynamically create product list
function displayProducts(productArray) {
    const productDisplay = document.getElementById("productDisplay");
    productDisplay.innerHTML = '';  // Clear previous products

    productArray.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <span>$${product.price}</span>
        `;

        productDisplay.appendChild(productElement);
    });
}

// Filter products by category
function filterProducts(category) {
    if (category === 'All') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// Initially display all products
displayProducts(products);
