document.addEventListener('DOMContentLoaded', function() {
    const greeting = document.getElementById('greeting');
    const currentDate = new Date();
    const hours = currentDate.getHours();

    if (hours < 12) {
        greeting.textContent = 'Good Morning!';
    } else if (hours < 18) {
        greeting.textContent = 'Good Afternoon!';
    } else {
        greeting.textContent = 'Good Evening!';
    }

    const toggleButton = document.getElementById('toggle-theme');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
});