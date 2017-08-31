class SceneTitle extends guaScene{
	constructor(game) {
        super(game)
        this.setup()
        this.setupInput()
	}
    setup() {
        this.label = GuaLabel.new(this.game, '按k开始游戏')
        this.label.resetPointion(100, 150)
        this.addElement(this.label)
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
}
