class BokehField {

    constructor() {
        this.bokehProfiles = {
            extraLarge: [700, 200, 20, 0, 1],
            large: [200, 86, 40, 10, 2],
            medium: [85, 6, 50, 10, 1],
            small: [5, 1, 80, 50, 3]
        }

        this.extraLargeBokeh = []
        for (let i = 0; i < 3; i++) { this.extraLargeBokeh.push(new Bokeh(...this.bokehProfiles["extraLarge"])) }

        this.largeBokeh = []
        for (let i = 0; i < 10; i++) { this.largeBokeh.push(new Bokeh(...this.bokehProfiles["large"])) }

        this.mediumBokeh = []
        for (let i = 0; i < 20; i++) { this.mediumBokeh.push(new Bokeh(...this.bokehProfiles["medium"])) }

        this.smallBokeh = []
        for (let i = 0; i < 15; i++) { this.smallBokeh.push(new Bokeh(...this.bokehProfiles["small"])) }
    }

    advanceBokehField(bokehArray, sizeName) {
        let markedForDeath = []
        bokehArray.forEach((bokeh, index, array) => {
            bokeh.fade()
            bokeh.display()
            if (!!bokeh.dead) {
                markedForDeath.push(index)
                array.push(new Bokeh(...this.bokehProfiles[`${sizeName}`]))
            }
        })
        markedForDeath.forEach((i) => { delete bokehArray[i] })
    }

}