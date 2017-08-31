class Player extends Aircraft {
    constructor(game) {
        super(game, 'player')
        this.setup()
    }

    setup() {
        super.setup()
        this.speed = 10
        this.x = 100
        this.y = 450
        this.cooldown = 0
    }

    moveLeft() {
        this.x -= this.speed
    }
    moveRight() {
        this.x += this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
    fire() {
        if (this.cooldown == 0) {
            this.cooldown = config.fire_cooldown

            var bullet = PlayerBullet.new(this.game)
            bullet.x = this.x + this.w / 2
            bullet.y = this.y
            this.scene.bullets.push(bullet)
            this.scene.addElement(bullet)
        }
    }
    debug() {
        this.speed = config.player_speed
    }
}