var numOfProducts = 0;

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
const productData = [
  {
    name: 'Nike On Line',
    image: 'imgs/calças/6.webp',
    description:
      'Uma peça de roupa essencial para os amantes de estilo e conforto. A calça Nike On Line combina um design moderno com tecido macio e isolante, mantendo você aquecido nos dias frios. Seu corte ajustado e cós elástico proporcionam um ajuste perfeito, enquanto os bolsos práticos oferecem espaço para armazenar pequenos itens.',
    price: '€39.99',
    type: 'calcas',
    condition: 'Muito Bom',
  },
  {
    name: 'Nike Go Legging',
    image: 'imgs/calças/1.webp',
    description:
      'Eleve seu desempenho e estilo com a calça Nike Go Legging. Feita com tecido elástico e de secagem rápida, essa legging proporciona conforto e suporte durante seus treinos. Seu design elegante e estampas vibrantes tornam-na uma escolha versátil para qualquer ocasião esportiva.',
    price: '€29.99',
    type: 'calcas',
    condition: 'Bom',
  },
  {
    name: 'Nike One Luxe',
    image: 'imgs/calças/2.webp',
    description:
      'Experimente o conforto supremo e a elegância com a calça Nike One Luxe. Feita com tecido macio e elástico, essa calça oferece um ajuste perfeito e uma sensação luxuosa ao vestir. Seu design versátil permite transitar facilmente entre atividades esportivas e compromissos do dia a dia, mantendo você sempre estiloso.',
    price: '€39.99',
    type: 'calcas',
    condition: 'Muito Bom',
  },
  {
    name: 'Nike Sportswear Tech Fleece',
    image: 'imgs/calças/4.webp',
    description:
      'Envolva-se em conforto e estilo com a calça Nike Sportswear Tech Fleece. Feita com o tecido inovador Tech Fleece, essa calça proporciona isolamento térmico e leveza, mantendo você aquecido sem sacrificar a mobilidade. Com um design moderno e corte afunilado, ela combina perfeitamente funcionalidade e moda esportiva.',
    price: '€20.50',
    type: 'calcas',
    condition: 'Bom',
  },
  {
    name: 'Tottenham Hotspur Tech Fleece',
    image: 'imgs/calças/5.webp',
    description:
      'Vista-se com o orgulho do Tottenham Hotspur enquanto desfruta do conforto da calça Tech Fleece. Feita com tecido macio e isolante, esta calça oferece uma camada de aquecimento durante os meses mais frios. Apresentando o emblema do Tottenham Hotspur, esta peça permite que você mostre seu apoio ao seu time enquanto mantém um estilo moderno e casual.',
    price: '€49.99',
    type: 'calcas',
    condition: 'Excelente',
  },
  {
    name: 'FC Barcelona Tech Fleece',
    image: 'imgs/calças/7.webp',
    description:
      'Mostre seu amor pelo FC Barcelona enquanto aproveita o conforto da calça Tech Fleece. Feita com tecido macio e isolante, esta calça proporciona calor e conforto durante os dias frios. Com o escudo do FC Barcelona, você pode exibir seu apoio ao clube enquanto mantém um estilo esportivo e moderno.',
    price: '€19.99',
    type: 'calcas',
    condition: 'Bom',
  },
  {
    name: 'Nike style',
    image: 'imgs/calças/8.webp',
    description:
      'Adicione um toque de estilo esportivo ao seu guarda-roupa com a calça Nike Style. Com um corte moderno e descontraído, essa calça oferece conforto durante todo o dia. Perfeita para um visual casual, ela combina perfeitamente com camisetas e tênis para um estilo urbano e descolado.',
    price: '€34.99',
    type: 'calcas',
    condition: 'Muito Bom',
  },
  {
    name: 'Ripped Nike Jeans',
    image: 'imgs/calças/9.webp',
    description:
      'Desfrute do conforto e estilo esportivo com a calça Ripped Nike Jeans. Feita com tecido macio e aconchegante, essa calça proporciona um ajuste confortável e descontraído. Com seu design moderno e corte afunilado, ela é perfeita para uso casual ou para atividades esportivas. Adicione um toque de moda urbana ao seu visual com esta calça da Nike.',
    price: '€44.99',
    type: 'calcas',
    condition: 'Excelente',
  },
  {
    name: 'Nike Sportswear Standart Issue',
    image: 'imgs/camisolas/1.webp',
    description:
      'Desfrute do máximo conforto e estilo com esta camisola clássica da Nike. Feita com tecidos macios e respiráveis, ela mantém você aquecido e confortável em qualquer estação do ano. Com um ajuste perfeito e detalhes discretos, esta camisola é perfeita para o seu estilo de vida ativo e descontraído. Adicione um toque de sofisticação esportiva ao seu guarda-roupa com esta peça essencial da Nike.',
    price: '€15,99',
    type: 'camisolas',
    condition: 'Bom',
  },
  {
    name: 'Nike go',
    image: 'imgs/camisolas/2.webp',
    description:
      'Esta camisola é a combinação perfeita de estilo e conforto. Com um design moderno e descontraído, é ideal para um look casual e despojado. Feita com tecidos suaves e respiráveis, ela oferece uma sensação aconchegante durante todo o dia. Adicione um toque de autenticidade esportiva ao seu guarda-roupa com esta camisola Nike Go.',
    price: '€9.99',
    type: 'camisolas',
    condition: 'Bom',
  },
  {
    name: 'NikeCourt Dri-FIT Slam',
    image: 'imgs/camisolas/3.webp',
    description:
      'Eleve o seu jogo com esta camisola NikeCourt Dri-FIT Slam. Projetada para proporcionar conforto e movimento sem restrições, ela é perfeita para os entusiastas do tênis. O tecido Dri-FIT absorve o suor, mantendo você fresco e seco durante as partidas. Com um design moderno e detalhes técnicos, esta camisola oferece estilo e desempenho incomparáveis nas quadras.',
    price: '€29.99',
    type: 'camisolas',
    condition: 'Muito Bom',
  },
  {
    name: 'Nike Therma-FIT ADV A.P.S',
    image: 'imgs/camisolas/4.webp',
    description:
      'Prepare-se para o frio com estilo e desempenho nesta camisola Nike Therma-FIT ADV A.P.S. Construída com a tecnologia Therma-FIT, ela mantém o calor corporal, proporcionando conforto durante os treinos e atividades ao ar livre. Com um design avançado e acabamento de qualidade, esta camisola oferece um ajuste perfeito e liberdade de movimento. Enfrente o clima frio com confiança usando esta camisola térmica de alto desempenho.',
    price: '€59.50',
    type: 'camisolas',
    condition: 'Excelente',
  },
  {
    name: 'Tiger Woods',
    image: 'imgs/camisolas/5.webp',
    description:
      'Nike Tiger Woods combina estilo e desempenho. Feita com tecido de alta qualidade, ela oferece conforto e liberdade de movimento durante o jogo. O design elegante e os detalhes exclusivos refletem a essência do Tiger Woods, adicionando um toque de sofisticação ao seu visual esportivo. Domine o campo com confiança usando esta camisola premium da Nike Tiger Woods.',
    price: '€19.99',
    type: 'camisolas',
    condition: 'Bom',
  },
  {
    name: 'kevin Durant',
    image: 'imgs/camisolas/6.webp',
    description:
      'Inspirada no estilo e na habilidade do renomado jogador de basquete, ela combina conforto e desempenho. Feita com tecidos de alta qualidade, oferece uma sensação suave e leve. O design moderno e os detalhes exclusivos refletem a personalidade única de Kevin Durant. ',
    price: '€49.99',
    type: 'camisolas',
    condition: 'Excelente',
  },
  {
    name: 'Jordan Artist Series by Umar Rashid',
    image: 'imgs/camisolas/7.webp',
    description:
      'Celebre a fusão da arte e do basquete com esta camisola Jordan. Criada em colaboração com o artista Umar Rashid, esta peça é uma obra de arte vestível, unindo moda e expressão artística. Com detalhes exclusivos e design icônico da marca Jordan, garante conforto e estilo impecáveis. Destaque-se com a Camisola Jordan Artist Series by Umar Rashid.',
    price: '€15.99',
    type: 'camisolas',
    condition: 'Bom',
  },
  {
    name: 'Nike Dri-FIT Icon',
    image: 'imgs/camisolas/8.webp',
    description:
      'Mantenha seus pequenos atletas confortáveis e secos com a camisola Nike Dri-FIT Icon. É feita com o tecido avançado Dri-FIT, que afasta o suor da pele, proporcionando frescor e conforto durante as atividades. O ajuste e o design são pensados para o movimento livre e o estilo ativo dos pequenos. Prepare-os para o sucesso com a camisola Nike Dri-FIT Icon ',
    price: '€5.99',
    type: 'camisolas',
    condition: 'Bom',
  },
  {
    name: 'Nike Sportswear Tech Fleece',
    image: 'imgs/casacos/1.webp',
    description:
      'Este casaco de fleece da Nike combina conforto e estilo. Seu tecido inovador proporciona isolamento térmico sem adicionar peso extra, tornando-o perfeito para dias frios. Além disso, seu design contemporâneo e ajuste perfeito garantem um visual esportivo e elegante.',
    price: '€69.99',
    type: 'casacos',
    condition: 'Excelente',
  },
  {
    name: 'Nike Sportswear Tech Fleece',
    image: 'imgs/casacos/2.webp',
    description:
      'Mantenha seu pequeno(a) aquecido(a) e confortável com este casaco Nike Tech Fleece projetado especialmente para crianças. Com um tecido macio e isolante, ele proporciona calor durante o tempo frio, além de um visual moderno e esportivo.',
    price: '€24.99',
    type: 'casacos',
    condition: 'Bom',
  },
  {
    name: 'Nike Sportswear Tech Fleece',
    image: 'imgs/casacos/3.webp',
    description:
      'Este casaco Nike Tech Fleece é a combinação perfeita de estilo e conforto para as mulheres modernas. Feito com um tecido macio e leve, ele mantém você aquecida em dias frios, enquanto o design feminino e elegante adiciona um toque de sofisticação ao seu visual.',
    price: '€30.99',
    type: 'casacos',
    condition: 'Bom',
  },
  {
    name: 'Nike Phoenix Fleece',
    image: 'imgs/casacos/4.webp',
    description:
      'Este casaco infantil Nike Phoenix é perfeito para os pequenos aventureiros. Com seu tecido de fleece Phoenix de alta qualidade, oferece isolamento térmico eficiente, mantendo as crianças aquecidas durante o inverno. Além disso, seu design confortável e funcional permite uma fácil movimentação, tornando-o ideal para atividades ao ar livre.',
    price: '€29.99',
    type: 'casacos',
    condition: 'Bom',
  },
  {
    name: 'Nike Dri-FIT Academy',
    image: 'imgs/casacos/5.jpeg',
    description:
      'Este casaco da Nike, da linha Dri-FIT Academy, é perfeito para os atletas em busca de desempenho e conforto. Feito com tecido de alta tecnologia, ele proporciona excelente absorção de suor, mantendo você seco e confortável durante os treinos. Com seu design atlético e ajuste perfeito, é uma escolha ideal para os praticantes de esportes.',
    price: '€29.99',
    type: 'casacos',
    condition: 'Bom',
  },
  {
    name: 'NikeCourt Dri-FIT Heritage',
    image: 'imgs/casacos/6.webp',
    description:
      'Este casaco NikeCourt combina estilo e desempenho. Feito com tecido Dri-FIT, ele oferece uma excelente absorção de suor, mantendo você seco e confortável durante as atividades esportivas. Com detalhes clássicos e um design moderno, é a escolha perfeita para os amantes do tênis que buscam estilo e funcionalidade.',
    price: '€23.99',
    type: 'casacos',
    condition: 'Bom',
  },
  {
    name: 'Nike Sportswear',
    image: 'imgs/casacos/7.webp',
    description:
      'Este casaco da Nike Sportswear é uma combinação perfeita de estilo e funcionalidade. Com seu design esportivo e detalhes modernos, ele oferece um visual atlético e dinâmico. Além disso, seu tecido de alta tecnologia proporciona conforto e proteção em todas as atividades. Seja para uma corrida ao ar livre ou para um encontro casual, este casaco é a escolha ideal.',
    price: '€34.99',
    type: 'casacos',
    condition: 'Muito Bom',
  },
  {
    name: 'Nike Sportswear Hybrid',
    image: 'imgs/casacos/8.webp',
    description:
      'Este casaco Nike Sportswear Hybrid é uma peça de destaque para os amantes de moda urbana. Combinando elementos esportivos e urbanos, possui um design inovador e versátil. Feito com materiais de alta qualidade, oferece conforto e estilo em todas as ocasiões.',
    price: '€36.99',
    type: 'casacos',
    condition: 'Muito Bom',
  },
  {
    name: 'Nike Dunk Low',
    image: 'imgs/sapatilhas/1.webp',
    description:
      'Os tênis Nike Dunk Low são uma escolha clássica para os amantes de calçados estilosos e confortáveis. Com seu design icônico e atemporal, essas sapatilhas oferecem um visual elegante e versátil. Feitos com materiais de alta qualidade, eles proporcionam durabilidade e um ajuste confortável. Adicione um toque de estilo autêntico ao seu guarda-roupa com os Nike Dunk Low.',
    price: '€49.99',
    type: 'sapatilhas',
    condition: 'Muito Bom',
  },
  {
    name: 'Nike Air Force',
    image: 'imgs/sapatilhas/2.webp',
    description:
      'As sapatilhas Nike Air Force são um verdadeiro ícone da moda urbana. Com seu design clássico e elegante, esses tênis oferecem conforto e estilo sem igual. A tecnologia Air-Sole proporciona amortecimento e suporte a cada passo, enquanto o couro premium garante durabilidade e sofisticação. Com os Nike Air Force, você estará pronto para se destacar com um visual urbano e contemporâneo.',
    price: '€60.99',
    type: 'sapatilhas',
    condition: 'Excelente',
  },
  {
    name: 'Nike Go FlyEase',
    image: 'imgs/sapatilhas/3.webp',
    description:
      'As sapatilhas Nike Go FlyEase são o exemplo perfeito de praticidade e estilo. Com seu design inovador e sem cadarços, esses tênis permitem que você calce e remova-os facilmente com um movimento simples. Além disso, oferecem um ajuste confortável e seguro para caminhadas ou atividades do dia a dia. Com os Nike Go FlyEase, você terá uma combinação perfeita entre conveniência e moda.',
    price: '€29.99',
    type: 'sapatilhas',
    condition: 'Bom',
  },
  {
    name: 'Air Jordan 1 Mid SE',
    image: 'imgs/sapatilhas/4.webp',
    description:
      'Os tênis Air Jordan 1 Mid SE são um clássico reinventado. Com sua silhueta icônica e detalhes exclusivos, eles combinam estilo e desempenho. Feitos com materiais premium, esses tênis proporcionam durabilidade e conforto durante todo o dia. Seja para o dia a dia ou para destacar-se nas ruas, os Air Jordan 1 Mid SE são a escolha perfeita para os verdadeiros entusiastas de sneakers.',
    price: '€71.99',
    type: 'sapatilhas',
    condition: 'Excelente',
  },
  {
    name: 'Nike Dunk Low',
    image: 'imgs/sapatilhas/5.webp',
    description:
      'Os tênis Nike Dunk Low são um ícone da moda urbana. Com sua estética retro e design versátil, esses tênis são perfeitos para qualquer ocasião. Com uma variedade de cores e materiais, eles oferecem estilo e personalidade ao seu visual. Além disso, a tecnologia de amortecimento garante conforto durante o uso. Adicione um toque de estilo autêntico ao seu guarda-roupa com os clássicos Nike Dunk Low.',
    price: '€29.99',
    type: 'sapatilhas',
    condition: 'Bom',
  },
  {
    name: 'Nike Benassi JDI',
    image: 'imgs/sapatilhas/6.webp',
    description:
      "As sandálias Nike Benassi JDI são o sinônimo de conforto e estilo casual. Com sua tira larga e o logotipo 'Just Do It' em destaque, essas sandálias proporcionam um visual moderno e despojado. A palmilha macia e a sola texturizada oferecem conforto e aderência a cada passo. Seja para relaxar em casa ou para curtir um dia ensolarado, as Nike Benassi JDI são a escolha perfeita.",
    price: '€13.99',
    type: 'sapatilhas',
    condition: 'Bom',
  },
  {
    name: 'Air Jordan 1 Low FlyEase',
    image: 'imgs/sapatilhas/7.webp',
    description:
      'Os tênis Air Jordan 1 Low FlyEase combinam estilo e acessibilidade. Com seu design inovador e sistema de fechamento fácil de calçar, esses tênis são perfeitos para pessoas que procuram praticidade sem abrir mão do estilo. Com sua icônica silhueta Air Jordan 1 Low, eles proporcionam um visual elegante e atemporal. Desfrute do conforto e da conveniência dos Air Jordan 1 Low FlyEase em cada passo.',
    price: '€79.99',
    type: 'sapatilhas',
    condition: 'Excelente',
  },
  {
    name: 'Nike Air Force 1 Shadow',
    image: 'imgs/sapatilhas/8.webp',
    description:
      'Os tênis Nike Air Force 1 Shadow são uma versão moderna e feminina do clássico Air Force 1. Com camadas sobrepostas e detalhes em relevo, esses tênis oferecem um visual único e estiloso. Além disso, apresentam uma entressola mais alta, proporcionando uma sensação de elevação. Combinando estilo e conforto, os Nike Air Force 1 Shadow são ideais para as mulheres que desejam se destacar com um toque de ousadia.',
    price: '€76.99',
    type: 'sapatilhas',
    condition: 'Excelente,',
  },
];

// Retrieve the selected product from the query parameter
const selectedProduct = getQueryParam('product');

// Find the corresponding product in the data
const product = productData.find(
  (item, index) => index + 1 === parseInt(selectedProduct)
);

// Display the product details
if (product) {
  const productInfoContainer = document.getElementById('product-info');

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
                    <a href="" style="font-size: 20px;font-weight: 600; text-decoration: none" onclick="storeItem()">Adicionar ao Carrinho</a>
            </div>
        </div>
    `;

  // Display product details
  productInfoContainer.innerHTML = productInfoHTML;
}

function myFunction() {
  var input = document
    .getElementById('search-input')
    .value.trim()
    .toUpperCase();
  var ul = document.getElementById('product-list');
  var li = ul.getElementsByTagName('li');

  // Verifica se o campo de pesquisa está vazio
  if (input.length === 0) {
    ul.style.display = 'none'; // Oculta a lista
    return; // Sai da função sem processar a pesquisa
  }

  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName('a')[0];
    var txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(input) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }

  ul.style.display = ''; // Exibe a lista de resultados
}

function storeItem() {
  // Retrieve the selected product from the query parameter
  const selectProd = getQueryParam('product');

  // Find the corresponding product in the data
  const produto = productData.find(
    (item, index) => index + 1 === parseInt(selectProd)
  );
  const serializedProduto = JSON.stringify(produto); // Convert object to string
  localStorage.setItem('produto' + (numOfProducts + 1), serializedProduto);
  //console.log(numOfProducts);
  localStorage.setItem('cartEmpty', 'false');
  var numOfProducts = parseInt(localStorage.getItem('numOfProducts'));
  numOfProducts += 1;
  console.log(numOfProducts);
  localStorage.setItem('numOfProducts', numOfProducts);
}
function removeIt(cartItem) {
  const item = document.getElementById('item' + cartItem);
  item.style.display = 'none';
  localStorage.removeItem('produto' + cartItem);
  numOfProducts -= 1;
  localStorage.setItem('numOfProducts', numOfProducts);
  var n = localStorage.getItem('numOfProducts');
  if (n === 0) {
    localStorage.setItem('cartEmpty', 'true');
  }
}
