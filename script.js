// Aguarda o carregamento completo do DOM para executar o script
document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    //  1. DADOS DE TODOS OS JOGOS
    // =================================================================
    // Agora todos os seus jogos estão aqui. 
    // Para adicionar um novo, basta copiar um bloco e alterar as informações.
    const gamesData = [
        {
            title: "Shodai Nekketsu Kouha Kunio-kun",
            image: "Imagens/jogos/Shodai Nekketsu Kouha Kunio-kun.png",
            genres: ["Ação", "Luta", "Aventura"],
            searchTerms: "shodai nekketsu kouha kunio-kun",
            details: {
                releaseYear: "1992",
                company: "Technōs Japan",
                platform: "SNES"
            },
            description: "Um jogo de ação e aventura que faz parte da famosa série Kunio-kun. O jogo combina elementos de briga de rua com exploração de mapa, onde o jogador assume o papel de Kunio para lutar contra gangues rivais."
        },
        {
            title: "Alundra",
            image: "Imagens/jogos/Alundra.webp",
            genres: ["Ação", "Aventura", "RPG"],
            searchTerms: "alundra",
            details: {
                releaseYear: "1997",
                company: "Matrix Software",
                platform: "PlayStation"
            },
            description: "Alundra é um RPG de ação aclamado pela crítica, conhecido por seu enredo sombrio e complexo, quebra-cabeças desafiadores e combate envolvente. O herói, Alundra, tem a capacidade de entrar nos sonhos das pessoas para salvá-las de suas maldições."
        },
        {
            title: "Grandia",
            image: "Imagens/jogos/grandia.jpg",
            genres: ["RPG", "Aventura"],
            searchTerms: "grandia",
            details: {
                releaseYear: "1997",
                company: "Game Arts",
                platform: "Sega Saturn, PlayStation"
            },
            description: "Um clássico RPG com foco em aventura e exploração. Grandia é conhecido por seu sistema de combate por turnos inovador e dinâmico, além de uma história emocionante sobre a jornada de um jovem explorador em busca do fim do mundo."
        },
        {
            title: "Breath of Fire 1",
            image: "Imagens/jogos/breath of fire 1.jpg",
            genres: ["RPG"],
            searchTerms: "breath of fire 1 bof1",
            details: {
                releaseYear: "1993",
                company: "Capcom",
                platform: "SNES"
            },
            description: "O primeiro jogo da série Breath of Fire, que segue a história de Ryu, um membro de uma raça antiga que pode se transformar em dragões. Ele parte em uma jornada para encontrar sua irmã e impedir um império maligno de dominar o mundo."
        },
        {
            title: "Breath of Fire 2",
            image: "Imagens/jogos/breath of fire 2.jpg",
            genres: ["RPG"],
            searchTerms: "breath of fire 2 bof2",
            details: {
                releaseYear: "1994",
                company: "Capcom",
                platform: "SNES"
            },
            description: "A sequência de Breath of Fire, que se passa 500 anos após o primeiro jogo. Ryu, um garoto com a capacidade de se transformar em dragão, se junta a um grupo de heróis para descobrir a verdade sobre seu passado e lutar contra uma força demoníaca."
        },
        {
            title: "Breath of Fire 3",
            image: "Imagens/jogos/breath of fire 3.jpg",
            genres: ["RPG"],
            searchTerms: "breath of fire 3 bof3",
            details: {
                releaseYear: "1997",
                company: "Capcom",
                platform: "PlayStation"
            },
            description: "O primeiro jogo da série a usar gráficos em 3D. O jogo segue a jornada de um jovem dragão que tenta descobrir a verdade sobre sua espécie e seu passado. É aclamado por sua história, personagens e jogabilidade."
        },
        {
            title: "Chrono Trigger",
            image: "Imagens/jogos/chrono trigger.jpg",
            genres: ["RPG", "Aventura"],
            searchTerms: "chrono trigger",
            details: {
                releaseYear: "11 de março de 1995",
                company: "Square Co., Ltd.",
                platform: "SNES, PlayStation, Nintendo DS, iOS, Android, PC"
            },
            description: "Chrono Trigger é um jogo de RPG desenvolvido pela Square. O jogo segue um grupo de aventureiros que viaja através do tempo para evitar uma catástrofe global. É amplamente aclamado pela crítica por sua jogabilidade, narrativa e design de som inovadores."
        },
        {
            title: "Final Fantasy Pixel Remaster",
            image: "Imagens/jogos/Final Fantasy Pixel Remaster.jpg",
            genres: ["RPG"],
            searchTerms: "final fantasy pixel remaster",
            details: {
                releaseYear: "2021",
                company: "Square Enix",
                platform: "Windows, PS4, Switch, iOS e Android"
            },
            description: "A série FINAL FANTASY Pixel Remaster traz os seis primeiros jogos da franquia, de FINAL FANTASY I a FINAL FANTASY VI, de volta à vida com novos gráficos 2D em pixel, trilha sonora rearranjada e diversas melhorias de qualidade de vida."
        },
        {
            title: "Legend of Mana",
            image: "Imagens/jogos/Legend of Mana.jpg",
            genres: ["RPG", "Aventura"],
            searchTerms: "legend of mana",
            details: {
                releaseYear: "1999 (Original PS1)",
                company: "Square Enix",
                platform: "PS1, PS4, Switch, Windows, Android, iOS"
            },
            description: "Legend of Mana é um RPG com uma jogabilidade inovadora onde o jogador reconstrói o mundo do jogo. Possui um estilo de arte único, trilha sonora aclamada e permite a escolha de personagens e missões não-lineares."
        },
        {
            title: "Grand Theft Auto V",
            image: "Imagens/jogos/Gta 5.jpg",
            genres: ["Ação", "Aventura"],
            searchTerms: "gta 5 grand theft auto v",
            details: {
                releaseYear: "17 de setembro de 2013",
                company: "Rockstar Games",
                platform: "PS3, PS4, PS5, Xbox 360, Xbox One, Xbox Series X/S, PC"
            },
            description: "Um jogo de ação e aventura em mundo aberto, que segue a história de três criminosos cujos caminhos se entrelaçam em Los Santos."
        },
        {
            title: "The Witcher 3: Wild Hunt",
            image: "Imagens/jogos/The Witcher 3 Wild Hunt.jpg",
            genres: ["Ação", "RPG"],
            searchTerms: "the witcher 3 wild hunt",
            details: {
                releaseYear: "19 de maio de 2015",
                company: "CD Projekt",
                platform: "PC, PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch"
            },
            description: "Um RPG de ação em mundo aberto que segue a história de Geralt de Rívia, um caçador de monstros. O jogo é amplamente aclamado pela crítica por sua narrativa, jogabilidade e mundo aberto."
        },
        {
            title: "Baldur's Gate 3",
            image: "Imagens/jogos/Baldur's Gate 3.jpg",
            genres: ["RPG", "Aventura"],
            searchTerms: "baldurs gate 3",
            details: {
                releaseYear: "6 de outubro de 2020",
                company: "Larian Studios",
                platform: "PC, PlayStation 5, Xbox Series X/S, macOS"
            },
            description: "Baldur's Gate 3 é um RPG ambientado no universo de Dungeons & Dragons e segue a história de um grupo de aventureiros que se unem para lutar contra uma ameaça maligna."
        },
        {
            title: "Elden Ring",
            image: "Imagens/jogos/elden ring.jpg",
            genres: ["Ação", "Aventura", "RPG"],
            searchTerms: "elden ring",
            details: {
                releaseYear: "25 de fevereiro de 2022",
                company: "FromSoftware",
                platform: "PS4, PS5, Xbox One, Xbox Series X/S, PC"
            },
            description: "Elden Ring é um RPG de ação em mundo aberto. O jogo se passa em um mundo de fantasia e segue a história de um herói que deve viajar pelo mundo e lutar contra inimigos para restaurar a ordem."
        },
        {
            title: "Secret of Mana",
            image: "Imagens/jogos/Secret of Mana.jpg",
            genres: ["Ação", "Aventura", "RPG"],
            searchTerms: "secret of mana",
            details: {
                releaseYear: "1993",
                company: "Square Enix",
                platform: "SNES"
            },
            description: "O clássico RPG de ação de 1993, Secret of Mana, segue a jornada de três heróis que se unem para evitar que um império malvado use o poder de uma antiga fortaleza voadora para dominar o mundo."
        },
        {
            title: "Street Fighter 6",
            image: "Imagens/jogos/street fighter 6.jpg",
            genres: ["Ação", "Luta"],
            searchTerms: "street fighter 6",
            details: {
                releaseYear: "2 de junho de 2023",
                company: "Capcom",
                platform: "PS4, PS5, Xbox Series X/S, PC"
            },
            description: "Street Fighter 6 é um jogo de luta que apresenta novos personagens, modos de jogo e mecânicas de combate inovadoras na aclamada série."
        },
        {
            title: "Fifa 23",
            image: "Imagens/jogos/fifa 23.jpg",
            genres: ["Esporte"],
            searchTerms: "fifa 23",
            details: {
                releaseYear: "30 de setembro de 2022",
                company: "Eletronic Arts",
                platform: "PS4, PS5, Xbox One, Xbox Series X/S, PC, Nintendo Switch"
            },
            description: "FIFA 23 é um jogo de simulação de futebol. É o 30º e último jogo da série FIFA, pois a EA Sports não renovou a licença com a FIFA."
        },
        {
            title: "Olympic Games Tokyo 2020",
            image: "Imagens/jogos/olympic games tokyo 2020.jpg",
            genres: ["Esporte"],
            searchTerms: "olympic games tokyo 2020",
            details: {
                releaseYear: "24 de julho de 2019",
                company: "Sega",
                platform: "PS4, Xbox One, Nintendo Switch, PC, Google Stadia"
            },
            description: "Um jogo eletrônico de esportes que apresenta 18 eventos olímpicos, incluindo atletismo, natação, ginástica e muito mais, com um modo carreira para criar seu próprio atleta."
        },
        {
            title: "Sekiro: Shadows Die Twice",
            image: "Imagens/jogos/Sekiro Shadows Die Twice.jpg",
            genres: ["Ação", "Aventura", "RPG"],
            searchTerms: "sekiro shadows die twice",
            details: {
                releaseYear: "22 de março de 2019",
                company: "FromSoftware",
                platform: "PS4, Xbox One, PC"
            },
            description: "Sekiro: Shadows Die Twice é um jogo de ação e aventura, que se passa no Japão feudal e segue a história de um ninja que deve proteger um jovem herdeiro de um clã de samurais."
        },
        {
            title: "Stardew Valley",
            image: "Imagens/jogos/Stardew Valley.jpg",
            genres: ["Simulação"],
            searchTerms: "stardew valley",
            details: {
                releaseYear: "26 de fevereiro de 2016",
                company: "ConcernedApe",
                platform: "PS4, PS Vita, Xbox One, Nintendo Switch, PC, Android, iOS"
            },
            description: "Stardew Valley é um jogo de simulação de fazenda. O jogo se passa em uma pequena cidade rural e segue a história de um personagem que herda a fazenda de seu avô. Aclamado por sua jogabilidade relaxante."
        },
        {
            title: "Trials of Mana",
            image: "Imagens/jogos/Trials of Mana.jpg",
            genres: ["RPG"],
            searchTerms: "trials of mana",
            details: {
                releaseYear: "24 de abril de 2020",
                company: "Square Enix",
                platform: "PS4, Nintendo Switch, PC"
            },
            description: "Trials of Mana é um remake do jogo de mesmo nome de 1995. O jogo segue a história de seis heróis que devem se unir para lutar contra uma ameaça maligna, com um sistema de combate em tempo real e classes."
        },
        {
            title: "Sword of Mana",
            image: "Imagens/jogos/Sword of Mana.jpg",
            genres: ["Ação", "Aventura", "RPG"],
            searchTerms: "sword of mana",
            details: {
                releaseYear: "2003",
                company: "Square Enix",
                platform: "Game Boy Advance"
            },
            description: "Sword of Mana é uma recriação do primeiro jogo da série Mana, Final Fantasy Adventure. O jogo segue a história do herói e da heroína que devem lutar contra o Dark Lord e restaurar a Árvore de Mana."
        },
        {
            title: "Digimon World",
            image: "Imagens/jogos/Digimon World.jpg",
            genres: ["RPG"],
            searchTerms: "digimon world 1",
            details: {
                releaseYear: "1999",
                company: "Bandai",
                platform: "PlayStation"
            },
            description: "Um RPG de simulação e criação de monstros, onde o jogador deve cuidar de um Digimon, treiná-lo e fazê-lo evoluir para enfrentar desafios e salvar o Digimundo."
        },
        {
            title: "Digimon World 2",
            image: "Imagens/jogos/Digimon World 2.jpg",
            genres: ["RPG"],
            searchTerms: "digimon world 2",
            details: {
                releaseYear: "2000",
                company: "Bandai",
                platform: "PlayStation"
            },
            description: "Uma sequência que muda a fórmula do original, focando em batalhas de masmorras com combates em turnos. O jogador é um Digimon Tamer que explora o Digimundo para lutar contra vírus e restaurar a paz."
        },
        {
            title: "Digimon World 3",
            image: "Imagens/jogos/Digimon World 3.jpg",
            genres: ["RPG"],
            searchTerms: "digimon world 3",
            details: {
                releaseYear: "2002",
                company: "Bandai",
                platform: "PlayStation"
            },
            description: "Este jogo retorna a um estilo mais tradicional de RPG com exploração de mapa e combate por turnos. A história segue Junior, que se conecta a um jogo de realidade virtual e se vê preso no Digimundo."
        },
        {
            title: "Vagrant Story",
            image: "Imagens/jogos/Vagrant Story.jpg",
            genres: ["RPG", "Aventura"],
            searchTerms: "vagrant story",
            details: {
                releaseYear: "2000",
                company: "Square",
                platform: "PlayStation"
            },
            description: "Conhecido por seu sistema de criação de armas e combate inovador. O jogo se passa no reino de Valendia e segue Ashley Riot, um agente que é enviado para investigar um misterioso culto em uma cidade amaldiçoada."
        },
        {
            title: "Xenogears",
            image: "Imagens/jogos/Xenogears.jpg",
            genres: ["RPG", "Aventura"],
            searchTerms: "xenogears",
            details: {
                releaseYear: "1998",
                company: "Square",
                platform: "PlayStation"
            },
            description: "Um RPG aclamado por sua história complexa e profunda. O jogo segue Fei Fong Wong e seus companheiros em uma jornada para descobrir a verdade sobre suas origens e lutar contra um império maligno."
        },
        {
            title: "Final Fantasy Tactics: WOTL",
            image: "Imagens/jogos/Final fantasy Tactics, The Lion Wars.jpg",
            genres: ["RPG", "Tático"],
            searchTerms: "final fantasy tactics war of the lions",
            details: {
                releaseYear: "1997 (Original) / 2007 (Remake PSP)",
                company: "Square Enix",
                platform: "PSP"
            },
            description: "Versão aprimorada do clássico de PlayStation, este RPG tático em um cenário de guerra medieval, onde o jogador lidera um esquadrão de mercenários em batalhas estratégicas baseadas em turnos."
        },
        {
            title: "Final Fantasy Tactics Advance",
            image: "Imagens/jogos/Final Fantasy Tactics Advanced.jpg",
            genres: ["RPG", "Tático"],
            searchTerms: "final fantasy tactics advance",
            details: {
                releaseYear: "2003",
                company: "Square Enix",
                platform: "Game Boy Advance"
            },
            description: "O primeiro jogo da série Final Fantasy Tactics para um console portátil. O jogo se passa em um mundo de fantasia onde um grupo de crianças é transportado para o mundo de Ivalice."
        },
        {
            title: "Fire Emblem",
            image: "Imagens/jogos/Fire Emblem.jpg",
            genres: ["RPG", "Tático"],
            searchTerms: "fire emblem",
            details: {
                releaseYear: "2003",
                company: "Nintendo",
                platform: "Game Boy Advance"
            },
            description: "Primeiro jogo da série a ser lançado oficialmente fora do Japão, com um sistema de combate por turnos, onde o jogador move seus personagens em um tabuleiro para lutar contra inimigos."
        },
        { // CORRIGIDO
            title: "Breath of Fire 4",
            image: "Imagens/jogos/breath of fire 4.jpg",
            genres: ["RPG"],
            searchTerms: "breath of fire 4 bof4",
            details: {
                releaseYear: "2000",
                company: "Capcom",
                platform: "PlayStation"
            },
            description: "Continuando a saga, Breath of Fire IV apresenta uma história épica com dois protagonistas: Ryu, que novamente perde sua memória, e Fou-Lu, um imperador imortal. O jogo é elogiado por seu belo estilo de arte 2D e sistema de combate refinado."
        },
        { // CORRIGIDO
            title: "Alcahest",
            image: "Imagens/jogos/Alcahest.jpg",
            genres: ["Ação", "RPG"],
            searchTerms: "alcahest",
            details: {
                releaseYear: "1993",
                company: "HAL Laboratory",
                platform: "Super Nintendo (SNES)"
            },
            description: "Este jogo é um RPG de ação onde o herói Alen é o único a sobreviver a um ataque de monstros. Ele deve se unir a vários aliados para 