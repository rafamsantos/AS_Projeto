function store() {
  var email = document.getElementById('email');
  var pw = document.getElementById('pw');
  var nome = document.getElementById('nome');
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if (email.value.length == 0) {
    alert('Please fill in email');
  } else if (pw.value.length == 0) {
    alert('Please fill in password');
  } else if (email.value.length == 0 && pw.value.length == 0) {
    alert('Please fill in email and password');
  } else if (pw.value.length < 8) {
    alert('Min of 8');
  } else if (!pw.value.match(numbers)) {
    alert('please add 1 number');
  } else if (!pw.value.match(upperCaseLetters)) {
    alert('please add 1 uppercase letter');
  } else if (!pw.value.match(lowerCaseLetters)) {
    alert('please add 1 lovercase letter');
  } else {
    localStorage.setItem('email', email.value);
    localStorage.setItem('nome', nome.value);
    localStorage.setItem('pw', pw.value);
    alert('Your account has been created');
    checkLoginStatus(); // Atualiza o status de login
  }
}

//checking
function check() {
  var storedName = localStorage.getItem('email');
  var storedPw = localStorage.getItem('pw');

  var userName = document.getElementById('userName');
  var userPw = document.getElementById('userPw');
  var userRemember = document.getElementById('rememberMe');

  if (userName.value == storedName && userPw.value == storedPw) {
    window.location.href = './index.html';
    localStorage.setItem('isLoggedIn', 'true');
    checkLoginStatus(); // Atualiza o status de login
  } else {
    alert('Wrong Username and Password combination');
  }
  return false;
}

function forgot() {
  $('#forgotpass').modal('show');
  $('#modal2').addClass('d-none');
}

function register() {
  $('#registo').modal('show');
}

console.log(localStorage);

// modal

outroModal = function () {
  $('#modal1').addClass('d-none');
  $('#modal2').removeClass('d-none');
};
