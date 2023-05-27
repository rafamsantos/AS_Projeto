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
const productData = [{
        name: "Nike on line",
        image: "imgs/calças/6.webp",
        description: "Description of Nike on line",
        price: "$29.99",
        type: "calcas",
    },
    {
        name: "Nike go",
        image: "imgs/calças/1.webp",
        description: "Description of Nike go",
        price: "$39.99",
        type: "calcas",
    },
    {
        name: "Nike one Luxe",
        image: "imgs/calças/2.webp",
        description: "Description of Nike one Luxe",
        price: "$39.99",
        type: "calcas",
    },
    {
        name: "Nike Sportswear Tech Fleece",
        image: "imgs/calças/4.webp",
        description: "Description of Nike Sportswear Tech Fleece",
        price: "$39.99",
        type: "calcas",
    },
    {
        name: "Tottenham Hotspur Tech Fleece",
        image: "imgs/calças/5.webp",
        description: "Description of Tottenham Hotspur Tech Fleece",
        price: "$39.99",
        type: "calcas",
    },
    {
        name: "FC Barcelona Tech Fleece",
        image: "imgs/calças/7.webp",
        description: "Description of FC Barcelona Tech Fleece",
        price: "$39.99",
        type: "calcas",
    },
    {
        name: "Nike style",
        image: "imgs/calças/8.webp",
        description: "Description of Nike style",
        price: "$39.99",
        type: "calcas",
    },
    {
        name: "Ripped Nike Jeans",
        image: "imgs/calças/9.webp",
        description: "Description of Ripped Nike Jeans",
        price: "$39.99",
        type: "calcas",
    },
    {
        name: "Nike Sportswear Standart Issue",
        image: "imgs/camisolas/1.webp",
        description: "Description of Nike Sportswear Standart Issue",
        price: "$15,99",
        type: "camisolas",
    },
    {
        name: "Nike go",
        image: "imgs/camisolas/2.webp",
        description: "Description of Nike go",
        price: "$9.99",
        type: "camisolas",
    },
    {
        name: "NikeCourt Dri-FIT Slam",
        image: "imgs/camisolas/3.webp",
        description: "Description of NikeCourt Dri-FIT Slam",
        price: "$29.99",
        type: "camisolas",
    },
    {
        name: "Nike Therma-FIT ADV A.P.S",
        image: "imgs/camisolas/4.webp",
        description: "Description of Nike Therma-FIT ADV A.P.S",
        price: "$59.50",
        type: "camisolas",
    },
    {
        name: "Tiger Woods",
        image: "imgs/camisolas/5.webp",
        description: "Description of Tiger Woods",
        price: "$19.99",
        type: "camisolas",
    },
    {
        name: "kevin Durant",
        image: "imgs/camisolas/6.webp",
        description: "Description of kevin Durant",
        price: "$49.99",
        type: "camisolas",
    },
    {
        name: "Jordan Artist Series by Umar Rashid",
        image: "imgs/camisolas/7.webp",
        description: "Description of Jordan Artist Series by Umar Rashid",
        price: "$15.99",
        type: "camisolas",
    },
    {
        name: "Nike Dri-FIT Icon",
        image: "imgs/camisolas/8.webp",
        description: "Description of Nike Dri-FIT Icon",
        price: "$5.99",
        type: "camisolas",
    },
    {
        name: "Nike Sportswear Tech Fleece",
        image: "imgs/casacos/1.webp",
        description: "Description of Nike Sportswear Tech Fleece",
        price: "$69.99",
        type: "casacos",
    },
    {
        name: "Nike Sportswear Tech Fleece",
        image: "imgs/casacos/2.webp",
        description: "Description of Nike Sportswear Tech Fleece",
        price: "$24.99",
        type: "casacos",
    },
    {
        name: "Nike Sportswear Tech Fleece",
        image: "imgs/casacos/3.webp",
        description: "Description of Nike Sportswear Tech Fleece",
        price: "$30.99",
        type: "casacos",
    },
    {
        name: "Air Jordan 1 Mid SE",
        image: "imgs/casacos/4.webp",
        description: "Description of Air Jordan 1 Mid SE",
        price: "$29.99",
        type: "casacos",
    },
    {
        name: "Nike Dunk Low",
        image: "imgs/casacos/5.jpeg",
        description: "Description of Nike Dunk Low",
        price: "$29.99",
        type: "casacos",
    },
    {
        name: "Nike Benassi JDI",
        image: "imgs/casacos/6.webp",
        description: "Description of Nike Benassi JDI",
        price: "$13.99",
        type: "casacos",
    },
    {
        name: "Nike Sportswear",
        image: "imgs/casacos/7.webp",
        description: "Description of Nike Sportswear",
        price: "$24.97",
        type: "casacos",
    },
    {
        name: "Nike Sportswear Hybrid",
        image: "imgs/casacos/8.webp",
        description: "Description of Nike Sportswear Hybrid",
        price: "$16.99",
        type: "casacos",
    },
    {
        name: "Nike Dunk Low",
        image: "imgs/sapatilhas/1.webp",
        description: "Description of Nike Dunk Low",
        price: "$49.99",
        type: "sapatilhas",
    },
    {
        name: "Nike Air Force",
        image: "imgs/sapatilhas/2.webp",
        description: "Description of Nike Air Force",
        price: "$60.99",
        type: "sapatilhas",
    },
    {
        name: "Nike Go FlyEase",
        image: "imgs/sapatilhas/3.webp",
        description: "Description of Nike Go FlyEase",
        price: "$29.99",
        type: "sapatilhas",
    },
    {
        name: "Air Jordan 1 Mid SE",
        image: "imgs/sapatilhas/4.webp",
        description: "Description of Air Jordan 1 Mid SE",
        price: "$71.99",
        type: "sapatilhas",
    },
    {
        name: "Nike Dunk Low",
        image: "imgs/sapatilhas/5.webp",
        description: "Description of Nike Dunk Low",
        price: "$29.99",
        type: "sapatilhas",
    },
    {
        name: "Nike Benassi JDI",
        image: "imgs/sapatilhas/6.webp",
        description: "Description of Nike Benassi JDI",
        price: "$13.99",
        type: "sapatilhas",
    },
    {
        name: "Air Jordan 1 Low FlyEase",
        image: "imgs/sapatilhas/7.webp",
        description: "Description of Air Jordan 1 Low FlyEase",
        price: "$79.99",
        type: "sapatilhas",
    },
    {
        name: "Nike Air Force 1 Shadow",
        image: "imgs/sapatilhas/8.webp",
        description: "Description of Nike Air Force 1 Shadow<",
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
            <a href="carrinho.html" onclick="adicionarAoCarrinho(${JSON.stringify(product)})" style="font-size: 20px;font-weight: 600; text-decoration: none">Adicionar ao Carrinho</a>
            </div>
        </div>
    `;

    // Display product details
    productInfoContainer.innerHTML = productInfoHTML;
}

function adicionarAoCarrinho(imagem) {
    var carrinho = document.getElementById('carrinho');
    var item = document.createElement('img');
    item.src = imagem;
    carrinho.appendChild(item);
}

function myFunction() {
    var input = document.getElementById('search-input').value.trim().toUpperCase();
    var ul = document.getElementById("product-list");
    var li = ul.getElementsByTagName('li');

    // Verifica se o campo de pesquisa está vazio
    if (input.length === 0) {
        ul.style.display = "none"; // Oculta a lista
        return; // Sai da função sem processar a pesquisa
    }

    for (var i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0];
        var txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(input) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

    ul.style.display = ""; // Exibe a lista de resultados
}



