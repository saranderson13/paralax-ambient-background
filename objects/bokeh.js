class Bokeh {

    constructor(maxSize, minSize, maxAlpha, minAlpha, fadeSpeed) {
        // Set position - random X, random Y.
        this.x = Math.random() * (window.innerWidth - 0) + 0
        this.y = Math.random() * (window.innerHeight - 0) + 0

        // Set size, to be used for both X and Y bc I want circles.
        this.size = Math.random() * (maxSize - minSize) + minSize

        // Fadespeed set directly.
        this.fadeSpeed = fadeSpeed

        // Randomizes the peak opacity for a given size set.
        // Peak opacity will be somewhere between the maxAlpha and minAlpha.
        this.alphaPeak = Math.random() * (maxAlpha - minAlpha) + minAlpha

        // Set starting alpha to 0. It should always fade to the peak from 0.
        this.alpha = 0.0

        // Lifecycle booleans.
        // this.fadingOut turns true after the alpha peak has been reached.
        // this.dead turns true after the alpha returns to (or below) zero.
        this.fadingOut = false
        this.dead = false
    }

    fade() {
        if(!this.fadingOut && this.alpha < this.alphaPeak) {
            // Increase the opacity by the fadespeed.
            this.alpha += this.fadeSpeed

            // Once the alpha is higher than the alphaPeak, set fadingOut to true.
            this.fadingOut = this.alpha >= this.alphaPeak

        } else if (this.fadingOut && this.alpha > 0) {
            // Decrease the fade speed once the bokeh is fading out.
            this.alpha += -this.fadeSpeed

        } else {
            // This will let the BokehField know to delete the bokeh, 
            // and create a new one in its place.
            this.dead = true
        }
    }

    display() {
        noStroke()
        fill(255, 255, 255, this.alpha)
        
        // Shadow makes it look like the center of the bokeh is the brightest.
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowBlur = this.size;
        drawingContext.shadowColor = 'white';
        
        ellipse(this.x, this.y, this.size, this.size)
    }

}