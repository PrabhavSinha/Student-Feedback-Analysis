/**
 * handleLogin
 * This function processes the login form data and redirects users 
 * based on their selected role (Student or Administrator).
 */
function handleLogin() {
    // 1. Get references to the input elements
    const roleSelect = document.getElementById("userRole");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    // 2. Extract values and trim whitespace
    const role = roleSelect.value;
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // 3. Validation: Prevent empty submissions
    if (username === "" || password === "") {
        alert("Authentication Failed: Please enter both your Username and Password.");
        return;
    }

    // 4. Role-Based Redirection Logic
    if (role === "admin") {
        // Redirect to the Administrator Analysis Dashboard
        console.log("Admin access authorized. Loading Analytics...");
        window.location.href = "admin-dashboard.html";
    } else {
        // Redirect to the Student Dashboard (The 3-option page)
        console.log("Student access authorized. Loading Portal...");
        window.location.href = "secondpage.html";
    }
}

/**
 * Event Listener for Keyboard Support
 * Allows users to press "Enter" to trigger the login function
 */
document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        handleLogin();
    }
});

/**
 * Note for future development:
 * To implement specific credentials (e.g., admin / admin123), 
 * wrap the redirection logic in a conditional check:
 * if (username === "admin" && password === "admin123") { ... }
 */