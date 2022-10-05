//https://github.com/gniziemazity/Self-driving-car/blob/main/1.%20Car%20driving%20mechanics/controls.js
//16:30

class Controls{
    constructor(){
        this.forward=false;
        this.left=false;
        this.right=false;
        this.reverse=false;
      
        this.#addKeyboardListeners();
    }
    
    keydown(key){
        switch(key){
            case "ArrowLeft":
                this.left=true;
                break;
            case "ArrowRight":
                this.right=true;
                break;
            case "ArrowUp":
                this.forward=true;
                break;
            case "ArrowDown":
                this.reverse=true;
                break;
        }
    }

    keyup(key){
        switch(key){
            case "ArrowLeft":
                this.left=false;
                break;
            case "ArrowRight":
                this.right=false;
                break;
            case "ArrowUp":
                this.forward=false;
                break;
            case "ArrowDown":
                this.reverse=false;
                break;
        }
    }


    #addKeyboardListeners(){
        document.onkeydown=(event)=>{
            this.keydown(event.key) 
            console.table(this);

        }

        document.onkeyup=(event)=>{
            this.keyup(event.key) 
            console.table(this);
        }
    }// #addKeyboardListeners()
}//class  control