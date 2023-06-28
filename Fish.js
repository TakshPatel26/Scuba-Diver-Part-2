AFRAME.registerComponent("fish",{
    init: function(){
        for (var i = 1;i<=10;i++){
            const id = 'fish${i}';
            const posX =(Math.random() * 100 + 50);      
            const posY = (Math.random() * 5 + 5);
            const posZ = (Math.random() * 60 + -40);

            const position = {x: posX,y:posY,z:posZ};
            this.createFish(id, position);
    }
},
createFish : function(id , position){
    console.log("hello")
    const island = document.querySelector("#island");
    var fishEl = document.createElement("a-entity");
    fishEl.setAttribute("id",id);
    fishEl.setAttribute("position",position);
    fishEl.setAttribute("gltf-model","assets/fish/scene.gltf");
    fishEl.setAttribute("scale",{x:500,y:500,z:500});
    fishEl.setAttribute("animation-mixer",{});
    islandEl.appendChild(fishEl);
}
});