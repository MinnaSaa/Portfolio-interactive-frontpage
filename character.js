const ctx2 = character.getContext('2d');

const characterImage = new Image();
characterImage.src = "basemesh.png";

const eyeMinX = 262;
const eyeMinY = 338;
const eyeRangeX = 10;
const eyeRangeY = 10;
let rollX = 0;
let rollY = 0;

const imagePaths = [
    'Portfolio-1.png',
    'Portfolio-2.png',
    'Portfolio-3.png',
    'Portfolio-4.png',
    'Portfolio-5.png',
    'Portfolio-6.png',
    'Portfolio-7.png',
    'Portfolio-8.png',
    'Portfolio-9.png',
    'Portfolio-10.png',
    'Portfolio-11.png',
    'Portfolio-12.png',
    'Portfolio-13.png',
    'Portfolio-14.png',
];

const images = [];
let imageIndex = 0;
let framerate = 12;
let animationId;

function loadImages() {
    for (let i = 0; i < imagePaths.length; i++) {
        const imgsequence = new Image();
        imgsequence.src = imagePaths[i];
        images.push(imgsequence);
    }
}

character.addEventListener("mousemove", function (info) {
    rollX = info.offsetX / character.width - 0.25;
    rollY = info.offsetY / character.height - 0.3;
});

function animate() {
    ctx2.clearRect(0, 0, character.width, character.height);

    // Draw character
    ctx2.drawImage(characterImage, 0, 200, 1000, 600);
    const x = eyeMinX + eyeRangeX * rollX;
    const y = eyeMinY + eyeRangeY * rollY;

    // Eye backgrounds
    ctx2.beginPath();
    ctx2.arc(262, 332, 18, 0.6, 2.55);
    ctx2.arc(262, 347, 18, 3.4, -0.3);
    ctx2.fillStyle = 'white';
    ctx2.fill();

    ctx2.beginPath();
    ctx2.arc(332, 334, 18, 0.6, 2.55);
    ctx2.arc(332, 349, 18, 3.4, -0.3);
    ctx2.fillStyle = 'white';
    ctx2.fill();

    //Eye pupils
    ctx2.beginPath();
    ctx2.arc(x, y, 7, 0, Math.PI * 2);
    ctx2.fillStyle = 'black';
    ctx2.fill();

    ctx2.beginPath();
    ctx2.arc(x + 70, y + 2, 7, 0, Math.PI * 2);
    ctx2.fillStyle = 'black';
    ctx2.fill();

    // Draw image sequence
    ctx2.drawImage(images[imageIndex], 700, 265, 800, 300);
    imageIndex = (imageIndex + 1) % images.length;

    animationId = setTimeout(() => {
        requestAnimationFrame(animate);
    }, 1000 / framerate);
}

function stopAnimation() {
    clearTimeout(animationId);
}

window.addEventListener("load", () => {
    loadImages();
    animate();
});