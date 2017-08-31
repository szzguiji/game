class sceneTitle extends guaScene{
	constructor(game) {
        super(game)
		this.setup()
		this.setupInput()

	}
	setup() {
		var game = this.game

		// 背景
		this.bg = GuaImage.new(game, 'sky')
		this.addElement(this.bg)
        // 循环移动地面
        this.grounds = Grounds.new(game)
		this.addElement(this.grounds)
		// 文本
		this.label = GuaLabel.new(game, '按k开始游戏')
		this.label.resetPointion(100, 200)
		this.addElement(this.label)

		var b = Bird.new(game)
		b.resetPointion(100, 200)
		this.bird = b
		this.addElement(this.bird)
	}
	setupInput() {
		var g = this.game
		g.registerAction('k', function(keyStatus){
			if (keyStatus == 'down') {
				var s = Scene.new(g)
	            g.replaceScene(s)
				g.score = 0
			}
	    })
	}
	update() {
		super.update()
		var b = this.bird
		b.move(0, 'down')
	}
}
