AFRAME.registerComponent("coins",{
    init: function(){
        for(var i=1; i<=10; i++){
            var id = `coin${i}`
            var posX = Math.random()*50 + (-30)
            var posY = Math.random()*1 + (-1)
            var posZ = Math.random()*30 + (-10)
            var position = {x:posX, y:posY, z:posZ}
            this.createCoins(id,position)
        }
    },

    createCoins: function(id,position){
        var treasureEntity = document.querySelector("#id1")
        var coins = document.createElement("a-entity")
        coins.setAttribute("id",id)
        coins.setAttribute("position",position)
        coins.setAttribute("material","color","yellow")
        coins.setAttribute("geometry",{primitive:"circle",radius:0.25})
        coins.setAttribute("animation",{
            property : "rotation",
            to : "0 360 0",
            loop : "true",
            dur : 1000
        });
        coins.setAttribute("static-body",{
            shape : 'sphere',
            sphereRadius : 4,
        })
        coins.setAttribute("gameplay",{
            elementId : `#${id}`
        })
        
        treasureEntity.appendChild(coins)
    }
})