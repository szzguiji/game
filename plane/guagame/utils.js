var log = console.log.bind(console)

var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

var rectIntersects = function(a, b) {
    var x1 = a.x + a.w / 2
    var y1 = a.y + a.h / 2
    var x2 = b.x + b.w / 2
    var y2 = b.y + b.h / 2
    if (Math.abs(x1 - x2) <= a.w / 2 + b.w / 2) {
        if (Math.abs(y1 - y2) <= a.h / 2 + b.h / 2) {
            return true
        }
    }
    return false
}

const randomBetween = function(start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}
