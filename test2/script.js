let container = document.getElementById("container");

try
{
    container.addEventListener("load",
        function()
        {
            let playerC = document.getElementById("player");
            playerC.style.transition = "0.1s ease";
        }
    );

    if(!container)
    {
        console.error("container não encontrado");
    }
    //moviment player
    let player = document.getElementById("player")

    let leftB = document.getElementById("left");
    let rightB = document.getElementById("right");
    let upB = document.getElementById("up");
    let downB = document.getElementById("down");

    let playerX = 0;
    let playerY = 0;
    let coordinatesValue = (playerX + playerY);

    leftB.addEventListener("click",
        function()
        {
            if(playerX <= 0)
            {
                playerX = 0;
                player.style.marginLeft = 0 + "px";
            }else
            {
                playerX -= 10;
            }
            
            player.style.marginLeft = playerX + "px";
            
            let playerValues = window.getComputedStyle(player);
            
            let playerXn = parseInt(playerValues.getPropertyValue("marginLeft"));
            let playerYn = parseInt(playerValues.getPropertyValue("marginTop"));
            
            let coordinates = document.getElementById("coordinates");
            coordinates.innerHTML = "CSS coordinates margiLeft X: " + playerXn + " marginTop Y: " + playerYn;
            
            let playerValue = document.getElementById("playerValue");
            playerValue.innerHTML = "Variable coordinates X: " + playerX + " Y: " + playerY;
        }
    );

    rightB.addEventListener("click",
        function()
        {
            if(playerX >= 570)
            {
                playerX = 570;
                player.style.marginLeft = 570 + "px";
            }else
            {
                playerX += 10;
            }
            
            player.style.marginLeft = playerX + "px";
            
            let playerValues = window.getComputedStyle(player);
            
            let playerXn = parseInt(playerValues.getPropertyValue("marginLeft"));
            let playerYn = parseInt(playerValues.getPropertyValue("marginTop"));
            
            let coordinates = document.getElementById("coordinates");
            coordinates.innerHTML = "CSS coordinates margiLeft X: " + playerXn + " marginTop Y: " + playerYn;
            
            let playerValue = document.getElementById("playerValue");
            playerValue.innerHTML = "Variable coordinates X: " + playerX + " Y: " + playerY;
        }
    );

    upB.addEventListener("click",
        function()
        {
            if(playerY <= 0)
            {
                playerY = 0;
                player.style.marginTop = 0 + "px";
            }else
            {
                playerY -= 10;
            }
            
            player.style.marginTop = playerY + "px";
            
            let playerValues = window.getComputedStyle(player);
            
            let playerXn = parseInt(playerValues.getPropertyValue("marginLeft"));
            let playerYn = parseInt(playerValues.getPropertyValue("marginTop"));
            
            let coordinates = document.getElementById("coordinates");
            coordinates.innerHTML = "CSS coordinates margiLeft X: " + playerXn + " marginTop Y: " + playerYn;
            
            let playerValue = document.getElementById("playerValue");
            playerValue.innerHTML = "Variable coordinates X: " + playerX + " Y: " + playerY;
        }
    ); 

    downB.addEventListener("click",
        function()
        {
            if(playerY >= 470)
            {
                playerY = 470;
                player.style.marginTop = 470 + "px";
            }else
            {
                playerY += 10;
            }
            player.style.marginTop = playerY + "px";
            
            let playerValues = window.getComputedStyle(player);
            
            let playerXn = parseInt(playerValues.getPropertyValue("marginLeft"));
            let playerYn = parseInt(playerValues.getPropertyValue("marginTop"));
            
            let coordinates = document.getElementById("coordinates");
            coordinates.innerHTML = "CSS coordinates margiLeft X: " + playerXn + " marginTop Y: " + playerYn;
            
            let playerValue = document.getElementById("playerValue");
            playerValue.innerHTML = "Variable coordinates X: " + playerX + " Y: " + playerY;

            
            let object = document.getElementById("item");
            object.style.marginLeft = "100px";
            object.style.marginTop = "100px";
            object.style.position = "absolute";
        }
    );

    function collisionWithNoStyle(e1,e2,e3,e4)
    {
        if(e1 >= e3 && e2 >= e4)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    function collisonWithStyle(elem1,elem2)
    {
        let getterValues0 = window.getComputedStyle(elem1);
        let getterValues1 = window.getComputedStyle(elem2);

        let elem1X = parseInt(getterValues0.getPropertyValue("marginLeft"));
        let elem1Y = parseInt(getterValues0.getPropertyValue("marginTop"));

        let elem2X = parseInt(getterValues1.getPropertyValue("marginLeft"));
        let elem2Y = parseInt(getterValues1.getPropertyValue("marginTop"));

        if(elem1X >= elem2X && elem1Y >= elem2Y)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    rightB.addEventListener("click",
        function()
        {
            let debug = document.getElementById("debug");
            //A primeira função não funciona
            //A função sem estilo
            let object = document.getElementById("item");
            object.style.marginLeft = "100px";
            object.style.marginTop = "100px";
            object.style.position = "absolute";
        }
    );
}
catch(e)
{
    console.error("Erro: " + e);
}