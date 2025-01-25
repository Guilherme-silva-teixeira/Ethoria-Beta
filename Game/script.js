        //-------------=-{   THE LEGENDS OF ETHORIA   }-=----------------//
        //------------- Game By Guilherme Silva Teixeira -------------//
        //-----------------MAIN VARIABLES-----------------//
        let gameCanvas = document.getElementById("gameCanvas");
        let player = document.getElementById("player");
        let item = document.getElementById("item");
        let inventoryContainer = document.getElementById("inventory");
        let block = document.getElementById("block");
        let controlButtons = document.getElementById("buttonControls");

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
        block.style.left = "200px";
        block.style.top = "201px";

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
        /*document.addEventListener("keydown", (e) => {
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

            
            let block1 = document.getElementById("block");
            let blockRect = block1.getBoundingClientRect();
            let debug6 = document.getElementById("debug6").innerHTML = blockRect.left + " - " + blockRect.top;

            debug.innerText = `Player Position: (${playerCoordX}, ${playerCoordY})`;
        
            //=======PLAYER MOVIMENT DECLARATION=======
            ///////==CHECK COLLISION WITH BLOCK

            let isDropped = false;
            let controlButtons = document.getElementById("controlButtons");

            function breakInnerBlock()
            {
                return true;
            }

            //Break button events

            if(checkCollision(block, player))
            {
                controlButtons.innerHTML = `
                    <button id="breakerButton">Break Block</button>
                `;

                const breakerButton = document.getElementById("breakerButton");
                breakerButton.addEventListener("click", function ()
                {
                    if(breakBlock())
                        {
                            block.style.animationName = "drop";
                            block.style.animationDuration = "infinite";
                            isDropped = true;
                        }
                });
            }
            else
            {
                const breakerButton = document.getElementById("breakerbutton");
                if(breakerButton)
                {
                    breakerButton.remove();
                }
            }


            //Dropped block styles
            if(isDropped)
            {
                block.style.animationName = "drop";
                block.style.animationDuration = "infinite";
            }
            else
            {
                block.style.animationName = "";
                block.style.animationDuration = "0s";
            }


        });
*/
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
        sword.style.backgroundImage = "url(/main/textures/weaponsW.png)";
        sword.style.backgroundPosition = "0px -339px";
        sword.style.backgroundSize = "auto";

        hammer.style.height = "49px";
        hammer.style.width = "49px";
        hammer.style.border = "1px solid #ff0";
        hammer.style.backgroundImage = "url(/Main/textures/weaponsW.png)";
        hammer.style.backgroundPosition = "-293px -289px";

        //-----------------PLAYER STATS-----------------//
        //FLOAT

        let playerExperience = 0.0;
        let playerLife = 0.0;
        let playerEnergy = 0.00;


        //-----------------PLAYER MOVIMENT------------------//
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
        
            let block = document.getElementById("block");

            let rect1v1 = player.getBoundingClientRect();
            let rect2v2 = block.getBoundingClientRect();

            if(!(
                rect1v1.right < rect2v2.left ||
                rect1v1.left > rect2v2.right ||
                rect1v1.bottom < rect2v2.top ||
                rect1v1.top > rect2v2.bottom
            ))
            {
                controlButtons.innerHTML = `
                    <button id="breakerButton">Break Block</button>
                `;

                
                const breakerButton = document.getElementById("breakerButton");
                breakerButton.addEventListener("click", function ()
                {
                            block.style.animationName = "drop";
                            block.style.animationDuration = "infinite";
                            isDropped = true;
                });
            }
            else
            {
                const breakerButton = document.getElementById("breakerbutton");
                if(breakerButton)
                {
                    breakerButton.remove();
                }
            }

        }
    );
    
