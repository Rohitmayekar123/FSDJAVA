document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logoutBtn');
    const cancelButton = document.getElementById('cancelBtn');

    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            // Clear the user session (e.g., localStorage or sessionStorage)
            localStorage.removeItem('user');  // Assuming user data is stored in localStorage
            sessionStorage.removeItem('user'); // Assuming session data is stored here

            // Hide the logout button and show the success message
            const logoutContainer = document.querySelector('.logout-container');
            const logoutMessage = document.getElementById('logoutMessage');

            if (logoutContainer) logoutContainer.innerHTML = '';
            if (logoutMessage) logoutMessage.style.display = 'block';

            // Redirect to the home page (index.html) after 3 seconds
            setTimeout(function () {
                window.location.href = './index.html'; // Ensure the correct relative path
            }, 3000); // Redirect after 3 seconds
        });
    } else {
        console.error('Logout button not found.');
    }

    if (cancelButton) {
        cancelButton.addEventListener('click', function () {
            // Cancel logout and redirect back to the previous page
            alert('Logout canceled. Redirecting back.');
            window.history.back(); // Navigate back to the previous page
        });
    } else {
        console.error('Cancel button not found.');
    }
});
