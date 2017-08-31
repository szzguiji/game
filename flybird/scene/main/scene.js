class Scene extends guaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInput()
    }

    setup() {
        var game = this.game
		this.bg = GuaImage.new(game, 'sky')
		this.addElement(this.bg)
        // 管子
		this.pipe = Pipes.new(game)
		this.addElement(this.pipe)
        // 文本
		this.label = GuaLabel.new(game, '得分：0')
		this.label.resetPointion(0, 520)
		this.addElement(this.label)
        // 循环移动地面
        this.grounds = Grounds.new(game)
		this.addElement(this.grounds)

		var b = Bird.new(game)
        b.resetPointion(100, 200)
        b.resetGravity(10)
		this.bird = b
		this.addElement(this.bird)

	}

	setupInput() {
		var self = this
		var b = this.bird
		self.game.registerAction('a', function(keyStatus){
	        b.move(-3, keyStatus)
	    })
		self.game.registerAction('d', function(keyStatus){
            b.move(3, keyStatus)
	    })
		self.game.registerAction('j', function(keyStatus){
            b.jump(keyStatus)
	    })
        self.game.registerAction('o', function(keyStatus){
            b.alive = false
	    })
	}
    update() {
        var g = this.game
        if (this.bird.end) {
            var s = SceneEnd.new(g)
            g.replaceScene(s)
        }
        if (this.bird.collide(this.pipe)) {
            log('相撞')
            this.bird.kill()
        }
        if (this.bird.pass(this.pipe)) {
            g.score += 1
            this.label.text = g.score
        }
        this.label.resetText('得分：' + g.score)
        super.update()
    }
}
