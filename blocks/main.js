var loadLevel = function(n, game) {
    blocks = []
    level = levels[n-1]
    for (var i = 0; i < level.length; i++) {
        p = level[i]
        block = Block.new(game, 'block')
        block.resetPointion(p[0], p[1])
        block.resetLifes(p[2])
        blocks.push(block)
    }
    return blocks
}

var blocks = []
var enableDebugMode = function(enable, game) {
    if (!enable) {
        return
    }
    window.paused = false
    window.move = false
    document.addEventListener('keydown', function(event) {
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.pause = !window.pause
        } else if ('1234567'.includes(k)) {
            blocks = loadLevel(Number(k), game)
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}
var __main = function() {
    var images = {
        'paddle': 'img/paddle.png',
        'ball': 'img/ball.png',
        'block': 'img/block.png',
        'bg': 'img/bg.png',
    }

    var game = GuaGame.new(images, function(g) {
        var scene = SceneTitle.new(g)
        g.runWithScene(scene)
    })
    enableDebugMode(true, game)
}

__main()
