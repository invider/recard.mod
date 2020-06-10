/*
 * A key is the main kinematix concept.
 *
 * A key keeps animation going.
 *
 * The most generic key has 4 key elements:
 *  * tick(dt) - keep the timer going
 *  * easing() - calculate current easing value
 *  * map(val) - map easing value to property value
 *  * apply(val) - apply updated value to the property
 */

const df = {
    timer: 0,
    mark: 0,
    period: 1,
}

module.exports = {

    init: function(st) {
        augment(this, df)

        this.easing = dna.kinetix.easing.triangle
        if (st) {
            if (!st.prev) this.activate()
            if (st.shape) {
                const easing = dna.kinetix.easing[st.shape]
                if (!easing) {
                    throw `unable to find shape [${st.shape}]`
                }
                this.easing = easing
            }
        }

        augment(this, st)
    },

    activate() {
        this.active = true
        if (this.onActivate) this.onActivate()
    },

    tick(dt) {
        this.timer += dt
    },

    step() {
        if (!this.loop) this.kill()
    },

    // map easing value on property value
    map: function(val) {
        return this.from + (this.to - this.from) * val
    },

    apply: function(val) {
        this.target[this.key] = val
    },

    evo: function(dt) {
        this.tick(dt)

        const t = this.timer / this.period
        this.apply( this.map( this.easing(t)))
    },

    kill() {
        this.active = false
        this.dead = true

        // TODO enable next
    },
}
