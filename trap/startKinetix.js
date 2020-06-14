function startKinetix() {
    const kinetix = lab.kinetix

    kinetix.key(lab.dcircle, {
        key: 'r',
        from: 0,
        to: 75,
        period: 2,
        loop: true,
    })

    kinetix.key(lab.bcircle, {
        key: 'r',
        from: 0,
        to: 75,
        period: 2,
        loop: true,
        shape: 'sin',
    })

    kinetix.key(lab.bcircle, {
        key: 'a',
        from: 0,
        to: 1,
        period: 2,
        loop: true,
        shape: 'sin',
    })

    kinetix.key(lab.fcircle, {
        key: 'r',
        from: 0,
        to: 75,
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
        to: 50,
        period: 2,
        loop: true,
    })

    kinetix.key(lab.quad, {
        key: 'r',
        from: 0,
        to: 75,
        period: 2,
        loop: true,
        shape: 'quad',
    })

    kinetix.key(lab.cubic, {
        key: 'r',
        from: 0,
        to: 75,
        period: 2,
        loop: true,
        shape: 'cubic',
    })

    kinetix.key(lab.quart, {
        key: 'r',
        from: 0,
        to: 75,
        period: 2,
        loop: true,
        shape: 'quart',
    })

    kinetix.key(lab.elastic, {
        key: 'r',
        from: 0,
        to: 75,
        period: 2,
        loop: true,
        shape: 'elastic',
    })

    kinetix.key(lab.cubicBezier, {
        key: 'r',
        from: 0,
        to: 75,
        period: 2,
        loop: true,
        shape: 'cubicBezier',
    })

    // animate circle over the screen
    kinetix.key(lab.circle, {
        key: 'x',
        from: rx(.2),
        to:   rx(.8),
        period: 5,
        loop: false,

        onCompleted: function() {
            log('next')
            kinetix.key(lab.circle, {
                key: 'x',
                from: lab.circle.x,
                to:   rx(.2),
                period: 5,
                loop: false,
                shape: 'cubic',
            })
        }
    })

    kinetix.key(lab.circle, {
        key: 'r',
        from: 10,
        to:   50,
        period: .5,
        loop: true,
        //shape: 'saw',
    })

    kinetix.key(lab.circle, {
        key: 'y',
        from: ry(.4),
        to:   ry(.6),
        period: 5,
        loop: false,
        shape: 'sin',
    })

}
