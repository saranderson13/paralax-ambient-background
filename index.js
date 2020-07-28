window.addEventListener('resize', () => {
    resizeCanvas(window.innerWidth, window.innerHeight);
    console.log("The window resized");
})

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    field = new BokehField()
    frameRate(10)
}

function draw() {
    
    background(3, 10, 53)
    field.advanceExtraLarge()

}
