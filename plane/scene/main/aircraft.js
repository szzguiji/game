class Aircraft extends GuaImage {
    constructor(game, name) {
        super(game, name)
        this.setup()
    }
    setup() {
        this.speed = 0
        this.cooldown = 0
        this.alive = true
    }
    fire() {
        if (this.cooldown == 0) {
            this.cooldown = config.fire_cooldown

            var bullet = Bullet.new(this.game)
            bullet.x = this.x + this.w / 2
            bullet.y = this.y
            this.scene.bullets.push(bullet)
            this.scene.addElement(bullet)
        }
    }
    collide(o) {
        return this.alive && o.alive && rectIntersects(this, o)
    }
    kill() {
        this.alive = false
        var ps = GuaParticleSystem.new(this.game)
        ps.resetPointion(this.x + this.w /2, this.y + this.h /2)
        this.scene.addElement(ps)
    }
    draw() {
        if (this.alive) {
            super.draw()
        }
    }
    update() {
        if (this.cooldown > 0) {
            this.cooldown -= 1
        }
    }
}
