//List of subjects eg. Animation 2D 3D Motion graphics
const ctx=listOfSubjectsAndBG.getContext('2d');

const minX=0; //startingpoint on left side
let p=0;
let move=0;
const text ="MOTION CAPTURE 2D ANIMATION MOTION GRAPHICS 3D GENERATIVE ART VFX ";

function background(){
    const startpoint=200;
    const moveX=startpoint+move;
    move=move+1;

    if(moveX<0){
        move=0;
    }
    ctx.clearRect(0,0,listOfSubjectsAndBG.width,listOfSubjectsAndBG.height);
    ctx.beginPath();
    ctx.moveTo(moveX+500,726);
    ctx.lineTo(moveX+Math.PI,726);
    ctx.lineWidth=2;
    ctx.strokeStyle="grey";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(moveX-2*Math.PI,745);
    ctx.lineTo(moveX*Math.PI+50,745);
    ctx.lineWidth=2;
    ctx.strokeStyle="grey";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(moveX+10,763);
    ctx.lineTo(moveX*Math.PI*Math.PI,763);
    ctx.lineWidth=2;
    ctx.strokeStyle="grey";
    ctx.stroke();
}

function animatetext(){
    const textWidth=ctx.measureText(text).width;
    const x=minX-textWidth*p;
   p=p+0.0001;

   if(x<=-textWidth){
       p=0;
   }

    //text bg
    ctx.beginPath();
    ctx.rect(0,460,1920,100);
    ctx.fillStyle="black";
    ctx.fill();

    //text   
   ctx.font="90px Inter Tight";
   ctx.textBaseline="middle";
   ctx.fillStyle="white";
   ctx.fillText(text,x,515);
   ctx.fillText(text,x+textWidth,515);

   requestAnimationFrame(() =>{
    background();
    animatetext();
   });
}

animatetext();