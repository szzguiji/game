class Enemy extends Aircraft {
    constructor(game) {
        var type  = randomBetween(0, 4)
        var name = 'enemy' + type
        super(game, name)
        this.setup()
    }

    setup() {
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 200)
        this.speed = randomBetween(2, 4)
        this.alive = true
        this.cooldown = 100
    }
    fire() {
        if (this.cooldown == 0 && this.alive) {
            this.cooldown = 100

            var bullet = EnemyBullet.new(this.game)
            bullet.x = this.x + this.w / 2
            bullet.y = this.y + this.h
            bullet.speed = this.speed + 1
            this.scene.enemyBullets.push(bullet)
            this.scene.addElement(bullet)
        }
    }
    resetLife() {
        this.alive = true
        this.y = -randomBetween(200, 400)
    }

    update() {
        if (this.alive) {
            this.y += this.speed
        }
        if (this.y > 700) {
            this.alive = false
        }
        if (this.cooldown > 0) {
            this.cooldown -= 1
        }else if (this.cooldown == 0 && this.y > 0) {
            this.fire()
        }

    }
    draw() {
        if (this.alive) {
            super.draw()
        }
    }
    collide(o) {
        var e = this
        return e.alive && o.alive && rectIntersects(e, o)
    }
    kill() {
        this.alive = false
        var ps = GuaParticleSystem.new(this.game)
        ps.resetPointion(this.x + this.w /2, this.y + this.h /2)
        this.scene.addElement(ps)

    }

}
