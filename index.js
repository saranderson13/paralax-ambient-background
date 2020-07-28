window.addEventListener('resize', () => {
    resizeCanvas(window.innerWidth, window.innerHeight);
    console.log("The window resized");
})

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    bokeh = new Bokeh(85, 6, 100, 10, 1)
    frameRate(10)
}

function draw() {
    
    background(3, 10, 53)
    bokeh.fade()
    bokeh.display()

}
