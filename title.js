const titleanimation = title.getContext('2d');
let rAngle = 0;

function animatetitle() {
    titleanimation.clearRect(0, 0, title.width, title.height);
    
    titleanimation.font="30px Inter Tight";
    titleanimation.fillStyle="Black";

    titleanimation.save();
    titleanimation.translate(1,0)
    titleanimation.rotate(rAngle);
    titleanimation.fillText("Minna Saalasti",100,0);
    titleanimation.restore();

    rAngle+=0.001
    if(rAngle>1.8){
        rAngle=0;
    }


    requestAnimationFrame(animatetitle);
}

animatetitle();