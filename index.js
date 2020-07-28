window.addEventListener('resize', () => {
    resizeCanvas(window.innerWidth, window.innerHeight);
})

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    field = new BokehField()
    frameRate(30)
}

function draw() {
    
    background(3, 10, 53)

    field.advanceBokehField(field.extraLargeBokeh, "extraLarge")
    field.advanceBokehField(field.largeBokeh, "large")
    field.advanceBokehField(field.mediumBokeh, "medium")
    field.advanceBokehField(field.smallBokeh, "small")
    
}
