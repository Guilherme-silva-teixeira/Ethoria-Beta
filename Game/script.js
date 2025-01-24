        //-------------=-{   THE LEGENDS OF ETHORIA   }-=----------------//
        //------------- Game By Guilherme Silva Teixeira -------------//
        //-----------------MAIN VARIABLES-----------------//
        let gameCanvas = document.getElementById("gameCanvas");
        let player = document.getElementById("player");
        let item = document.getElementById("item");
        let inventoryContainer = document.getElementById("inventory");

        //-----------------CHUNK AND PLAYER VARIABLES-----------------//

        let chunkSize = 529 / 16;
        let playerCoordX = 0;
        let playerCoordY = 0;

        //-----------------DEBUG VARIABLES-----------------//
        let debug = document.getElementById("debug");
        let debug1 = document.getElementById("debug1");
        let debug3 = document.getElementById("debug3");

        //-----------------ADDITIONAL STYLES (MAIN)-----------------//

        inventoryContainer.style.color = "#fff";
        debug5.style.color = "#fff";

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

            return true;
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
            if (checkCollisionPlayer() == true)
                {
                debug1.innerText = "Collision detected!";
                placeItem(); // Reposicionar o item

                    //-----------------COLLISION CHECKING-----------------//
                    //-----------------INVENTORY VIEWING-----------------//
                    addToInventory(item);

                    inventoryContainer.innerHTML = `INVENTORY = ${
                        inventory.forEach(function(inventory) {
                            inventory
                        })
                    }`;
            }
            else
            {
                debug1.innerText = "No collision.";
            }

            debug.innerText = `Player Position: (${playerCoordX}, ${playerCoordY})`;
            
        });
        // Inicializar o jogo
        placeItem();

        //-----------------INVENTORY-----------------//

        let inventory = {};

        function addToInventory(item)
        {
            let debug5 = document.getElementById("debug5");
            if(inventory[item.id])
            {
                inventory[item.id]++;
            }else{
                inventory[item.id] = 1;
            }
            debug5.innerHTML = `item ${item.id} was add into inventory`;
        }

        //----------------ITEMS-----------------//

        let axe = document.getElementById("axe");
        let pickaxe = document.getElementById("pickaxe");
        let sword = document.getElementById("sword");
        let hammer = document.getElementById("hammer");
        let bread = document.getElementById("bread");

        let items = {
            axe,
            pickaxe,
            sword,
            hammer,
            bread
        };

        let qtdtAxe = 0;
        let qtdtPickaxe = 0;

        //-----------------ADD STYLE TO ITEMS-----------------//
        axe.style.height = "49px";
        axe.style.width = "49px";
        axe.style.border = "1px solid #f00";//provisory
        axe.style.backgroundImage = "url(/main/textures/weaponsW.png)";
        axe.style.backgroundPosition = "-384px -289px";
        axe.style.backgroundSize = "auto";

        pickaxe.style.height = "49px";
        pickaxe.style.width = "49px";
        pickaxe.style.border = "1px solid #0f0";//provisory
        pickaxe.style.backgroundImage = "url(/main/textures/weaponsW.png)";
        pickaxe.style.backgroundPosition = "-243px -288px";
        pickaxe.style.backgroundSize = "auto";

        sword.style.height = "49px";
        sword.style.width = "49px";
        sword.style.border = "1px solid #00f";//provisory
        sword.style.backgroundImage = "url(/main/textures/WeaponsW.png)";
        sword.style.backgroundPosition = "-3px -342px";
        //-----------------PLAYER STATS-----------------//
        //FLOAT

        let playerExperience = 0.0;
        let playerLife = 0.0;
        let playerEnergy = 0.00;
