class SceneEdit extends guaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInput()

    }
    setup() {
        this.bg = GuaImage.new(this.game, 'bg')
        this.addElement(this.bg)
        this.blocks = []

        // 清空关卡
        this.game.clearGameLeve()

    }
    setupInput() {
        var self = this
        self.game.registerAction('k', function(keyStatus){
            if (keyStatus == 'down') {
                var s = Scene.new(self.game)
                self.game.replaceScene(s)
                self.game.score = 0
            }
        })
        self.game.canvas.addEventListener('mousedown', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            self.addblock(event)
        })
    }
    addblock(event) {
        var b = Block.new(this.game, 'block')
        var x = b.w * Math.floor(event.offsetX / b.w)
        var y = b.h * Math.floor(event.offsetY / b.h)
        b.x = x
        b.y = y

        this.addElement(b)
        this.game.addGameLeve(b)
    }
}
