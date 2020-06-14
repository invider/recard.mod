function setup() {
    lab.spawn(dna.kinetix.Kinetix)

    //
    // === row 1 ===
    //
    lab.spawn(dna.dcircle, {
        name: 'linear',
        x: rx(.2),
        y: ry(.2),
    })

    lab.spawn(dna.dcircle, {
        name: 'sin',
        x: rx(.4),
        y: ry(.2),
    })

    lab.spawn(dna.dcircle, {
        name: 'saw',
        x: rx(.6),
        y: ry(.2),
    })

    lab.spawn(dna.dcircle, {
        name: 'quad',
        x: rx(.2),
        y: ry(.4),
    })

    //
    // === row 2 ===
    //
    lab.spawn(dna.target, {
        name: 'target',
        x: rx(.8),
        y: ry(.2),
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

    // === row 3 === 
    lab.spawn(dna.dcircle, {
        name: 'cubicBezier',
        x: rx(.2),
        y: ry(.6),
    })
}
