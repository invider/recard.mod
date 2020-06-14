function setup() {
    lab.spawn(dna.kinetix.Kinetix)

    lab.spawn(dna.dcircle, {
        name: 'dcircle',
        x: rx(.2),
        y: ry(.2),
    })

    lab.spawn(dna.dcircle, {
        name: 'bcircle',
        x: rx(.4),
        y: ry(.2),
    })

    lab.spawn(dna.dcircle, {
        name: 'fcircle',
        x: rx(.6),
        y: ry(.2),
    })

    lab.spawn(dna.dcircle, {
        name: 'quad',
        x: rx(.2),
        y: ry(.4),
    })

    lab.spawn(dna.dcircle, {
        name: 'cubic',
        x: rx(.4),
        y: ry(.4),
    })

    lab.spawn(dna.dcircle, {
        name: 'quart',
        x: rx(.6),
        y: ry(.4),
    })

    lab.spawn(dna.dcircle, {
        name: 'elastic',
        x: rx(.8),
        y: ry(.4),
    })

    lab.spawn(dna.dcircle, {
        name: 'cubicBezier',
        x: rx(.2),
        y: ry(.6),
    })


    lab.spawn(dna.target, {
        name: 'target',
        x: rx(.8),
        y: ry(.2),
    })

}
