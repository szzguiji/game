class Paddle extends GuaImage {
    constructor(game, name) {
        super(game, name)
        this.x = 100
        this.y = 250
        this.speed = 10
    }

    moveLeft() {
        var paddle = this
        paddle.x -= paddle.speed
    }
    moveRight() {
        var paddle = this
        paddle.x += paddle.speed
    }
    collide(ball) {
        if (rectIntersects(this, ball)) {
            return true
        }
        return false
    }
}
