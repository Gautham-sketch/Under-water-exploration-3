AFRAME.registerComponent("fishes",{
    init: function(){
        for(var i=1; i<=10; i++){
            var id = `fish${i}`
            var posX = Math.random()*50 + (-30)
            var posY = Math.random()*1 + (-1)
            var posZ = Math.random()*30 + (-10)
            var position = {x:posX, y:posY, z:posZ}
            this.createObstacles(id,position)
        }
    },

    createObstacles: function(id,position){
        var obstacleEntity = document.querySelector("#id1")
        var fishes = document.createElement("a-entity")
        fishes.setAttribute("id",id)
        fishes.setAttribute("position",position)
        fishes.setAttribute("scale",{x:0.0025, y:0.0025, z:0.0025})
        fishes.setAttribute("gltf-model","./assets/shiny_fish/scene.gltf")
        fishes.setAttribute("animation-mixer",{})
        fishes.setAttribute("static-body",{
            shape : 'sphere',
            sphereRadius : 4,
        })
        fishes.setAttribute("gameplay",{
            elementId : `#${id}`
        })
        
        obstacleEntity.appendChild(fishes)
    },
})