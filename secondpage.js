 // Show username from login (optional)
const nameSpan = document.querySelector('.user-name');
const storedUser = localStorage.getItem('username');

if (storedUser && nameSpan) {
    nameSpan.textContent = 'Welcome, ' + storedUser;
}

// Logout: redirect back to login page
document.getElementById('logoutBtn').addEventListener('click', () => {
    // Optional: clear stored username
    localStorage.removeItem('username');

    // Change this file name if your login page is different
    window.location.href = 'firstpage.html';
});
