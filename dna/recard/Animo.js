class Animo {
    constructor(st) {
        this.name = 'animo'
        this.kinex = []

        augment(this, st)
    }

    translate(target, opt) {
        augment(opt, {
            dir: 1,
            timer: 0,
            target: target,
        })
        this.kinex.push(opt)
    }

    evo(dt) {
        for (let i = 0; i < this.kinex.length; i++) {
            const k = this.kinex[i]
            if (k.dead) continue

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
        }
    }
}
