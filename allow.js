//allow sound button
const drawsphere=allow.getContext('2d');
const allowSound=allow.getContext('2d');


drawsphere.beginPath();
const x=55, y=55, r=50;
drawsphere.arc(x,y,r,0,Math.PI*2);
drawsphere.fillStyle="yellow";
drawsphere.fill();

allowSound.font="18px Segoe UI";
allowSound.textBaseline="middle";
allowSound.textAlign="center";
allowSound.fillStyle="black";
allowSound.fillText("ALLOW",x,y-10);
allowSound.fillText("SOUND",x,y+10);

let clicked=false;

document.getElementById("allow").addEventListener("mouseenter", mouseEnter);
document.getElementById("allow").addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
    if(!clicked){
    drawsphere.clearRect(0,0,allow.width,allow.height);
    drawsphere.beginPath();
    drawsphere.arc(x,y,r+5,0,Math.PI*2);
    drawsphere.fillStyle="orange";
    drawsphere.fill();

    allowSound.font="18px Segoe UI";
    allowSound.textBaseline="middle";
    allowSound.textAlign="center";
    allowSound.fillStyle="black";
    allowSound.fillText("ALLOW",x,y-10);
    allowSound.fillText("SOUND",x,y+10);
}
}
function mouseLeave() {
    if(!clicked){
    drawsphere.clearRect(0,0,allow.width,allow.height);
    drawsphere.beginPath();
    drawsphere.arc(x,y,r,0,Math.PI*2);
    drawsphere.fillStyle="yellow";
    drawsphere.fill();

    allowSound.font="18px Segoe UI";
    allowSound.textBaseline="middle";
    allowSound.textAlign="center";
    allowSound.fillStyle="black";
    allowSound.fillText("ALLOW",x,y-10);
    allowSound.fillText("SOUND",x,y+10);
}
}


document.getElementById("allow").addEventListener("click", onClick);

function onClick() {
    clicked=true
    drawsphere.clearRect(0,0,allow.width,allow.height);
    drawsphere.beginPath();
    drawsphere.arc(x,y,r/1.5,0,Math.PI*2);
    drawsphere.fillStyle="lightgrey";
    drawsphere.fill();

    allowSound.font="10px Segoe UI";
    allowSound.textBaseline="middle";
    allowSound.textAlign="center";
    allowSound.fillStyle="grey";
    allowSound.fillText("SOUND",x,y-5);
    allowSound.fillText("ALLOWED",x,y+5);
    
}
