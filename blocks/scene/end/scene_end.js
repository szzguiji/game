class SceneEnd extends guaScene {
	constructor(game) {
        super(game)
		this.setup()
		this.setupInput()
	}
	setup() {
		this.bg = GuaImage.new(this.game, 'bg')
		this.addElement(this.bg)

		this.label = GuaLabel.new(this.game, 'Game Over 得分：' + this.game.score)
        this.label.resetPointion(100, 150)
        this.addElement(this.label)

        this.label = GuaLabel.new(this.game, '按r进入标题场景')
        this.label.resetPointion(100, 180)
        this.addElement(this.label)
        
        // 清空关卡
        this.game.clearGameLeve()
	}
	setupInput() {
		var g = this.game
        g.registerAction('r', function(keyStatus){
            if (keyStatus == 'down') {
                var s = SceneTitle.new(g)
                g.replaceScene(s)
                g.score = 0
            }
        })
	}

}
