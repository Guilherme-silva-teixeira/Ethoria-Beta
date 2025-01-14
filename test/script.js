const container = document.getElementById("container");

try
{

    let cells = Array.from({
        length: 50
    },
    ()=> Array(50).fill(null))

    //create cells
    for (let i =0; i < 50 ; i++)
    {
        for (let j = 0; j < 50; j++)
        {
            const cell = document.createElement('div');
            cell.className = 'cell';
            container.appendChild(cell);
            cell.id = i + "-" + j;
        }
    }

    for (let k = 0 ; k < 50 ;k++)
    {
        for(let l = 0 ; l < 50; l++)
        {
            cells[k][l] = document.getElementById(k+"-"+l);//attribute id to cells
        }
    }

    //let test = document.getElementById("10-7");
    //test.style.backgroundColor = "black";

    let player = document.getElementById("player");//create player
    let playerX = 0;
    let playerY = 0;
    
    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");
    let downButton = document.getElementById("down");
    let upButton = document.getElementById("up");

    rightButton.addEventListener("click",
        function()
        {   
            if (playerX > 480)
            {
                playerX = 480;
            }
            playerX += 10;
            player.style.marginLeft = playerX + "px";
        }
    );

    leftButton.addEventListener("click",
        function()
        {
            if(playerX < 10)
            {
                playerX = 10;
            }
            playerX -= 10;
            player.style.marginLeft = playerX + "px";
        }
    );

    upButton.addEventListener("click",
        function()
        {
            if(playerY < 10)
            {
                playerY = 10;
            }
            playerY -= 10;
            player.style.marginTop = playerY + "px";
        }
    );

    downButton.addEventListener("click",
        function()
        {
            if(playerY > 560)
            {
                playerY = 560;
            }
            playerY += 10;
            player.style.marginTop = playerY + "px";
        }
    );

    let rects = Array.from({length:50}, () => Array(50).fill(null));

    for (let m = 0 ; m < 50 ; m++)
    {
        for (let n = 0 ; n < 50 ; n++)
        {
            let actualRect = document.getElementById(m + "-" + n);
            rects[m][n] = {
                marginLeft: parseInt(window.getComputedStyle(actualRect).getPropertyValue("marginLeft")),
                marginTop: parseInt(window.getComputedStyle(actualRect).getPropertyValue("marginTop")),
            };
        }
    }

    rightButton.addEventListener("click",
        function()
        {
            let playerStyle = window.getComputedStyle(player);
            let playerX = parseInt(playerStyle.getPropertyValue("margin-left"));
            let playerY = parseInt(playerStyle.getPropertyValue("margin-top"));
            let coordinates = document.getElementById("coordinates");
            coordinates.innerHTML = "X: " + playerX + " Y: "+ playerY;
        }
    );

    upButton.addEventListener("click",
        function()
        {
            let playerStyle = window.getComputedStyle(player);
            let playerX = parseInt(playerStyle.getPropertyValue("margin-left"));
            let playerY = parseInt(playerStyle.getPropertyValue("margin-top"));
            let coordinates = document.getElementById("coordinates");
            coordinates.innerHTML = "X: " + playerX + " Y: " + playerY;
        }
    );

    downButton.addEventListener("click",
        function()
        {
            let playerStyle = window.getComputedStyle(player);
            let playerX = parseInt(playerStyle.getPropertyValue("margin-left"));
            let playerY = parseInt(playerStyle.getPropertyValue("margin-top"));
            let coordinates = document.getElementById("coordinates");
            coordinates.innerHTML = "X: " + playerX + " Y: " + playerY;
        }
    )

    leftButton.addEventListener("click",
        function()
        {
            let playerStyle = window.getComputedStyle(player);
            let playerX = parseInt(playerStyle.getPropertyValue("margin-left"));
            let playerY = parseInt(playerStyle.getPropertyValue("margin-top"));
            let coordinates = document.getElementById("coordinates");
            coordinates.innerHTML = "X: " + playerX + " Y: " + playerY;
        }
    );

    let inventory = [
        "","","","",
        "","","","",
        "","","","",
        "","","",""
    ]

    let openInventoryBoxDiv = document.getElementById("invContainer");
    let inventoryDiv = document.getElementById("inventory");
    let openInventoryButton = document.getElementById("OPinventory");
    let cont2 = document.getElementById("container");
    openInventoryButton.addEventListener("click",
        function()
        {
            if(openInventoryBoxDiv.style.display === "none" || !openInventoryBoxDiv.style.display)
            {
                openInventoryBoxDiv.style.display = "flex";
                openInventoryBoxDiv.style.zIndex = 1;
                inventoryDiv.style.zIndex = 2;
                cont2.style.zIndex = 0;
            }
            else
            {
                openInventoryBoxDiv.style.display = "none";
                openInventoryBoxDiv.style.zIndex = 0;
            }
        }
    );

}
    catch(e)
{
    console.log(e);
}

if(!container)
{
    console.error("Container não encontrado");
}