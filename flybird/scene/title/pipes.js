class Pipes {
	constructor(game) {
		this.game = game
		this.setup()
	}
	static new(game) {
		return new this(game)
	}
	setup() {
		var game = this.game
		this.pipes = []
		this.pipeSpace = 140
		this.distance = 200
		this.columsOfPice = 3
		for (var i = 0; i < this.columsOfPice; i++) {
			var p1 = GuaImage.new(game, 'pipe2')
			p1.x = 500 + i * 200
			p1.pass = false
			var p2 = GuaImage.new(game, 'pipe1')
			p2.x = p1.x
			this.resetPipesPosition(p1, p2)
			this.pipes.push(p1)
			this.pipes.push(p2)
		}
	}
	resetPipesPosition(p1, p2) {
		p1.y = randomBetween(-200, 0)
		p2.y = p1.y + p1.h + this.pipeSpace
		p1.pass = false
	}
	update() {
		// 更新管口距离
		this.pipeSpace = config.pipe_space.value
		for (var i = 0; i < this.pipes.length; i+=2) {
			var p1 = this.pipes[i]
			var p2 = this.pipes[i+1]
			p1.x -= 5
			p2.x -= 5
			if (p1.x < -100) {
				p1.x += this.distance * this.columsOfPice
				p2.x += this.distance * this.columsOfPice
				this.resetPipesPosition(p1, p2)
			}

		}
	}
	draw() {
		for (var p of this.pipes) {
			p.draw()
		}
	}
}
