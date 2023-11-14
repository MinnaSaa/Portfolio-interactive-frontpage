//Heart and photo
const ctx3=heart.getContext('2d');

const heartImage=new Image();
heartImage.src="heart.png";

heartImage.onload=function(){
    ctx3.drawImage(heartImage,0,0,250,250);
}

//Audio

const heartsound=new Audio("heartbeat.wav");
heartsound.volume=0.5;


heart.addEventListener("mouseenter", mouseEnter);
heart.addEventListener("mouseleave", mouseLeave);


function mouseEnter() {
    heartsound.play();
    myImg.style.display = 'block';
}
function mouseLeave() {
    heartsound.pause();
    heartsound.currentTime = 0;
    myImg.style.display = 'none';
}