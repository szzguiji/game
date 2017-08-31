class SceneEnd extends guaScene {
	constructor(game) {
        super(game)
        this.setup()
	}

	setup() {
		var game = this.game

		// 背景
		this.bg = GuaImage.new(game, 'sky')
		this.addElement(this.bg)
        // 地面
        this.grounds = Grounds.new(game)
		this.addElement(this.grounds)
		// 文本
		this.titleLabel = GuaLabel.new(game, 'Game Over')
		this.titleLabel.resetPointion(140, 200)
		this.addElement(this.titleLabel)

		this.scoreLabel = GuaLabel.new(game, '得分：'+game.score)
		this.scoreLabel.resetPointion(145, 230)
		this.addElement(this.scoreLabel)
	}
	update() {
	}
}
