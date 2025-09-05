<<<<<<< HEAD
// Função para abrir os detalhes do jogo
function openGameDetails(button) {
    const gameCard = button.closest('.game-card');
    const title = gameCard.querySelector('h3').textContent;
    const details = gameCard.querySelector('.game-details').innerHTML;
    const description = gameCard.querySelector('.game-description').innerHTML;

    document.getElementById('game-details-title').textContent = title;
    document.getElementById('game-details-full-details').innerHTML = details;
    document.getElementById('game-details-full-description').innerHTML = description;

    document.getElementById('game-details-overlay').style.display = 'flex';
}

// Função para fechar os detalhes do jogo
function closeGameDetails() {
    document.getElementById('game-details-overlay').style.display = 'none';
}

// Evento para fechar o card ao pressionar a tecla Esc
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeGameDetails();
    }
});

// Evento para fechar o card ao clicar fora dele
document.getElementById('game-details-overlay').addEventListener('click', function(event) {
    // Verifica se o clique foi no overlay e não no modal
    if (event.target.id === 'game-details-overlay') {
        closeGameDetails();
    }
});

// Lógica de pesquisa
function searchGames() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        const searchTerms = card.getAttribute('data-search-terms').toLowerCase();
        if (searchTerms.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Lógica de música (versão mais recente e funcional)
document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById('background-music');
    const toggleMusicBtn = document.getElementById('toggle-music-btn');

    if (toggleMusicBtn) { // Verifica se o botão existe antes de adicionar o evento
        const icon = toggleMusicBtn.querySelector('i');

        // Tenta tocar a música assim que a página é carregada
        // Isso pode ser bloqueado pelos navegadores
        const playPromise = music.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Autoplay funcionou, muda o ícone para "volume-up"
                icon.classList.remove('fa-volume-mute');
                icon.classList.add('fa-volume-up');
            }).catch(error => {
                // Autoplay foi bloqueado, o usuário precisa interagir
                console.log("Autoplay de áudio foi bloqueado. O usuário precisa interagir.");
                icon.classList.remove('fa-volume-up');
                icon.classList.add('fa-volume-mute');
            });
        }
    
        // Adiciona o evento de clique ao botão para controlar a música
        toggleMusicBtn.addEventListener('click', function() {
            if (music.paused) {
                music.play();
                icon.classList.remove('fa-volume-mute');
                icon.classList.add('fa-volume-up');
            } else {
                music.pause();
                icon.classList.remove('fa-volume-up');
                icon.classList.add('fa-volume-mute');
            }
        });
    }
});
=======
// Lógica para abrir e fechar a janela de detalhes do jogo
function openGameDetails(button) {
    const card = button.closest('.game-card');
    const title = card.querySelector('h3').innerText;
    const details = card.querySelector('.game-details').innerHTML;
    const description = card.querySelector('.game-description').innerHTML;
    
    document.getElementById('game-details-title').innerText = title;
    document.getElementById('game-details-full-details').innerHTML = details;
    document.getElementById('game-details-full-description').innerHTML = description;
    
    document.getElementById('game-details-overlay').style.display = 'flex';
}

function closeGameDetails() {
    document.getElementById('game-details-overlay').style.display = 'none';
}

// Lógica de pesquisa
function searchGames() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const gameCards = document.querySelectorAll('.game-card');

    gameCards.forEach(card => {
        const searchTerms = card.getAttribute('data-search-terms').toLowerCase();
        if (searchTerms.includes(filter)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Lógica de filtro por gênero
function filterGames(genre) {
    const gameCards = document.querySelectorAll('.game-card');
    
    // Remove a classe 'active' de todos os botões e adiciona ao clicado
    const filterButtons = document.querySelectorAll('.filters button');
    filterButtons.forEach(button => button.classList.remove('active'));
    document.querySelector(`.filters button[onclick="filterGames('${genre}')"]`).classList.add('active');

    gameCards.forEach(card => {
        const genres = card.getAttribute('data-genre');
        if (genre === 'all' || genres.includes(genre)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Lógica de paginação
let currentPage = 1;
const gamesPerPage = 8;

function showPage(page) {
    const gameCards = document.querySelectorAll('.game-card');
    const totalGames = gameCards.length;
    const totalPages = Math.ceil(totalGames / gamesPerPage);
    
    gameCards.forEach((card, index) => {
        const start = (page - 1) * gamesPerPage;
        const end = start + gamesPerPage;
        if (index >= start && index < end) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
    
    document.getElementById('pageInfo').innerText = `Página ${page} de ${totalPages}`;
    document.getElementById('prevBtn').disabled = (page === 1);
    document.getElementById('nextBtn').disabled = (page === totalPages);
}

function changePage(direction) {
    const totalGames = document.querySelectorAll('.game-card').length;
    const totalPages = Math.ceil(totalGames / gamesPerPage);
    
    currentPage += direction;
    if (currentPage < 1) {
        currentPage = 1;
    }
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    
    showPage(currentPage);
}

// Tocar/silenciar música de fundo
const backgroundMusic = document.getElementById('background-music');
const toggleMusicBtn = document.getElementById('toggle-music-btn');
const musicIcon = toggleMusicBtn.querySelector('i');

// Adiciona um listener para o clique no botão
toggleMusicBtn.addEventListener('click', () => {
    // Verifica se a música está pausada
    if (backgroundMusic.paused) {
        // Tenta tocar a música
        backgroundMusic.play().then(() => {
            // Se a promessa for resolvida (música tocando), muda o ícone para "volume-up"
            musicIcon.classList.remove('fa-volume-mute');
            musicIcon.classList.add('fa-volume-up');
        }).catch(error => {
            // Se houver um erro, mostra no console
            console.error("Erro ao tentar tocar a música:", error);
        });
    } else {
        // Se a música estiver tocando, pausa
        backgroundMusic.pause();
        // Muda o ícone para "volume-mute"
        musicIcon.classList.remove('fa-volume-up');
        musicIcon.classList.add('fa-volume-mute');
    }
});

// Inicialização da página
window.onload = () => {
    showPage(currentPage);
};

// Evento para fechar o modal com a tecla ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeGameDetails();
    }
});
>>>>>>> 01ab31dd5114cd11e0e3aba6a391a589db921ed4
