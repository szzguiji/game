class Bird extends Animations {
    constructor(game) {
        super(game)
        this.setup()

    }
    setup() {
        var game = this.game
        this.animations = {
            'idle': [],
            'fly': [],
        }
        this.texture = game.textureByName('birds')
        var w = this.texture.width
        var h = this.texture.height
        this.w = w / 3
        this.h = h
        // 飞行图片序列
        for (var i = 0; i < 3; i++) {
            var t = {
                'x': i * w / 3,
                'y': 0,
                'w': w / 3,
                'h': h,
            }
            this.addAnimations('fly', t)
        }
        // 静止图片序列
        var t = {
            'x': w / 3,
            'y': 0,
            'w': w / 3,
            'h': h,
        }
        this.addAnimations('idle', t)

        this.animationName = 'idle'
        this.frame = this.animations[this.animationName][0]
        this.frameIndex = 0
        this.frameCount = 3
        this.flipX = false
        // 旋转角度
        this.rotation = 0

        this.alive = true
        this.end = false
    }

    frames() {
        return this.animations[this.animationName]
    }

    update() {
        // 更新受力
        if (this.gy) {
            this.y = this.y + this.vy
            this.vy += this.gy * 0.2
            // 更新角度
            if (this.rotation < 45) {
                this.rotation += 5
            }
        }
        var h = 510
        if (this.y > h) {
            this.y = h
            this.end = true
        }
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.frame = this.frames()[this.frameIndex]
        }
    }

    draw() {
        var context = this.game.context
        context.save()

        var x = this.x + this.w / 2
        var y = this.y + this.h / 2

        context.translate(x, y)
        if (this.flipX) {
            context.scale(-1, 1)
        }
        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-x, -y)
        this.game.drawImageSlicing(this, this.frame)
        context.restore()
        
    }
    jump(keyStatus) {
        if (this.alive && keyStatus == 'down') {
            this.vy = -13
            this.rotation = -45
        }
    }
    move(x, keyStatus) {
        this.flipX = x < 0
        var animationName = {
            down: 'fly',
            up: 'idle',
        }

        this.x += x
        var name = animationName[keyStatus]
        this.changeAnimation(name)
    }
    changeAnimation(name) {
        this.animationName = name
    }
    collide(pipe) {
        var pipes = pipe.pipes
        var intersection = false
        for (var p of pipes) {
            if (rectIntersects(this, p)) {
                intersection = true
                break
            }
        }
        return intersection
    }
    kill() {
        this.alive = false
    }
    pass(pipe) {
        var pipes = pipe.pipes
        for (var i = 0; i < pipes.length; i+=2) {
            var p = pipes[i]
            if (!p.pass && this.x > (p.x + p.w)) {
                p.pass = true
                return true
            }
        }
        return false
    }
}
