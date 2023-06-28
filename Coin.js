// Registering component in Coin.js

AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        //id
        const id = `coin${i}`;
  
        //position variables     
        const posX =(Math.random() * 100 + 50);      
        const posY = (Math.random() * 5 + 5);
        const posZ = (Math.random() * 60 + -40);
  
        const position = { x: posX, y: posY, z: posZ };
        console.log(position)
        //call the function
        this.createCoins(id, position);
      }
    } ,
  
    createCoins: function(id, position) { 
      
      const island = document.querySelector("#island");
  
      var coinEl = document.createElement("a-entity");
  
      coinEl.setAttribute("id",id);
      coinEl.setAttribute("position",position);
      
      coinEl.setAttribute("material","color","#ff9100");
      
      coinEl.setAttribute("geometry",{ primitive: "circle",radius: 1 });   
  
      islandEl.appendChild(coinEl);
    }
  });