const container = document.getElementById("container");
try
{
    const player = document.getElementById("player");

    let playerX = 0;
    let playerY = 0;

    document.addEventListener("keydown", (e) => {
            switch(e.key)
            {
                case 'ArrowDown':
                    playerY += 10;
                    break;
                case 'ArrowUp':
                    playerY -= 10;
                    break;
                case 'ArrowLeft':
                    playerX -= 10;
                    break;
                case 'ArrowRight':
                    playerX += 10;
                    break;
            }

            player.style.top = `${playerY}px`;
            player.style.left = `${playerX}px`;  
            
            let debug = document.getElementById("debug");
            let coordinates = document.getElementById("coordinates");
            coordinates.innerHTML = `Debug\n X: ${playerX} Y: ${playerY}`;      
        }
    );

    let invContent = [4][4];

    let invButton = document.getElementById("invButton").addEventListener("click",
        function()
        {
            let inventory = document.getElementById("inv");
            inventory.style.position = "absolute";
            inventory.style.border = "1px solid #0f0";
            inventory.style.height = "160px";
            inventory.style.width = "160px";
            inventory.style.zIndex = 3;
            
        }
    );

    document.addEventListener("load", (e) => {
            if(e == true)
            {
            }
        }
    );
}catch(e)
{
    console.error("erro: "+ e);
}