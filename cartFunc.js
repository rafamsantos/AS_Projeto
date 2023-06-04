fetch('produtos.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    localStorage.setItem('produtos', JSON.stringify(data));
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', '[]');
    }
  });

let produtos = JSON.parse(localStorage.getItem('produtos'));
let cart = JSON.parse(localStorage.getItem('cart'));

function adicionarCar() {
  const selectedProduto = getQueryParam('product');

  // Find the corresponding product in the data

  let produto = produtos.find(
    (item, index) => index + 1 === parseInt(selectedProduto)
  );

  if (localStorage.getItem('cartEmpty') === 'true') {
    cart.push(produto);
  } else {
    let res = cart.find((element) => element.name == produto.name);
    if (res === undefined) {
      cart.push(produto);
    }
  }
  localStorage.setItem('numOfProducts', cart.length.toString());
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('cartEmpty', 'false');
  console.log(cart);
  console.log(produtos);
}

function removerCar(parentElement) {
  let id = parentElement;
  console.log(id);
  let nomeProd = id.getElementsByTagName('span')[0];
  console.log(nomeProd);

  let c = JSON.parse(localStorage.getItem('cart')); // Assuming cart is stored in localStorage
  let numProd = parseInt(localStorage.getItem('numOfProducts'));
  console.log(numProd);
  numProd -= 1;
  console.log(numProd);
  localStorage.setItem('numOfProducts', numProd.toString());
  let temp = c.filter((item) => item.name != nomeProd.textContent);
  localStorage.setItem('cart', JSON.stringify(temp));
  console.log(c);
  if (numProd == 0) {
    localStorage.setItem('cartEmpty', 'true');
    carrinho();
  }
  location.reload();
}

function precoTotal() {
  let sum = 0;
  let cartItems = Object.values(cart);

  for (let i = 0; i < cartItems.length; i++) {
    let priceString = cartItems[i].price;
    let price = parseFloat(
      priceString.replace(/[^0-9.,]+/g, '').replace(',', '.')
    );

    if (!isNaN(price)) {
      sum += price;
    } else {
      console.error('Invalid price encountered');
    }
  }

  if (!isNaN(sum)) {
    document.getElementById('preco').textContent = 'Total: €' + sum.toFixed(2);
    console.log(sum);
  } else {
    console.error('Invalid prices encountered');
  }
}

function limparCar() {
  localStorage.setItem('cartEmpty', 'true');
  localStorage.setItem('cart', '[]');
  carrinho();
}

function finalizarCompra() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  let compras = JSON.parse(localStorage.getItem('compras'));

  if (!compras) {
    // If "compras" doesn't exist in localStorage, create it as an empty array
    compras = [];
  }

  compras = compras.concat(cart); // Concatenate the arrays

  localStorage.setItem('cartEmpty', 'true');
  localStorage.setItem('compras', JSON.stringify(compras));
  localStorage.setItem('comprasEmpty', 'false');
  console.log(localStorage.getItem('compras'));
  localStorage.setItem('cart', JSON.stringify([])); // Store an empty array as JSON string
  carrinho();
}

function limparCompras() {
  localStorage.setItem('comprasEmpty', 'true');
  localStorage.setItem('compras', '[]');
  compras();
}
