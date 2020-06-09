function setup() {
    lab.spawn(dna.recard.Kinetix)

    lab.spawn(dna.target, {
        name: 'target',
        x: rx(.5),
        y: ry(.2),
    })
    lab.spawn(dna.dcircle, {
        name: 'dcircle',
        x: rx(.3),
        y: ry(.2),
    })
}
