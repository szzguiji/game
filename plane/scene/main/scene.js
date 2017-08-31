class Scene extends guaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInput()

    }

    setup() {

        this.numberOfEnemies = 10
        this.bg = GuaImage.new(this.game, 'sky')
        this.cloud = Cloud.new(this.game)
        this.player = Player.new(this.game)
        this.bullets = []
        this.enemyBullets = []

        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)

        this.addEnemies()

    }

    setupInput() {
        var s = this
        var g = this.game
        g.registerAction('a', function(keyStatus){
            if (keyStatus == 'down') {
                s.player.moveLeft()
            }
        })
        g.registerAction('d', function(keyStatus){
            if (keyStatus == 'down') {
                s.player.moveRight()
            }
        })
        g.registerAction('w', function(keyStatus){
            if (keyStatus == 'down') {
                s.player.moveUp()
            }
        })
        g.registerAction('s', function(keyStatus){
            if (keyStatus == 'down') {
                s.player.moveDown()
            }
        })
        g.registerAction('f', function(keyStatus){
            if (keyStatus == 'down') {
                s.player.fire()
            }
        })
    }
    addEnemies() {
        var es = []
        for (var i = 0; i < this.numberOfEnemies; i++) {
            var e = Enemy.new(this.game)
			es.push(e)
            this.addElement(e)
        }
        this.enemies = es
    }
    update() {
        super.update()
        // 判断player和敌机碰撞
        for (var e of this.enemies) {
            if (this.player.collide(e)) {
                this.player.kill()
                e.kill()
            }
        }
        // 判断player和敌机子弹碰撞
        for (var b of this.enemyBullets) {
            if (this.player.collide(b)) {
                this.player.kill()
                b.kill()
            }
        }
        // 判断子弹和敌机碰撞
        for (var e of this.enemies) {
            for (var b of this.bullets) {
                if (e.collide(b)) {
                    e.kill()
                    b.kill()
                }
            }
        }
        // 判断子弹和敌机子弹碰撞
        for (var b of this.bullets) {
            for (var eb of this.enemyBullets) {
                if (b.collide(eb)) {
                    b.kill()
                    eb.kill()
                }
            }
        }
        for (var e of this.enemies) {
            if (!e.alive) {
                e.resetLife()
            }
        }


    }
}
