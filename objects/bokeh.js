class Bokeh {

    constructor(maxSize, minSize, maxAlpha, minAlpha, fadeSpeed) {
        this.x = Math.random() * (window.innerWidth - 0) + 0
        this.y = Math.random() * (window.innerHeight - 0) + 0
        this.size = Math.random() * (maxSize - minSize) + minSize
        this.fadeSpeed = fadeSpeed
        
        this.alphaMod = maxSize > 100 ? maxAlpha : maxAlpha - this.size
        this.alphaPeak = Math.random() * (this.alphaMod - minAlpha) + minAlpha
        this.alpha = 0
        this.fadingOut = false
        this.dead = false
    }

    fade() {
        if(!this.fadingOut && this.alpha < this.alphaPeak) {
            this.alpha += this.fadeSpeed
            this.fadingOut = this.alpha >= this.alphaPeak
            console.log(this.alpha)
        } else if (this.fadingOut && this.alpha > 0) {
            this.alpha += -this.fadeSpeed
            console.log(this.alpha)
        } else {
            this.dead = true
        }
    }

    display() {
        noStroke()
        fill(255, 255, 255, this.alpha)
        ellipse(this.x, this.y, this.size, this.size)
    }

}