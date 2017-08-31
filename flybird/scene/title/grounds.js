class Grounds {
	constructor(game) {
		this.game = game
		this.grounds = []
		for (var i = 0; i < 3; i++) {
        	var g = GuaImage.new(game, 'land')
			g.x = g.w * i
			g.y = 540

			this.grounds.push(g)
        }
		this.skipCount = 4
	}
	static new(game) {
		return new this(game)
	}
	draw() {
		for (var g of this.grounds) {
			g.draw()
		}
	}

	update() {
		var offset = -5
		this.skipCount--
		if (this.skipCount == 0) {
			this.skipCount = 4
			offset = 15
		}
		for (var g of this.grounds) {
			g.x += offset
        }
	}
}
