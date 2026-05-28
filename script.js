document.addEventListener('DOMContentLoaded', () => {
    const badges = document.querySelectorAll('.filter-badge');
    const cards = document.querySelectorAll('.card-item');
    const searchInput = document.querySelector('.search-box input');

    function filterProperties() {
        const activeFilter = document.querySelector('.filter-badge.active').dataset.filter;
        const searchQuery = searchInput.value.toLowerCase().trim();

        cards.forEach(card => {
            const category = card.dataset.category;
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const desc = card.querySelector('.card-description').textContent.toLowerCase();
            const loc = card.querySelector('.card-location span').textContent.toLowerCase();
            
            const matchesCategory = activeFilter === 'all' || category === activeFilter;
            const matchesSearch = title.includes(searchQuery) || desc.includes(searchQuery) || loc.includes(searchQuery);

            if (matchesCategory && matchesSearch) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    badges.forEach(badge => {
        badge.addEventListener('click', () => {
            badges.forEach(b => b.classList.remove('active'));
            badge.classList.add('active');
            filterProperties();
        });
    });

    searchInput.addEventListener('input', filterProperties);
});
