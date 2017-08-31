class Bullet extends GuaImage {
    constructor(game, name) {
        super(game, name)
        this.setup()
    }

    setup() {
        this.speed = 0
        this.alive = true
    }
    draw() {
        if (this.alive) {
            super.draw()
        }
    }
    collide(o) {
        return this.alive && o.alive && rectIntersects(this, o)
    }
    kill() {
        this.alive = false
    }

}