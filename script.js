// A função DOMContentLoaded garante que o script só rode após todo o HTML ser carregado
document.addEventListener('DOMContentLoaded', (event) => {

    // --- Variáveis de Paginação (manter se existirem na página principal) ---
    const gameGrid = document.querySelector('.game-grid');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageInfo = document.getElementById('pageInfo');
    const gamesPerPage = 12;
    let currentPage = 1;
    let filteredGames = [];
    let allGames = [];

    if (gameGrid) { // Só inicializa se estiver na página principal
        allGames = Array.from(document.querySelectorAll('.game-card'));
        filteredGames = allGames;
        renderGames();
    }

    function renderGames() {
        if (!gameGrid) return;
        const start = (currentPage - 1) * gamesPerPage;
        const end = start + gamesPerPage;
        
        filteredGames.forEach((card, index) => {
            if (index >= start && index < end) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        updatePagination();
    }

    function updatePagination() {
        if (!gameGrid) return;
        const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
        pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
        
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage >= totalPages;
    }

    window.changePage = function(direction) {
        if (!gameGrid) return;
        const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
        currentPage += direction;
        
        if (currentPage < 1) {
            currentPage = 1;
        } else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        renderGames();
    };

    // --- Funcionalidade de Pesquisa ---
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    if (searchInput && searchBtn) {
        function searchGames() {
            const query = searchInput.value.toLowerCase().trim();

            filteredGames = allGames.filter(card => {
                const searchTerms = card.getAttribute('data-search-terms').toLowerCase();
                return searchTerms.includes(query);
            });
            
            gameGrid.innerHTML = '';
            if (filteredGames.length > 0) {
                filteredGames.forEach(card => gameGrid.appendChild(card));
            } else {
                gameGrid.innerHTML = '<p>Nenhum jogo encontrado com este termo de pesquisa.</p>';
            }

            currentPage = 1;
            renderGames();
        }

        searchBtn.addEventListener('click', searchGames);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchGames();
            }
        });
    }

    // --- Controle de Música ---
    const music = document.getElementById('background-music');
    const toggleMusicBtn = document.getElementById('toggle-music-btn');

    let isPlaying = false;
    if (music) {
        music.volume = 0.5;
    }

    if (toggleMusicBtn && music) {
        toggleMusicBtn.addEventListener('click', () => {
            if (isPlaying) {
                music.pause();
                toggleMusicBtn.innerHTML = '<i class="fas fa-volume-mute"></i> Tocar/Silenciar';
            } else {
                music.play().catch(e => console.error("Erro ao tocar música:", e));
                toggleMusicBtn.innerHTML = '<i class="fas fa-volume-up"></i> Tocar/Silenciar';
            }
            isPlaying = !isPlaying;
        });
    }

    // --- Funcionalidade de Filtro por Gênero ---
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const filterButtons = document.querySelectorAll('.filter-btn');

    if (dropdownBtn && dropdownContent) {
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownContent.classList.toggle('show');
        });

        window.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown')) {
                if (dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                }
            }
        });
        
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const genre = e.target.getAttribute('data-genre');
                
                if (genre === 'Todos') {
                    filteredGames = allGames;
                } else {
                    filteredGames = allGames.filter(card => {
                        const genres = card.getAttribute('data-genre').toLowerCase();
                        return genres.includes(genre.toLowerCase());
                    });
                }
                gameGrid.innerHTML = '';
                if (filteredGames.length > 0) {
                    filteredGames.forEach(card => gameGrid.appendChild(card));
                } else {
                    gameGrid.innerHTML = '<p>Nenhum jogo encontrado neste gênero.</p>';
                }
                
                currentPage = 1;
                renderGames();
                dropdownContent.classList.remove('show');
            });
        });
    }

    // --- Funcionalidade do Modal de Detalhes ---
    const overlay = document.getElementById('game-details-overlay');
    
    window.openGameDetails = function(gameCardElement) {
        if (!overlay) return;
        const title = gameCardElement.querySelector('h3').textContent;
        const details = gameCardElement.querySelector('.game-details').innerHTML;
        const description = gameCardElement.querySelector('.game-description').innerHTML;
        
        document.getElementById('game-details-title').textContent = title;
        document.getElementById('game-details-full-details').innerHTML = details;
        document.getElementById('game-details-full-description').innerHTML = description;
        
        overlay.style.display = 'flex';
    };

    window.closeGameDetails = function() {
        if (!overlay) return;
        overlay.style.display = 'none';
    };

    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeGameDetails();
            }
        });
    }
});