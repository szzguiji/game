class SceneEnd extends guaScene {
	constructor(game) {
        super(game)
		this.setup()
	}
	setup() {
		this.label = GuaLabel.new(this.game, 'Game Over 得分：' + this.game.score)
        this.label.resetPointion(100, 150)
        this.addElement(this.label)
	}

}
