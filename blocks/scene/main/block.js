class Block extends GuaImage{
    constructor(game, name) {
        super(game, name)
        this.alive = true
        this.lifes = 1
        this.score = 10
    }
    resetLifes(lifes) {
        if (lifes) {
            this.lifes = lifes
        }
    }

    kill() {
        var o = this
        o.lifes--
        if (o.lifes < 1) {
            o.alive = false
        }
    }

    collide(b) {
        var o = this
        return o.alive && rectIntersects(o, b)
    }
    draw() {
        if (this.alive) {
            super.draw()
        }
    }
}
