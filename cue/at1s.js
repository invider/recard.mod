module.exports = function() {

    lab.animo.translate(lab.circle, {
        key: 'x',
        from: rx(.2),
        to:   rx(.8),
        time: 5,
        loop: true,
    })

    lab.animo.translate(lab.circle, {
        key: 'r',
        from: 20,
        to:   100,
        time: 1,
        loop: true,
    })
}
