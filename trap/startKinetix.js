const maxR = 50

function startKinetix() {
    const kinetix = lab.kinetix

    kinetix.key(lab.linear, {
        key: 'r',
        from: 0,
        to: maxR,
        period: 2,
        loop: true,
    })

    kinetix.key(lab.sin, {
        key: 'r',
        from: 0,
        to: maxR,
        period: 2,
        loop: true,
        shape: 'sin',
    })

    kinetix.key(lab.sin, {
        key: 'a',
        from: 0,
        to: 1,
        period: 2,
        loop: true,
        shape: 'sin',
    })

    kinetix.key(lab.saw, {
        key: 'r',
        from: 0,
        to: maxR,
        period: 2,
        loop: true,
        shape: 'saw',
    })


    kinetix.key(lab.target, {
        key: 'a',
        from: 0,
        to: 1,
        period: 2,
        loop: true,
    })
    kinetix.key(lab.target, {
        key: 'r',
        from: 0,
        to: maxR,
        period: 2,
        loop: true,
    })

    kinetix.key(lab.quad, {
        key: 'r',
        from: 0,
        to: maxR,
        period: 2,
        loop: true,
        shape: 'quad',
    })

    kinetix.key(lab.cubic, {
        key: 'r',
        from: 0,
        to: maxR,
        period: 2,
        loop: true,
        shape: 'cubic',
    })

    kinetix.key(lab.quart, {
        key: 'r',
        from: 0,
        to: maxR,
        period: 2,
        loop: true,
        shape: 'quart',
    })

    kinetix.key(lab.elastic, {
        key: 'r',
        from: 0,
        to: maxR,
        period: 2,
        loop: true,
        shape: 'elastic',
    })

    kinetix.key(lab.cubicBezier, {
        key: 'r',
        from: 0,
        to: maxR,
        period: 2,
        loop: true,
        shape: 'cubicBezier',
    })

    // animate circle over the screen
    kinetix.key(lab.sequence, {
        key: 'x',
        from: rx(.1),
        to:   rx(.8),
        hold: 5,
        period: 5,
        loop: false,

        onCompleted: function() {
            log('next')
            kinetix.key(lab.sequence, {
                key: 'x',
                from: lab.sequence.x,
                to:   rx(.2),
                period: 5,
                loop: false,
                shape: 'cubic',
            })
        }
    })

    kinetix.key(lab.sequence, {
        key: 'r',
        from: 10,
        to:   50,
        period: 1,
        loop: true,
        //shape: 'saw',
    })

    kinetix.key(lab.sequence, {
        key: 'y',
        from: ry(.6),
        to:   ry(.8),
        hold: 5,
        period: 5,
        loop: false,
        shape: 'sin',
    })

}
