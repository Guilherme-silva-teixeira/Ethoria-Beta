const container = document.getElementById("container");


    const item = document.getElementById("item");

    let playerCoordX = 0;
    let playerCoordY = 0;

    const debug = document.getElementById("debug");
    const debug1 = document.getElementById("debug1");

    

    const gameCanvas = document.getElementById("gameCanvas");
        const player = document.getElementById("player");

        const chunkSize = 529 / 16; // Tamanho de um chunk para 4x4 grid
        let playerX = 0; // Posição X do jogador no mundo
        let playerY = 0; // Posição Y do jogador no mundo

        // Criar os chunks
        for (let i = 0; i < 256; i++) {
            const chunk = document.createElement("div");
            chunk.classList.add("chunk");
            chunk.dataset.chunkIndex = i;
            gameCanvas.appendChild(chunk);

            chunk.addEventListener("click", () => {
                const chunkRow = Math.floor(i / 16);
                const chunkCol = i % 16;

                playerCoordX = chunkCol * chunkSize + chunkSize / 32 - player.offsetWidth / 32;
                playerCoordY = chunkRow * chunkSize + chunkSize / 32 - player.offsetHeight / 32;

                player.style.transform = `translate(${playerCoordX}px, ${playerCoordY}px)`;
            });
        }

        // Inicializar posição do jogador
        player.style.transform = `translate(${playerCoordX}px, ${playerCoordY}px)`;

        // Atualiza chunks ao mover o jogador
        function updateChunks() {
            const currentChunkX = Math.floor(playerX / chunkSize);
            const currentChunkY = Math.floor(playerY / chunkSize);

            // Carregar chunks ao redor do jogador (3x3)
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    loadChunk(currentChunkX + x, currentChunkY + y);
                }
            }
        }

        // Movimentação do jogador
        document.addEventListener("keydown", (e) => {
            
            switch (e.key)
            {
                case "ArrowUp":
                    playerCoordY -= 10;
                    break;
                case "ArrowDown":
                    playerCoordY += 10;
                    break;
                case "ArrowLeft":
                    playerCoordX -= 10;
                    break;
                case "ArrowRight":
                    playerCoordX += 10;
                    break;
            }

            // Atualizar posição do jogador
            player.style.transform = `translate(${playerCoordX}px, ${playerCoordY}px)`;

            // Atualizar chunks
            updateChunks();
          

        // Inicializar o primeiro chunk
            updateChunks();


        // Limitar jogador dentro da área
        
        if (playerCoordX < 0) {
            playerCoordX = 0;
        } else if (playerCoordX > gameCanvas.offsetWidth - player.offsetWidth) {
            playerCoordX = gameCanvas.offsetWidth - player.offsetWidth;
        }
    
        if (playerCoordY < 0) {
            playerCoordY = 0;
        } else if (playerCoordY > gameCanvas.offsetHeight - player.offsetHeight) {
            playerCoordY = gameCanvas.offsetHeight - player.offsetHeight;
        }

        player.style.top = `${playerCoordY}px`;
        player.style.left = `${playerCoordX}px`;
        
        // Atualizar posição no debug
        debug.innerHTML = `X= ${playerCoordX} , Y= ${playerCoordY}`;
        debug.style.color = "#fff";

        // Verificar colisão
        const playerRect = player.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        
        if (collision(playerRect, itemRect) == true && collisionWithItem() == true) {
            let item = document.getElementById("item");
            debug1.innerHTML = "collision player + item = True";
            debug1.style.color = "#fff";
            collisionWithItem();
        }

        
    let pv = window.getComputedStyle(player);
    let pvtX = parseInt(pv.getPropertyValue("translateX"));
    let pvtY = parseInt(pv.getPropertyValue("translateY"));
    let iv = window.getComputedStyle(item);
    let ivtX = parseInt(pv.getPropertyValue("translateX"));
    let ivtY = parseInt(pv.getPropertyValue("translateY"));
        
        if(
            !(
                (pvtX > ivtX && pvtY > ivtY)||
                (pvtx == ivtx && pvtY == ivtY)
            ) 
        )
        {
            debug1.innerHTML = "collision player + item = True";
            debug1.style.color = "#fff";
            collisionWithItem();
        }
        
    });


    function collision(playerRect, itemRect) {
        return !(
            (playerRect.right < itemRect.left ||
            playerRect.left > itemRect.right ||
            playerRect.bottom < itemRect.top ||
            playerRect.top > itemRect.bottom)
        );
    }

    function collisionWithItem()
    {
            let item = document.getElementById("item");
            let debug0 = document.getElementById("debug1");
            item.style.height = 0;
            item.style.width = 0;
            item.style.left = "-30px";
            item.style.top = "-30px";
            debug0.innerHTML += "\nItemDrop = true";
            debug0.style.color = "#fff";
            return true;
    }

    let inventoryItems = 4;
    let inventory = {};
    let inventoryActualItems = 4;
    let item1 = "green object";

    function invAdministrator()
    {   
        if(collisionWithItem() == true)
        {
            inventory+=item1;
        }
    }
