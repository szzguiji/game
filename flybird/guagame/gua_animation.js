class Animations {
    constructor(game) {
        this.game = game
        this.animations = {}
        this.x = 0
        this.y = 0
        this.gy = 0
        this.vy = 0
    }
    static new(game) {
        return new this(game)
    }

    resetPointion(x, y) {
        this.x = x
        this.y = y
    }
    resetGravity(gy) {
        this.gy = gy
    }
    addAnimations(key, texture) {
        this.animations[key].push(texture)
    }
    update() {
    }

    draw() {
    }
}
