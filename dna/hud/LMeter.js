const df = {
    x: 0,
    y: 0,
    w: 100,
    l: 16,

    value: 1,
    color: '#f0a040',
    showLabel: true,
}

class LMeter {

    constructor(st) {
        augment(this, df)
        augment(this, st)
    }

    evo(dt) {
    }

    drawLabel() {
        if (!this.showLabel) return

        fill(this.color)
        font('24px moon')
        baseTop()
        alignCenter()
        text(round(this.value * 100) + '%', this.w/2, this.l)
    }

    draw() {
        save()
        translate(this.x, this.y)

        ctx.lineCap = 'round'
        lineWidth(14)
        stroke('#202020')
        line(0, 0, this.w, 0)

        lineWidth(6)
        stroke(this.color)
        this.value = limit(this.value, 0, 1)
        line(0, 0, this.w * this.value, 0)

        this.drawLabel()

        restore()
    }

    setValue(v) {
        this.value = limit(v, 0, 1)
    }
}
