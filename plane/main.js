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
        'player': 'img/player.png',
        'sky': 'img/sky.png',
        'cloud': 'img/cloud.png',
        'bullet0': 'img/bullet0.png',
        'bullet1': 'img/bullet1.png',
        'enemy0': 'img/enemy0.png',
        'enemy1': 'img/enemy1.png',
        'enemy2': 'img/enemy2.png',
        'enemy3': 'img/enemy3.png',
        'enemy4': 'img/enemy0.png',
        'fire': 'img/fire.png',
    }

    var game = GuaGame.new(images, function(g) {
        var scene = Scene.new(g)
        g.runWithScene(scene)
    })
    enableDebugMode(true, game)
}

__main()
