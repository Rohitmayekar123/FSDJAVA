// register.js
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // You can add validation and AJAX calls here
    console.log('Register attempt:', { username, email, password });
    alert('Registered successfully!');
});
