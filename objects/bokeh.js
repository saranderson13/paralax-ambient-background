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
    }

    randomDimensionSet() {
        const bokehDimensions = [
            [5, 1, 100, 90],
            [85, 6, 100, 10],
            [200, 86, 40, 10],
            [500, 200, 15, 0]
        ]

        return bokehDimensions[Math.floor(Math.random() * bokehDimensions.length)]
    }

    fade() {
        if(!this.fadingOut && this.alpha < this.alphaPeak) {
            this.alpha += this.fadeSpeed
            this.fadingOut = this.alpha >= this.alphaPeak
            console.log(this.alpha)
        } else if (this.fadingOut && this.alpha > 0) {
            this.alpha += -this.fadeSpeed
            console.log(this.alpha)
        }
    }

    display() {
        noStroke()
        fill(255, 255, 255, this.alpha)
        ellipse(this.x, this.y, this.size, this.size)
    }

}