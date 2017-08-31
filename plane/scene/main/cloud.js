class Cloud extends GuaImage {
    constructor(game) {
        super(game, 'cloud')
        this.setup()
    }

    setup() {
        this.x = randomBetween(-200, 200)
        this.y = -randomBetween(0, 200)
        this.speed = 1
    }

    update() {
        if (this.y >= 600) {
            this.setup()
        }
        this.y += this.speed
    }

    debug() {
        this.speed = config.cloud_speed
    }
}
