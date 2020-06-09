module.exports = function() {

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


    kinetix.key(lab.circle, {
        key: 'x',
        from: rx(.2),
        to:   rx(.8),
        period: 5,
        loop: true,
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
        period: 1,
        loop: true,
        shape: 'sin',
    })

    kinetix.key(lab.target, {
        key: 'a',
        from: 0,
        to: 1,
        period: .5,
        loop: true,
    })
    kinetix.key(lab.target, {
        key: 'r',
        from: 0,
        to: 50,
        period: .5,
        loop: true,
    })

}
