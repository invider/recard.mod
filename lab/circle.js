function init() {
    this.x = rx(.5)
    this.y = ry(.5)
    this.r = 75
}

function draw() {
    lineWidth(2)
    stroke(.55, .5, .5)
    circle(this.x, this.y, this.r)
}
