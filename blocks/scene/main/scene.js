class Scene extends guaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInput()

    }
    setup() {

        this.bg = GuaImage.new(this.game, 'bg')
        this.addElement(this.bg)

        this.paddle = Paddle.new(this.game, 'paddle')
        this.addElement(this.paddle)

        this.ball = Ball.new(this.game, 'ball')
        this.addElement(this.ball)

        this.addBlocks()

        this.label = GuaLabel.new(this.game, '得分：0')
        this.label.resetPointion(0, 290)
        this.addElement(this.label)

    }
    setupInput() {
        var self = this
        self.game.registerAction('a', function(keyStatus){
            if (keyStatus == 'down') {
                self.paddle.moveLeft()
            }
        })
        self.game.registerAction('d', function(keyStatus){
            if (keyStatus == 'down') {
                self.paddle.moveRight()
            }
        })
        self.game.registerAction('f', function(keyStatus){
            if (keyStatus == 'down') {
                self.ball.fire()
            }
        })
        var enableDrag = false
        self.game.canvas.addEventListener('mousedown', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            if (self.ball.hasPoint(x, y)) {
                enableDrag = true
            }
        })
        self.game.canvas.addEventListener('mouseup', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            enableDrag = false
        })
        self.game.canvas.addEventListener('mousemove', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            if (enableDrag) {
                self.ball.x = x
                self.ball.y = y
            }
        })
    }
    addBlocks() {
        // 判断是否有编辑关卡
        if (this.game.gameLevel.length > 0) {
            this.blocks = this.game.gameLevel
        }else{
            this.blocks = loadLevel(1, this.game)
        }
        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i]
            this.addElement(block)
        }
    }
    update() {
        var s = this
        if (window.pause) {
            return
        }
        // 判断游戏结束
        if (s.ball.y > 300) {
            // 跳转到 游戏结束 的场景
            var end = SceneEnd.new(s.game)
            s.game.replaceScene(end)
        }
        // 判断砖与球相撞
        for (var b of this.blocks) {
            if (b.collide(this.ball)) {
                b.kill()
                // 球反弹
                this.ball.反弹()
                this.game.addScore(b.score)
            }
        }
        // 判断挡板与球相撞
        if (this.paddle.collide(this.ball)) {
            this.ball.反弹()
        }
        super.update()
    }
    draw() {
        var s = this
        this.label.resetText('得分：' + s.game.score)
        super.draw()
    }
}
