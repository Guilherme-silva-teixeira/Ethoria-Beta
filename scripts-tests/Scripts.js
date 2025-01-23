
        //-----------------MAIN VARIABLES-----------------//
        let gameCanvas = document.getElementById("gameCanvas");
        let player = document.getElementById("player");
        let item = document.getElementById("item");

        //-----------------CHUNK AND PLAYER VARIABLES-----------------//

        let chunkSize = 529 / 16;
        let playerCoordX = 0;
        let playerCoordY = 0;

        //-----------------DEBUG VARIABLES-----------------//
        let debug = document.getElementById("debug");
        let debug1 = document.getElementById("debug1");
        let debug3 = document.getElementById("debug3");

        //-----------------GENERATE ITEM-----------------//
        function placeItem() {
            const randomChunk = Math.floor(Math.random() * 256);
            const chunkRow = Math.floor(randomChunk / 16);
            const chunkCol = randomChunk % 16;

            const itemX = chunkCol * chunkSize + chunkSize / 2 - item.offsetWidth / 2;
            const itemY = chunkRow * chunkSize + chunkSize / 2 - item.offsetHeight / 2;
            //debug3 recreation

            item.style.transform = `translate(${itemX}px, ${itemY}px)`;
            debug3.innerHTML = `Item Coordinates = ${itemX} , ${itemY}`;
        }

        //-------------------EVENTOS DE CLICK ABAIXO----------------//
        for (let i = 0; i < 256; i++)
            {
            const chunk = document.createElement("div");
            chunk.classList.add("chunk");
            gameCanvas.appendChild(chunk);

            chunk.addEventListener("click", () => {
                const chunkRow = Math.floor(i / 16);
                const chunkCol = i % 16;

                playerCoordX = chunkCol * chunkSize + chunkSize / 2 - player.offsetWidth / 2;
                playerCoordY = chunkRow * chunkSize + chunkSize / 2 - player.offsetHeight / 2;

                checkCollisionPlayer();
                player.style.transform = `translate(${playerCoordX}px, ${playerCoordY}px)`;
                debug.innerHTML = `Click player coordinates:  ${playerCoordX} , ${playerCoordY}`;
            });
        }

        //-----------------PLAYER COLLISION ONLY-----------------//
        function checkCollisionPlayer()
        {
            const playerRect = player.getBoundingClientRect();
            const itemRect = item.getBoundingClientRect();

            return !(
                playerRect.right < itemRect.left ||
                playerRect.left > itemRect.right ||
                playerRect.bottom < itemRect.top ||
                playerRect.top > itemRect.bottom
            );
        }

        //-----------------STYLE COLLISION ONLY-----------------//
        function checkCollision(rect1, rect2)
        {
            var rect1v = rect1.getBoundingClientRect();
            var rect2v = rect2.getBoundingClientRect();

            return!(
                rect1v.right < rect2v.left ||
                rect1v.left > rect2v.right ||
                rect1v.bottom < rect2v.top ||
                rect1v.top > rect2v.bottom
            );
        }

        // Atualizar posição do jogador via teclado
        document.addEventListener("keydown", (e) => {
            switch (e.key)
            {
                case "ArrowUp":
                    playerCoordY = Math.max(0, playerCoordY - chunkSize);
                    break;
                case "ArrowDown":
                    playerCoordY = Math.min(529 - player.offsetHeight, playerCoordY + chunkSize);
                    break;
                case "ArrowLeft":
                    playerCoordX = Math.max(0, playerCoordX - chunkSize);
                    break;
                case "ArrowRight":
                    playerCoordX = Math.min(529 - player.offsetWidth, playerCoordX + chunkSize);
                    break;
            }

            player.style.transform = `translate(${playerCoordX}px, ${playerCoordY}px)`;

            // Verificar colisão com o item
            if (checkCollisionPlayer())
                {
                debug1.innerText = "Collision detected!";
                placeItem(); // Reposicionar o item
            }
            else
            {
                debug1.innerText = "No collision.";
            }

            debug.innerText = `Player Position: (${playerCoordX}, ${playerCoordY})`;
        });
        // Inicializar o jogo
        placeItem();

        //-----------------IINVENTORY-----------------//

        function inventory()
        {
            inventory = {
                greenObject 
            }
        }
