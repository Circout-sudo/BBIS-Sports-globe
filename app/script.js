const allowedPages = [
    "https://bbis-sports-globe.vercel.app/index.html",
    "https://bbis-sports-globe.vercel.app/entered.html",
    "https://bbis-sports-globe.vercel.app/Previous_games.html",
    "https://bbis-sports-globe.vercel.app/Upcoming_games.html"
];

// Get the current path from the full URL
const currentPath = window.location.pathname;
console.log(currentPath)

// Check if the current page is in the allowed pages list
if (allowedPages.includes(currentPath)) {
    alert("This is a simple popup!");
    window.location.href = "/pass.html"; // Redirect to pass.html
}
