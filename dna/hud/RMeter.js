const df = {
    x: 0,
    y: 0,
    r: 50,
    start: .74 * PI,
    span: 1.5 * PI,
    value: 1,
    back: '#202020',
    color: '#f0a040',
    showLabel: true,

    showPulse: true,
    pulseStep: .2,
    pulseHeight: 30,
    pulseColor: '#404040',
    timer: 0,
}

class RMeter {

    constructor(st) {
        this.pulse = []
        augment(this, df)
        augment(this, st)
    }

    evo(dt) {
        this.timer += dt
        if (this.timer >= this.pulseStep) {
            this.timer -= this.pulseStep
            this.pulse.push(this.value)
            if (this.pulse.length > 2*this.r) {
                this.pulse.shift()
            }
        }
    }

    drawPulse() {
        lineWidth(2)
        stroke(this.pulseColor)

        const B = 10

        let i = 0
        let x = -this.r + B
        ctx.moveTo(x, 0)
        while(x < this.r - B) {
            const v = this.pulse[i++] || 0
            x++
            ctx.lineTo(x, v * this.pulseHeight
                            - .5 * this.pulseHeight)
        }
        ctx.stroke()
    }

    drawLabel() {
        if (!this.showLabel) return

        fill(this.color)
        font('24px moon')
        baseMiddle()
        alignCenter()
        text(round(this.value * 100) + '%', 0, 0)
    }

    draw() {
        save()
        translate(this.x, this.y)

        ctx.lineCap = 'round'
        lineWidth(14)
        stroke(this.back)
        arc(0, 0, this.r, this.start,
            this.start + this.span)

        lineWidth(6)
        stroke(this.color)
        this.value = limit(this.value, 0, 1)
        arc(0, 0, this.r, this.start,
            this.start + this.span * this.value)

        this.drawPulse()
        this.drawLabel()

        restore()
    }

    setValue(v) {
        this.value = limit(v, 0, 1)
    }
}
