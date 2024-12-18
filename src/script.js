document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".login-button");
    const usernameField = document.querySelector(".input-field[type='text']");
    const passwordField = document.querySelector(".input-field[type='password']");

    // Dummy registered users array
    let registeredUsers = [
        {
            email: "testuser@example.com",
            password: "password123"
        }
    ];

    // Function to validate email
    function emailIsValid(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate password
    function passwordIsValid(password) {
        return password.length >= 6; // Example condition: password must be at least 6 characters
    }

    // Login functionality
    loginButton.addEventListener("click", function () {
        const username = usernameField.value;
        const password = passwordField.value;

        if (!emailIsValid(username)) {
            alert("Invalid email format.");
            return;
        }

        if (!passwordIsValid(password)) {
            alert("Invalid password. It must be at least 6 characters long.");
            return;
        }

        // Check if the user is registered
        const user = registeredUsers.find(
            (u) => u.email === username && u.password === password
        );

        

        if (user) {
            alert("Login successful!");
            window.location.assign("feed.html");
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
