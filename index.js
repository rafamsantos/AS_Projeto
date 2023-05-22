// Função para realizar login
function login() {
  // Código para realizar o login do usuário
  
  // Simulação do login bem-sucedido
  var isLoggedIn = true;

  if (isLoggedIn) {
    localStorage.setItem('isLoggedIn', 'true');
    checkLoginStatus(); // Atualiza o estado do botão após o login
    if (localStorage.getItem('redirect')) {
      window.location.href = localStorage.getItem('redirect'); // Redireciona para a página desejada após o login
    }
  } else {
    alert('Falha no login. Verifique suas credenciais.');
  }
}

// Função para realizar logout
function logout() {
  // Código para realizar o logout do usuário
  localStorage.setItem('isLoggedIn', 'false');
  checkLoginStatus(); // Atualiza o estado do botão após o logout
  window.location.href = 'index.html'; // Redireciona para a página principal após o logout
}

// Verifica se o usuário está logado
function checkLoginStatus() {
  var isLoggedIn = localStorage.getItem('isLoggedIn');

  if (isLoggedIn === 'true') {
    document.getElementById('loginButton').textContent = 'Log out';
    document.getElementById('loginButton').onclick = logout;
  } else {
    document.getElementById('loginButton').textContent = 'Log in';
    document.getElementById('loginButton').onclick = login;
  }
}

// Executa a função ao carregar a página
window.onload = function () {
  checkLoginStatus(); // Executa a verificação de login

  // Verifica se há um parâmetro de redirecionamento na URL
  var redirect = localStorage.getItem('redirect');
  if (redirect) {
    localStorage.removeItem('redirect');
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      window.location.href = redirect; // Redireciona somente se não estiver logado
    }
  }
};

// Atualiza o estado do login ao navegar para outra página
window.onunload = function () {
  localStorage.setItem('redirect', window.location.href);
};
