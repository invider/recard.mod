const easing = {

    saw: function() {
        const v = this.timer / this.period

        // detect next step
        const fv = floor(v)
        if (fv > this.mark) this.step()
        this.mark = fv

        return v % 1
    },

    triangle: function() {
        const v = this.timer / this.period

        // detect next step
        const m = floor(v)
        if (m > this.mark) this.step()
        this.mark = m

        const w = v % 1
        const odd = (v|0) % 2 === 1
        return odd? 1-w : w
    },

    sin: function() {
        const t = (this.timer/this.period)

        // detect next step
        const m = floor(t)
        if (m > this.mark) this.step()
        this.mark = m

        return abs(sin(t * HALF_PI))
    },

}
