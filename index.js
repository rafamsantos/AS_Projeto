// Function to perform login
/*function login() {
  // Code to perform user login

  // Simulated successful login
  var isLoggedIn = true;

  if (isLoggedIn) {
    localStorage.setItem('isLoggedIn', 'true');
    checkLoginStatus(); // Update button state after login

    /*
    // Redirect to the desired page after login
    if (localStorage.getItem('redirect')) {
      window.location.href = localStorage.getItem('redirect');
    }
    
  } else {
    alert('Login failed. Please check your credentials.');
  }
} */

// Function to perform logout
function logout() {
  // Code to perform user logout
  localStorage.setItem('isLoggedIn', 'false');
  checkLoginStatus(); // Update button state after logout
  window.location.href = 'index.html'; // Redirect to the main page after logout
}

function goToCart() {
  var isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn === 'false') {
    window.location.href = 'login.html';
  } else {
    window.location.href = 'conta.html';
  }
}

// Check if the user is logged in
function checkLoginStatus() {
  var isLoggedIn = localStorage.getItem('isLoggedIn');

  if (isLoggedIn === 'true') {
    document.getElementById('acc-container').style.display = 'table';
    var name = localStorage.getItem('nome');
    document.getElementById('acc-name').textContent = name;
    document.getElementById('loginButton').textContent = 'Log out';
    document.getElementById('loginButton').onclick = logout;
  } else {
    document.getElementById('acc-container').style.display = 'none';
    document.getElementById('loginButton').textContent = 'Log in';
    // document.getElementById('loginButton').onclick = login;
  }
}

// Execute the function when the page loads
window.onload = function () {
  checkLoginStatus(); // Perform login check

  // Check for a redirection parameter in the URL
  var redirect = localStorage.getItem('redirect');
  if (redirect) {
    localStorage.removeItem('redirect');
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      window.location.href = redirect; // Redirect only if not logged in
    }
  }
};

// Update the login state when navigating to another page
/*window.onunload = function () {
  localStorage.setItem('redirect', window.location.href);
};
*/
