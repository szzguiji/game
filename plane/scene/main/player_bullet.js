class PlayerBullet extends Bullet {
    constructor(game) {
        super(game, 'bullet0')
        this.setup()
    }

    setup() {
        super.setup()
        this.speed = config.bullet_speed
    }

    update() {
        if (this.alive) {
            this.y -= this.speed
        }
        if (this.y < 0) {
            this.alive = false
        }
    }

}
