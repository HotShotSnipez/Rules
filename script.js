// JavaScript to handle search functionality
document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const words = document.querySelectorAll('.word-card');

    words.forEach(word => {
        const wordText = word.querySelector('h3').textContent.toLowerCase();
        if (wordText.includes(searchTerm)) {
            word.style.display = 'block';
        } else {
            word.style.display = 'none';
        }
    });
});
