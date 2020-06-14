class Kinetix {
    constructor(st) {
        this.name = 'kinetix'
        this.keys = []

        augment(this, st)
    }

    push(key) {
        this.keys.push(key)
    }

    key(target, opt) {
        // TODO allow alternative key implementations
        const proto = dna.kinetix.key

        const key = {}
        augment(key, proto)

        opt.kinetix = this
        opt.target = target
        key.init(opt)
        this.push(key)
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
