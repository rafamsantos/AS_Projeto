// Function to retrieve the query parameter value
function getQueryParam(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split('&');

    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) === variable) {
            return decodeURIComponent(pair[1]);
        }
    }

    return null;
}

// Product data - You can replace this with your actual data
const productData = [{
        name: "Clothing 1",
        image: "imgs/pants.png",
        description: "Description of Clothing 1",
        price: "$29.99"
    },
    {
        name: "Clothing 2",
        image: "imgs/pants.png",
        description: "Description of Clothing 2",
        price: "$39.99"
    },
    {
        name: "Clothing 3",
        image: "imgs/pants.png",
        description: "Description of Clothing 3",
        price: "$39.99"
    },
    {
        name: "Clothing 4",
        image: "imgs/pants.png",
        description: "Description of Clothing 4",
        price: "$39.99"
    },
    {
        name: "Clothing 5",
        image: "imgs/pants.png",
        description: "Description of Clothing 5",
        price: "$39.99"
    },
    {
        name: "Clothing 6",
        image: "imgs/pants.png",
        description: "Description of Clothing 6",
        price: "$39.99"
    },
    {
        name: "Clothing 7",
        image: "imgs/pants.png",
        description: "Description of Clothing 7",
        price: "$39.99"
    },
    {
        name: "Clothing 8",
        image: "imgs/pants.png",
        description: "Description of Clothing 8",
        price: "$39.99"
    }

];

// Retrieve the selected product from the query parameter
const selectedProduct = getQueryParam('product');

// Find the corresponding product in the data
const product = productData.find((item, index) => index + 1 === parseInt(selectedProduct));

// Display the product details
if (product) {
    const productInfoContainer = document.getElementById("product-info");

    // Create HTML markup for product details
    const productInfoHTML = `
        <img src="${product.image}" alt="${product.name}" >
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: ${product.price}</p>
    `;

    // Display product details
    productInfoContainer.innerHTML = productInfoHTML;
}