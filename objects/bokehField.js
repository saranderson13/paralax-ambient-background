class BokehField {

    constructor() {
        this.extraLargeBokeh = []
        for (let i = 0; i < 3; i++) { this.extraLargeBokeh.push(new Bokeh(500, 200, 15, 0, 1)) }

        this.largeBokeh = []
        for (let i = 0; i < 10; i++) { this.largeBokeh.push(new Bokeh(200, 86, 40, 10, 2)) }

        this.mediumBokeh = []
        for (let i = 0; i < 20; i++) { this.mediumBokeh.push(new Bokeh(85, 6, 100, 10, 3)) }

        this.smallBokeh = []
        for (let i = 0; i < 15; i++) { this.smallBokeh.push(new Bokeh(5, 1, 100, 90, 4)) }
    }

    printBokehSets() {
        console.log(this.extraLargeBokeh)
        console.log(this.largeBokeh)
        console.log(this.mediumBokeh)
        console.log(this.smallBokeh)
    }

    advanceExtraLarge() {
        let markedForDeath = []
        this.extraLargeBokeh.forEach((bokeh, index, array) => {
            bokeh.fade()
            bokeh.display()
            if (!!bokeh.dead) {
                markedForDeath.push(index)
                array.push(new Bokeh(500, 200, 15, 0, 1))
            }
        })
        markedForDeath.forEach((i, index, array) => {
            delete this.extraLargeBokeh[i]
        })
    }

}