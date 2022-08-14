AFRAME.registerComponent("gameplay",{
    schema:{
        elementId : {type:"string", default:"coin1"}
    },

    update: function(){
        this.coinCollected(this.data.elementId)
    },

    coinCollected: function(elementId){
        const element = document.querySelector(elementId)
        element.addEventListener("collide",e =>{
            if(elementId.includes("#coin")){
                console.log(elementId + "collision")
            }
            else if(elementId.includes("#fish")){
                console.log(elementId + "collision")
            }
        })
    }
})