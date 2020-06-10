const easing = {

    saw: function(v) {
        // detect next step
        const fv = floor(v)
        if (fv > this.mark) this.step()
        this.mark = fv

        return v % 1
    },

    triangle: function(v) {
        // detect next step
        const m = floor(v)
        if (m > this.mark) this.step()
        this.mark = m

        const w = v % 1
        const odd = (v|0) % 2 === 1
        return odd? 1-w : w
    },

    sin: function(t) {
        // detect next step
        const m = floor(t)
        if (m > this.mark) this.step()
        this.mark = m

        return abs(sin(t * HALF_PI))
    },

    quad: function(v) {
        // detect next step
        const m = floor(v)
        if (m > this.mark) this.step()
        this.mark = m

        const w = v % 1
        const odd = (v|0) % 2 === 1
        return odd? 1-w*w : w*w
    },

    cubic: function(v) {

        // detect next step
        const m = floor(v)
        if (m > this.mark) this.step()
        this.mark = m

        const w = v % 1
        const odd = (v|0) % 2 === 1
        return odd? 1-w*w*w : w*w*w
    },

    quart: function(v) {
        // detect next step
        const m = floor(v)
        if (m > this.mark) this.step()
        this.mark = m

        const w = v % 1
        const odd = (v|0) % 2 === 1
        return odd? 1-w*w*w*w : w*w*w*w
    },

    elastic: function(t) {
        t = t % HALF_PI
        return (.04 - .04/t) * Math.sin(25*t) + 1;
        /*
        return ((t -= .5) < 0 ?
            (.02 + .01/t) * sin(50 * t)
            : (.02 - .01/t) * sin(50 * t) + 1
        );
        */
    },
}
