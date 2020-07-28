class BokehField {

    constructor() {
        this.bokehProfiles = {
            // maxSize, minSize, maxAlpha, minAlpha, fadeSpeed
            extraLarge: [700, 200, 20, 0, 0.2],
            large: [200, 86, 35, 10, 0.4],
            medium: [85, 6, 25, 10, 0.3],
            small: [7, 1, 90, 30, 0.5]
        }

        this.extraLargeBokeh = []
        for (let i = 0; i < 3; i++) { this.extraLargeBokeh.push(new Bokeh(...this.bokehProfiles["extraLarge"])) }

        this.largeBokeh = []
        for (let i = 0; i < 4; i++) { this.largeBokeh.push(new Bokeh(...this.bokehProfiles["large"])) }

        this.mediumBokeh = []
        for (let i = 0; i < 10; i++) { this.mediumBokeh.push(new Bokeh(...this.bokehProfiles["medium"])) }

        this.smallBokeh = []
        for (let i = 0; i < 15; i++) { this.smallBokeh.push(new Bokeh(...this.bokehProfiles["small"])) }
    }

    advanceBokehField(bokehArray, sizeName) {
        // Array to collect dead bokehs
        let markedForDeath = []

        bokehArray.forEach((bokeh, index, array) => {
            // Advance the fade and render.
            bokeh.fade()
            bokeh.display()

            // If the .dead property of the bokeh in question is true,
            // add its index to the dead bokeh array.
            // Then create a fresh bokeh to replace it.
            if (!!bokeh.dead) {
                markedForDeath.push(index)
                array.push(new Bokeh(...this.bokehProfiles[`${sizeName}`]))
            }
        })

        // Delete all dead bokehs.
        markedForDeath.forEach((i) => { delete bokehArray[i] })
    }

}