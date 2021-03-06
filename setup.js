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

    // meters
    lab.spawn(dna.hud.RMeter, {
        name: 'cpu1',
        x: rx(.4),
        y: ry(.6),
        r: 50,
        value: 0,
    })

    lab.spawn(dna.hud.RMeter, {
        name: 'cpu2',
        x: rx(.6),
        y: ry(.6),
        r: 60,
        color: '#35b4db',
        value: 0,
    })

    lab.spawn(dna.hud.RMeter, {
        name: 'cpu3',
        x: rx(.8),
        y: ry(.6),
        r: 70,
        color: '#dc1aed',
        value: 0,
    })

    // line meters
    const w = 200
    const baseX = rx(.8) - w/2
    lab.spawn(dna.hud.LMeter, {
        name: 'line1',
        x: baseX,
        y: ry(.7),
        w: w,
        color: '#38e8bf',
        value: 0,
    })
    lab.spawn(dna.hud.LMeter, {
        name: 'line2',
        x: baseX,
        y: ry(.77),
        w: w,
        color: '#dc1aed',
        value: 0,
    })
    lab.spawn(dna.hud.LMeter, {
        name: 'line3',
        x: baseX,
        y: ry(.84),
        w: w,
        color: '#2672ed',
        value: 0,
    })
    lab.spawn(dna.hud.LMeter, {
        name: 'line4',
        x: baseX,
        y: ry(.91),
        w: w,
        color: '#edb047',
        value: 0,
    })
}
