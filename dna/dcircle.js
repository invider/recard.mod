function onSpawn(st) {
    this.x = 0
    this.y = 0
    this.r = 50
    this.a = 1
    this.h = .2
    this.s = .5
    this.l = .5
    augment(this, st)
}

function draw() {
    const x = this.x, y = this.y, r = this.r

    alpha(this.a)
    lineWidth(3)
    stroke( hsl(this.h, this.s, this.l) )

    circle(x, y, r)
    circle(x, y, .6*r)

    alpha(1)
}

