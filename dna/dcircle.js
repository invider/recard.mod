function onSpawn(st) {
    this.x = 0
    this.y = 0
    this.r = 50
    this.a = 1
    this.h = .2
    this.s = .5
    this.l = .5
    augment(this, st)
    this.baseR = this.r
}

function draw() {
    const x = this.x, y = this.y, r = this.r

    alpha(this.a)
    lineWidth(3)
    stroke( hsl(this.h, this.s, this.l) )

    circle(x, y, r)
    circle(x, y, .6*r)

    alpha(1)

    if (this.name) {
        font('24px moon')
        baseTop()
        alignCenter()
        fill( hsl(this.h, this.s, this.l) )
        to: 75,
        text(this.name, this.x, this.y + this.baseR + 10)
    }
}
