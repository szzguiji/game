class guaScene {
	constructor(game) {
        this.game = game
		this.elements = []
		this.debugModeEnabled = true
	}

	static new(game) {
		return new this(game)
	}

	addElement(element) {
		element.scene = this
		this.elements.push(element)
	}
	deleteElement(element) {
		for (var i = 0; i < this.elements.length; i++) {
			if (element == this.elements[i]) {
				this.elements.splice(i, 1)	
			}
		}
	}

	update() {
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
			e.update()
            if (this.debugModeEnabled) {
                e.debug && e.debug()
            }
        }
    }

    draw() {
		for (var e of this.elements) {
			e.draw()
        }
    }
}
