class GuaImage {
    constructor(game, name) {
        this.game = game
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height

    }

    static new(game, name) {
		return new this(game, name)
	}

    resetPointion(x, y) {
        this.x = x
        this.y = y
    }

    draw() {
        this.game.drawImage(this)
    }

    update() {

    }
}
