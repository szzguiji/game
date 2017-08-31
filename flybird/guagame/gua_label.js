class GuaLabel {
	constructor(game, text) {
		this.game = game
		this.text = text
		this.x = 0
		this.y = 0
	}

	static new(game, text) {
		return new this(game, text)
	}

	resetPointion(x, y) {
		this.x = x
		this.y = y
	}
	resetText(text) {
		this.text = text
	}

	draw() {
		this.game.context.fillText(this.text, this.x, this.y)
	}

	update() {

	}
}
