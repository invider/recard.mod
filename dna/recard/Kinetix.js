class Kinetix {
    constructor(st) {
        this.name = 'kinetix'
        this.keys = []

        augment(this, st)
    }

    key(target, type, opt) {
        const proto = dna.recard.key[type]
        if (!proto) throw `unable to find transition [${type}]`

        const key = {}
        augment(key, proto)

        opt.target = target
        key.init(opt)
        this.keys.push(key)
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
