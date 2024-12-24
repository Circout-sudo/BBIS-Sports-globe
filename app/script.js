// List of allowed pages (use full URLs for clarity)
const allowedPages = [
    "/index.html",
    "/entered.html",
    "/Previous_games.html",
    "/Upcoming_games.html"
];

// Get the current path from the full URL
const currentPath = window.location.pathname;

// Check if the current page is in the allowed pages list
if (allowedPages.includes(currentPath)) {
    window.location.href = "/pass.html"; // Redirect to pass.html
}

