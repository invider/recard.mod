module.exports = function() {

    const kinetix = lab.kinetix

    kinetix.linear(lab.circle, {
        key: 'x',
        from: rx(.2),
        to:   rx(.8),
        time: 5,
        loop: true,
    })

    kinetix.linear(lab.circle, {
        key: 'r',
        from: 20,
        to:   100,
        time: 1,
        loop: true,
    })

    kinetix.linear(lab.target, {
        key: 'a',
        from: 0,
        to: 1,
        time: .5,
        loop: true,
    })
    kinetix.linear(lab.target, {
        key: 'r',
        from: 0,
        to: 50,
        time: .5,
        loop: true,
    })

    kinetix.linear(lab.dcircle, {
        key: 'r',
        from: 0,
        to: 75,
        time: 2,
        loop: true,
    })
}
