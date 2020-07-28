window.addEventListener('resize', () => {
    resizeCanvas(window.innerWidth, window.innerHeight);
    console.log("The window resized");
})

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noLoop();
}

function draw() {

    function bokehLayer (maxSize, minSize, maxAlpha, minAlpha) {
        let randomX = Math.random() * (window.innerWidth - 0) + 0
        let randomY = Math.random() * (window.innerHeight - 0) + 0
        let randomSize = Math.random() * (maxSize - minSize) + minSize
        let opacityModifyer = maxSize > 100 ? maxAlpha : maxAlpha - randomSize
        let opacity = Math.random() * (opacityModifyer - minAlpha) + minAlpha

        noStroke(); 
        fill(255, 255, 255, opacity)

        ellipse(randomX, randomY, randomSize, randomSize)
    }

    for (let i = 0; i < 50; i++) { bokehLayer(5, 1, 100, 90) }
    for (let i = 0; i < 100; i++) { bokehLayer(85, 6, 100, 10) }
    for (let i = 0; i < 20; i++) { bokehLayer(500, 200, 15, 0) }
    
}