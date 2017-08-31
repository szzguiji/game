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

        this.labelEdit = GuaLabel.new(this.game, '按m进入关卡编辑器')
        this.labelEdit.resetPointion(100, 180)
        this.addElement(this.labelEdit)

        // 清空关卡
        this.game.clearGameLeve()
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
        g.registerAction('m', function(keyStatus){
            if (keyStatus == 'down') {
                var s = SceneEdit.new(g)
                g.replaceScene(s)
            }
        })
    }
}
