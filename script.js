// Show selected category
function showCategory(categoryId) {
    const categories = document.querySelectorAll('.category');
    categories.forEach(cat => {
        if (cat.id === categoryId || categoryId === '') {
            cat.classList.toggle('active', cat.id === categoryId);
        } else {
            cat.classList.remove('active');
        }
    });
}

// Search functionality
document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const words = document.querySelectorAll('.word-list li');

    words.forEach(word => {
        const wordText = word.textContent.toLowerCase();
        word.style.display = wordText.includes(searchTerm) ? 'block' : 'none';
    });
});

// Automatically clear search when category changes
document.getElementById('category-select').addEventListener('change', function() {
    document.getElementById('searchBar').value = '';
    const words = document.querySelectorAll('.word-list li');
    words.forEach(word => word.style.display = 'block'); // Show all words when changing categories
});
