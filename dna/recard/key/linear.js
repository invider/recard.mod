const linear = {

    init: function(st) {
        this.dir = 1
        this.timer = 0
        this.active = true
        augment(this, st)
    },

    val: function() {
    },

    evo: function(dt) {
        const k = this

        k.timer += dt * k.dir

        if (k.dir > 0) {
            if (k.timer > k.time) {
                if (k.loop) {
                    k.timer = k.time
                    k.dir = -1
                } else {
                    k.dead = true
                }
            }
        } else {
            if (k.timer < 0) {
                if (k.loop) {
                    k.timer = 0
                    k.dir = 1
                } else {
                    k.dead = true
                }
            }
        }

        const pos = k.timer/k.time
        k.target[k.key] = k.from + (k.to - k.from) * pos
    },
}
