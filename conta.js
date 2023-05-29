var accDisplay = document.getElementById('acc-page-display');
const buy = document.getElementById('buy-btn');
function carrinho() {
  var cartEmpty = localStorage.getItem('cartEmpty');
  var numOP = parseInt(localStorage.getItem('numOfProducts'));
  if (numOfProducts == 0 || numOfProducts === null) {
    accDisplay.innerHTML = `
        <header class="w3-container w3-xlarge">
          <h4 class="w3-left">Carrinho</h4>
        </header>
        <div class="w3-display-container">
          <p class="w3-display-middle" style="margin-top: 100px">Você não tem itens no carrinho</p>
        </div>`;
    buy.style.display = 'none';
  } else {
    accDisplay.innerHTML = `
    <header class="w3-container w3-xlarge">
    <h4 class="w3-left">Carrinho</h4>
      <div class="w3-display-container cart-with-itens">
        <div id="itens-display" class="itens-display">
        </div> 
      </div>
      <div id="buy-btn" class="w3-display-container"><a class="w3-display-topleft buy-itens" onclick="removeIt()">Finalizar Compra</a></div>
    </header>`;
    let listOfProducts = [];
    let index;
    const shoppingCart = document.getElementById('itens-display');
    buy.style.display = 'Initial';
    for (i = 0; i < numOfProducts; i++) {
      index = localStorage.getItem('produto' + (numOfProducts + 1));
      listOfProducts[i] = JSON.parse(index);
    }
    for (i = 0; i < listOfProducts.length; i++) {
      const itemBox = document.createElement('div');
      itemBox.id = 'item' + i;
      itemBox.classList.add('item-box');
      itemBox.innerHTML = `
          <img src="${listOfProducts[i].image}" alt="produto">
          <span>${listOfProducts[i].name}</span>
          <br>
          <p>Preço: ${listOfProducts[i].price}
          Estado:
          Tamanho:
          </p>
          <a onclick="removeIt(${i})">Remover</a>
        `;
      shoppingCart.appendChild(itemBox);
    }
  }
}

function compras(haveItens) {
  if (!haveItens) {
    accDisplay.innerHTML = ` 
  <header class="w3-container w3-xlarge">
    <h4 class="w3-left">Compras</h4>
  </header>
  <div class="w3-display-container">
    <p class="w3-display-middle" style="margin-top: 100px">Você ainda não realizou nenhuma compra</p>
  </div>`;
  } else {
  }
}

function vender() {
  accDisplay.innerHTML = ` 
    <header class="w3-container w3-xlarge">
    <h4 class="w3-left">Vender</h4>
  </header>
  <div class="w3-display-container">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.8956623778513!2d-8.659045324015457!3d41.180442871326925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465f3ff9b0cad%3A0x90f396fa6c809a8c!2sNike%20Store%20NorteShopping!5e0!3m2!1spt-PT!2spt!4v1685132396617!5m2!1spt-PT!2spt" width="600" height="450" style="border:1px solid black; margin-left: 16px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>   
    <div class="w3-display-right store-info-container">
        <span style="font-weight: 600">A loja mais próxima de sua localização é:</span>
        <br>
        <img src="imgs/pin.avif" alt="pin" style="height: 50px; margin: 0 0 0 -17px">
        <span>Nike Store NorteShopping</span>
        <br>
        <span style="font-size:8pt; color: grey">R. João Mendonça 105 Store 0.330 / 34, 4460-996 Porto</span>
        <br>
        <div class="selling-info">
            <p>Os Itens apresentados para a venda estão sujeitos à avaliação de estado, dirija-se à uma loja oficial Nike e apresente seu produto no balcão</p>
        </div>
    </div>
  </div>`;
}

function config() {
  accDisplay.innerHTML = ` 
<header class="w3-container w3-xlarge">
  <h4 class="w3-left">Configurações</h4>
</header>
<div class="w3-display-container">
  <ul style="list-style-type: none">
      <li style="margin-top: 10px; text-decoration: underline;color:rgb(41, 61, 147)">Alterar Nome de Usuário</li>
      <li style="margin-top: 10px; text-decoration: underline;color:rgb(41, 61, 147)">Alterar Email</li>
      <li style="margin-top: 10px; text-decoration: underline;color:rgb(41, 61, 147)">Alterar Senha</li>
      <li style="margin-top: 10px; text-decoration: underline;color:rgb(41, 61, 147)">Desativar Conta</li>
  </ul>
</div>`;
}

window.onload = function () {
  checkLoginStatus();
};
document.getElementById('acc-name-display').textContent =
  localStorage.getItem('nome');
document.getElementById('acc-email-display').textContent =
  localStorage.getItem('email');
