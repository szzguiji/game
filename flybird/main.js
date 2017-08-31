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
        window.fps = Number(input.value)
    })
}
var __main = function() {
    var images = {
        'birds': 'img/birds.png',
        'sky': 'img/sky.png',
        'land': 'img/land.png',
        'pipe1': 'img/pipe1.png',
        'pipe2': 'img/pipe2.png',
    }

    var game = GuaGame.new(images, function(g) {
        var scene = sceneTitle.new(g)
        g.runWithScene(scene)
    })
    enableDebugMode(true, game)
}

__main()
