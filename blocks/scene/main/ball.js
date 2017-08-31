class Ball extends GuaImage {
    constructor(game, name) {
        super(game, name)
        this.x = 100
        this.y = 200
        this.speedX = 5
        this.speedY = 5
        this.fired = false

    }
    fire() {
      this.fired = true
    }
    hasPoint(x, y) {
        var o = this
        if (x >= o.x && x <= o.x + o.w){
            if (y >= o.y && y <= o.y + o.h){
                return true
            }
        }
        return false
    }
    move() {
        var o = this
        if (o.fired) {
            if (o.x < 0 || o.x > 400) {
                o.speedX *= -1
            }
            if (o.y < 0 || o.y > 300) {
                o.speedY *= -1
            }
            // move
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    反弹() {
        var o = this
        o.speedY *= -1
    }
    update() {
        this.move()
    }
}
