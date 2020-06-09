class Kinetix {
    constructor(st) {
        this.name = 'kinetix'
        this.keys = []

        augment(this, st)
    }

    push(key) {
        this.keys.push(key)
    }

    key(target, type, opt) {
        const proto = dna.kinetix.key[type]
        if (!proto) throw `unable to find transition [${type}]`

        const key = {}
        augment(key, proto)

        opt.target = target
        key.init(opt)
        this.push(key)
    }

    linear(target, opt) {
        this.key(target, 'linear', opt)
    }

    evo(dt) {
        for (let i = 0; i < this.keys.length; i++) {
            const key = this.keys[i]
            if (key.active) {
                key.evo(dt)
            }
        }
    }
}
