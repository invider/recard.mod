function init() {
    this.x = rx(.1)
    this.y = ry(.6)
    this.r = 20
}

function draw() {
    lineWidth(2)
    stroke(.55, .5, .5)
    circle(this.x, this.y, this.r)
}
