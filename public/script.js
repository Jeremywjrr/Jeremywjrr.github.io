// script.js
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('clickButton');
    button.addEventListener('click', function () {
        // Send a request to the server to log the click
        fetch('/api/click', {
            method: 'POST',
        });
    });
});

