// JavaScript for interactivity

// Example: Add a greeting based on the time of day
document.addEventListener('DOMContentLoaded', () => {
    const mainHeading = document.querySelector('main h1');
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        mainHeading.textContent = 'Good Morning! Welcome to My Portfolio!';
    } else if (currentHour < 18) {
        mainHeading.textContent = 'Good Afternoon! Welcome to My Portfolio!';
    } else {
        mainHeading.textContent = 'Good Evening! Welcome to My Portfolio!';
    }
});
