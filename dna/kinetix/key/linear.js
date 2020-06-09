/*
 * A key is the main kinematix concept.
 *
 * A key keeps animation going.
 *
 * The most generic key has 4 key elements:
 *  * tick(dt) - keep the timer going
 *  * val() - calculate current easing value
 *  * map(val) - map easing value to property value
 *  * apply(val) - apply updated value to the property
 */
const linear = {

    init: function(st) {
        this.dir = 1
        this.timer = 0
        this.mark = 0
        if (st && !st.prev) this.activate()
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

    // easing function to map timer to 0..1 value
    // responsible for key deactivation and transition
    val: function() {
        // saw
        const v = this.timer / this.time

        // detect next step
        const fv = floor(v)
        if (fv > this.mark) this.step()
        this.mark = fv

        const w = v % 1
        const odd = (v|0) % 2 === 1
        return odd? 1-w : w
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

        this.apply( this.map( this.val()))
    },

    kill() {
        this.active = false
        this.dead = true

        // TODO enable next
    },
}
