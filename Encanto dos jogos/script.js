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