//road.js
//https://github.com/gniziemazity/Self-driving-car/blob/main/2.%20Road%20definition/road.js
//https://www.youtube.com/watch?v=Rs_rAxEsAvI
//39:00
class Road{
constructor(x,width,laneCount=3){
    this.x=x;
    this.width=width;
    this.laneCount=laneCount;

    this.left=x-width/2;
    this.right=x+width/2;

    const infinity=1000000;
    this.top=-infinity;
    this.bottom=infinity;

 }//constructor

 draw(ctx){
    ctx.lineWidth=5;

    ctx.strokeStyle="white";
    
    for(let i=1;i<=this.laneCount-1;i++){

      //const x=lerp(
         // this.left,
         // this.right,
        //  i/this.laneCount
      //);
      /* 
      ctx.setLineDash([20,20]);
      ctx.beginPath();
      ctx.moveTo(x,this.top);
      ctx.lineTo(x,this.bottom);
      ctx.stroke();*/
  }






     //left line
    ctx.beginPath();
    ctx.moveTo(this.left,this.top);
    ctx.lineTo(this.left, this.bottom);
    ctx.stroke();
      //right line
    ctx.beginPath();
    ctx.moveTo(this.right,this.top);
    ctx.lineTo(this.right, this.bottom);
    ctx.stroke();
 }//draw
}//Road