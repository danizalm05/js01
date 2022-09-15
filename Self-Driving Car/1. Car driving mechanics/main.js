//https://www.youtube.com/watch?v=Rs_rAxEsAvI
//https://github.com/gniziemazity/Self-driving-car/blob/main/1.%20Car%20driving%20mechanics/main.js
//14:00


const canvas=document.getElementById("myCanvas");
canvas.width=200;

const ctx = canvas.getContext("2d");

const car=new Car(100,100,30,50);

animate();

function animate(){
   // car.update();
    
    canvas.height=window.innerHeight;
    car.draw(ctx);
   // requestAnimationFrame(animate);
}