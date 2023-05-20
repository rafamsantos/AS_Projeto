// Function to retrieve the query parameter value
function getQueryParam(variable) {
  const query = window.location.search.substring(1);
  const vars = query.split("&");

  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }

  return null;
}

// Product data - You can replace this with your actual data
const productData = [
  {
    name: "Clothing 1",
    image: "imgs/calças/6.webp",
    description: "Description of Clothing 1",
    price: "$29.99",
    type: "calcas",
  },
  {
    name: "Clothing 2",
    image: "imgs/calças/1.webp",
    description: "Description of Clothing 2",
    price: "$39.99",
    type: "calcas",
  },
  {
    name: "Clothing 3",
    image: "imgs/calças/2.webp",
    description: "Description of Clothing 3",
    price: "$39.99",
    type: "calcas",
  },
  {
    name: "Clothing 4",
    image: "imgs/calças/4.webp",
    description: "Description of Clothing 4",
    price: "$39.99",
    type: "calcas",
  },
  {
    name: "Clothing 5",
    image: "imgs/calças/5.webp",
    description: "Description of Clothing 5",
    price: "$39.99",
    type: "calcas",
  },
  {
    name: "Clothing 6",
    image: "imgs/calças/7.webp",
    description: "Description of Clothing 6",
    price: "$39.99",
    type: "calcas",
  },
  {
    name: "Clothing 7",
    image: "imgs/calças/8.webp",
    description: "Description of Clothing 7",
    price: "$39.99",
    type: "calcas",
  },
  {
    name: "Clothing 8",
    image: "imgs/calças/9.webp",
    description: "Description of Clothing 8",
    price: "$39.99",
    type: "calcas",
  },
  {
    name: "Clothing 9",
    image: "imgs/camisolas/1.webp",
    description: "Description of Clothing 9",
    price: "$15,99",
    type: "camisolas",
  },
  {
    name: "Clothing 10",
    image: "imgs/camisolas/2.webp",
    description: "Description of Clothing 10",
    price: "$9.99",
    type: "camisolas",
  },
  {
    name: "Clothing 11",
    image: "imgs/camisolas/3.webp",
    description: "Description of Clothing 11",
    price: "$29.99",
    type: "camisolas",
  },
  {
    name: "Clothing 12",
    image: "imgs/camisolas/4.webp",
    description: "Description of Clothing 12",
    price: "$59.50",
    type: "camisolas",
  },
  {
    name: "Clothing 13",
    image: "imgs/camisolas/5.webp",
    description: "Description of Clothing 13",
    price: "$19.99",
    type: "camisolas",
  },
  {
    name: "Clothing 14",
    image: "imgs/camisolas/6.webp",
    description: "Description of Clothing 14",
    price: "$49.99",
    type: "camisolas",
  },
  {
    name: "Clothing 15",
    image: "imgs/camisolas/7.webp",
    description: "Description of Clothing 15",
    price: "$15.99",
    type: "camisolas",
  },
  {
    name: "Clothing 16",
    image: "imgs/camisolas/8.webp",
    description: "Description of Clothing 16",
    price: "$5.99",
    type: "camisolas",
  },
  {
    name: "Clothing 17",
    image: "imgs/casacos/1.webp",
    description: "Description of Clothing 17",
    price: "$69.99",
    type: "casacos",
  },
  {
    name: "Clothing 18",
    image: "imgs/casacos/2.webp",
    description: "Description of Clothing 18",
    price: "$24.99",
    type: "casacos",
  },
  {
    name: "Clothing 19",
    image: "imgs/casacos/3.webp",
    description: "Description of Clothing 19",
    price: "$30.99",
    type: "casacos",
  },
  {
    name: "Clothing 20",
    image: "imgs/casacos/4.webp",
    description: "Description of Clothing 20",
    price: "$29.99",
    type: "casacos",
  },
  {
    name: "Clothing 21",
    image: "imgs/casacos/5.jpeg",
    description: "Description of Clothing 21",
    price: "$29.99",
    type: "casacos",
  },
  {
    name: "Clothing 22",
    image: "imgs/casacos/6.webp",
    description: "Description of Clothing 22",
    price: "$13.99",
    type: "casacos",
  },
  {
    name: "Clothing 23",
    image: "imgs/casacos/7.webp",
    description: "Description of Clothing 23",
    price: "$24.97",
    type: "casacos",
  },
  {
    name: "Clothing 24",
    image: "imgs/casacos/8.webp",
    description: "Description of Clothing 24",
    price: "$16.99",
    type: "casacos",
  },
  {
    name: "Clothing 25",
    image: "imgs/sapatilhas/1.webp",
    description: "Description of Clothing 25",
    price: "$49.99",
    type: "sapatilhas",
  },
  {
    name: "Clothing 26",
    image: "imgs/sapatilhas/2.webp",
    description: "Description of Clothing 26",
    price: "$60.99",
    type: "sapatilhas",
  },
  {
    name: "Clothing 27",
    image: "imgs/sapatilhas/3.webp",
    description: "Description of Clothing 27",
    price: "$29.99",
    type: "sapatilhas",
  },
  {
    name: "Clothing 28",
    image: "imgs/sapatilhas/4.webp",
    description: "Description of Clothing 28",
    price: "$71.99",
    type: "sapatilhas",
  },
  {
    name: "Clothing 29",
    image: "imgs/sapatilhas/5.webp",
    description: "Description of Clothing 29",
    price: "$29.99",
    type: "sapatilhas",
  },
  {
    name: "Clothing 30",
    image: "imgs/sapatilhas/6.webp",
    description: "Description of Clothing 30",
    price: "$13.99",
    type: "sapatilhas",
  },
  {
    name: "Clothing 31",
    image: "imgs/sapatilhas/7.webp",
    description: "Description of Clothing 31",
    price: "$79.99",
    type: "sapatilhas",
  },
  {
    name: "Clothing 32",
    image: "imgs/sapatilhas/8.webp",
    description: "Description of Clothing 32",
    price: "$76.99",
    type: "sapatilhas",
  },
];

// Retrieve the selected product from the query parameter
const selectedProduct = getQueryParam("product");

// Find the corresponding product in the data
const product = productData.find(
  (item, index) => index + 1 === parseInt(selectedProduct)
);

// Display the product details
if (product) {
  const productInfoContainer = document.getElementById("product-info");

  // Create HTML markup for product details
  const productInfoHTML = `
        <div class="w3-display-container product-container" style="font-family:'Montserrat',sans-serif">
            <a href="${product.type}.html" class="w3-display-topleft" style="margin: 25px">Voltar ao Catálogo</a>
            <img src="${product.image}" alt="${product.name}">
            <div class="product-txt-container w3-display-topright">
                <h2 style="font-weight: 600">${product.name}</h2>
                <p>${product.description}</p>
                <p style="font-weight: 400">Price: ${product.price}</p>
            </div>
            <div class="buy-button w3-display-bottomright">
                    <a href="" style="font-size: 20px;font-weight: 600; text-decoration: none">Adicionar ao Carrinho</a>
            </div>
        </div>
    `;

  // Display product details
  productInfoContainer.innerHTML = productInfoHTML;
}
