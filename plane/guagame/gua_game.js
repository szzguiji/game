// 瓜

class GuaGame {

    constructor(images, runCallback) {
        window.fps = 30
        this.images = images
        this.runCallback = runCallback

        this.actions = {}
        this.keydowns = {}
        this.scene = null
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')

        // events
        var self = this
        window.addEventListener('keydown', event => {
            this.keydowns[event.key] = 'down'
        })
        window.addEventListener('keyup', function(event){
            self.keydowns[event.key] = 'up'
        })

        this.init()

    }

    static new(images, runCallback) {
        return new this(images, runCallback)
    }
    init() {
        var g = this
        var loads = []
        var names = Object.keys(g.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function() {
                g.images[name] = img
                loads.push(1)
                if (loads.length == names.length) {
                    g.run()
                }
            }
        }
    }

    // draw
    drawImage(guaImage) {
        this.context.drawImage(guaImage.texture, guaImage.x, guaImage.y)
    }
    // draw slicing
    drawImageSlicing(guaImage, frame) {
        this.context.drawImage(guaImage.texture, frame.x, frame.y, frame.w, frame.h, guaImage.x, guaImage.y, frame.w, frame.h)
    }

    //
    registerAction(key, callback) {
        this.actions[key] = callback
    }
    // timer
    runloop() {
        var g = this
        // events
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            var status = g.keydowns[key]
            if(status == 'down') {
                // 如果按键被按下, 调用注册的 action
                g.actions[key]('down')
            } else if (status == 'up') {
                g.actions[key]('up')
            }
            // g.keydowns[key] = null
        }
        // update
        g.scene.update()
        // clear
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        // draw
        g.scene.draw()
        // next run loop
        setTimeout(function() {
            g.runloop()
        }, 1000/window.fps)
    }
    replaceScene(scene) {
        this.scene = scene
    }
    runWithScene(scene) {
        var g = this
        g.scene = scene
        setTimeout(function() {
            g.runloop()
        }, 1000/window.fps)
    }

    textureByName(name) {
        var img = this.images[name]
        return img
    }
    run() {
        this.runCallback(this)

    }
}
