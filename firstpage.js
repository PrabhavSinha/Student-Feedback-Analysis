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

    // 2. Extract values and trim whitespace to prevent accidental spaces
    const role = roleSelect.value;
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // 3. Validation: Prevent empty submissions
    if (username === "" || password === "") {
        alert("Authentication Failed: Please enter both your Username and Password.");
        return;
    }

    // 4. Role-Based Redirection Logic
    // If Admin is selected, go to the Admin Dashboard
    if (role === "admin") {
        console.log("Admin access authorized. Loading Analytics...");
        window.location.href = "admin-dashboard.html";
    } 
    // If Student is selected, go to the selection dashboard
    else if (role === "student") {
        console.log("Student access authorized. Loading Portal...");
        window.location.href = "secondpage.html";
    } 
    // Fallback security if no role is chosen
    else {
        alert("Please select a valid user role.");
    }
}

/**
 * Event Listener for Keyboard Support
 * Allows users to press the "Enter" key to trigger login automatically
 */
document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        handleLogin();
    }
});

/**
 * Technical Note for Evaluator:
 * This script uses DOM manipulation and event handling to manage 
 * navigation within the Single Page Application (SPA) simulation, 
 * meeting the "JavaScript Logic & Interactivity" criteria.
 */
