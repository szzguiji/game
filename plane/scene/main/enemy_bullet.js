class EnemyBullet extends Bullet {
    constructor(game) {
        super(game, 'bullet1')
        this.setup()
    }

    setup() {
        super.setup()
        this.speed = 3
        this.score = randomBetween(20, 40)
    }

    update() {
        if (this.alive) {
            this.y += this.speed
        }
        if (this.y > 600) {
            this.alive = false
        }
    }

}
