//https://github.com/gniziemazity/Self-driving-car/blob/main/1.%20Car%20driving%20mechanics/car.js

class Car{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }

    draw(ctx){
       ctx.beginPath();
        ctx.rect(
            this.x-this.width/2,
            this.y-this.height/2,
            this.width,
            this.height
        );
        ctx.fill();

        ctx.restore();
    }//draw


}//Car