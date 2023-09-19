const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});

sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});

// Function to handle sign-up form submission
function handleSignUp(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form input values
    var username = document.getElementById('signupname').value;
    var password = document.getElementById('signuppass').value;
    var usermail = document.getElementById('signupemail').value;
  
    // Store sign-up details in local storage
    localStorage.setItem('signupemail', usermail);
    localStorage.setItem('signuppass', password);
    localStorage.setItem('signupname', username);
  
    // Clear form fields
    document.getElementById('signupemail').value = '';
    document.getElementById('signuppass').value = '';
    document.getElementById('signupname').value = '';
  
    alert('Sign-up successful! You can now log in.');
  }
  
  // Function to handle login form submission
  function handleLogin(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form input values
    var loginEmail = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Get sign-up details from local storage
    var storedUsername = localStorage.getItem('signupemail');
    var storedPassword = localStorage.getItem('signuppass');
  
    // Check if the entered credentials match the stored details
    if (loginEmail === storedUsername && password === storedPassword) {
      alert('Login successful! Redirecting to homepage...');
      // Perform redirect to the homepage here
      window.location.href = 'dash.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  
    // Clear form fields
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  }
  
  // Add event listeners to the sign-up and login forms
  document.getElementById('signupForm').addEventListener('submit', handleSignUp);
  document.getElementById('loginForm').addEventListener('submit', handleLogin);