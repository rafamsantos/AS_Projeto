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

  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('cartEmpty', 'false');
  var numOfProducts = parseInt(localStorage.getItem('numOfProducts'));
  numOfProducts += 1;
  localStorage.setItem('numOfProducts', numOfProducts);
  console.log(cart);
  console.log(produtos);
}

function removerCar(id) {
  let el = id;
  console.log(id);
  console.log(el);
  let nomeProd = el.getElementsByClassName('span');
  console.log(nomeProd);
  let temp = cart.filter((item) => item.nome != nomeProd[0].textContent);
  localStorage.setItem('cart', JSON.stringify(temp));
  var numOfProducts = parseInt(localStorage.getItem('numOfProducts'));
  numOfProducts -= 1;
  localStorage.setItem('numOfProducts', numOfProducts);
  var n = localStorage.getItem('numOfProducts');
  if (n === 0) {
    localStorage.setItem('cartEmpty', 'true');
  }
  carrinho();
}

function precoTotal() {
  let temp = cart.map(function (item) {
    return parseInt(item.price);
  });

  let sum = temp.reduce(function (prev, next) {
    return prev + next;
  }, 0);

  console.log(sum);
}

function limparCar() {
  localStorage.setItem('cartEmpty', 'true');
  localStorage.setItem('cart', '[]');
  carrinho();
}
